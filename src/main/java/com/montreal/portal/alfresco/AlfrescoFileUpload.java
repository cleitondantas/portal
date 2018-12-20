package com.montreal.portal.alfresco;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.chemistry.opencmis.client.api.CmisObject;
import org.apache.chemistry.opencmis.client.api.Document;
import org.apache.chemistry.opencmis.client.api.Folder;
import org.apache.chemistry.opencmis.client.api.ObjectId;
import org.apache.chemistry.opencmis.client.api.Session;
import org.apache.chemistry.opencmis.commons.PropertyIds;
import org.apache.chemistry.opencmis.commons.SessionParameter;
import org.apache.chemistry.opencmis.commons.data.ContentStream;
import org.apache.chemistry.opencmis.commons.enums.VersioningState;
import org.apache.chemistry.opencmis.commons.exceptions.CmisContentAlreadyExistsException;
import org.apache.chemistry.opencmis.commons.exceptions.CmisObjectNotFoundException;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;

public class AlfrescoFileUpload {


	private static Logger logger = LogManager.getLogger(AlfrescoFileUpload.class);
	private  Document document;
	private  Map<String, String> params;
   
	public AlfrescoFileUpload(Map<String, String> params) {
		this.params = params;
	}
	

	public CmisObject findObjectById(Session session, String objectId){
		CmisObject object = session.getObject(session.getObject(objectId));
		return object;
	}
	
	public byte[] downloadContent(Session session, String objectId){
		Document document = (Document) findObjectById(session, objectId);
		InputStream doc = document.getContentStream().getStream();
		byte[] bytes = null;
		try {
			bytes = IOUtils.toByteArray(doc);
		} catch (IOException e) {
			logger.error("ERRO",e);
		}
		
		return bytes;
	}
	

	public  void visualizarDocumento(HttpServletResponse response,String mimeContentType, String filename, byte[] doc) throws IOException {        
        BufferedInputStream input = null;
        BufferedOutputStream output = null;
        try {
            // Open file.                                                                                        
            input = new BufferedInputStream(new ByteArrayInputStream(doc));
            // Init servlet response.
            response.reset();           
            response.setHeader("Content-Type", mimeContentType);
            response.setHeader("Content-Length", String.valueOf(doc.length));
            response.setHeader("Content-Disposition", "inline; filename=\"" + filename + "\"");
            output = new BufferedOutputStream(response.getOutputStream());
            // Write file contents to response.
            byte[] buffer = new byte[100];
            int length;
            while ((length = input.read(buffer)) > 0) {
                output.write(buffer, 0, length);
            }            
             // Finalize task.
            output.flush();                        
        }        
        finally{
            output.close();
            input.close();
        }       
        //FacesUtil.responseComplete(); 
	}
	
	
	
	// criar pasta
	public  Folder criarPasta(Session session, String folderName) {
		Folder root =  (Folder) session.getObjectByPath(params.get(ConfigureAlfrescoFileUpload.PATH_SITES_DOCUMENTLIBRARY)); 
		Folder pasta = null;
		// se a pasta nao existir, cria a  nova pasta
		try {
			pasta = (Folder) session.getObjectByPath(root.getPath() + "/" + folderName);
			System.out.println("Diretorio ja existe...");
			logger.info("Diretorio ja existe...");
		}
		catch (CmisObjectNotFoundException  e) {
			pasta = (Folder) session.getObjectByPath(params.get(ConfigureAlfrescoFileUpload.PATH_SITES_DOCUMENTLIBRARY));
			Map<String, Object> props = new HashMap<String, Object>();
			props.put(PropertyIds.OBJECT_TYPE_ID, "cmis:folder");
			props.put(PropertyIds.NAME, folderName);
			
			pasta = pasta.createFolder(props);
			logger.info("Nova pasta criada");
			System.out.println("Nova pasta criada");
		}
		
		return pasta;
	}
	
	
	public  Folder criarSubPasta(Session session, String folder, String folderName) {
		Folder root =  (Folder) session.getObjectByPath(params.get(ConfigureAlfrescoFileUpload.PATH_SITES_DOCUMENTLIBRARY)+folder); 
		Folder pasta = null;
		// se a pasta nao existir, cria a  nova pasta
		try {
			pasta = (Folder) session.getObjectByPath(root.getPath() + "/" + folderName);
			logger.info("Diretorio ja existe...");
		}
		catch (CmisObjectNotFoundException  e) {
			pasta = (Folder) session.getObjectByPath(params.get(ConfigureAlfrescoFileUpload.PATH_SITES_DOCUMENTLIBRARY)+folder);
			Map<String, Object> props = new HashMap<String, Object>();
			props.put(PropertyIds.OBJECT_TYPE_ID, "cmis:folder");
			props.put(PropertyIds.NAME, folderName);
			pasta = pasta.createFolder(props);
			logger.info("Nova pasta criada");
		}
		return pasta;
	}
	
	
	
	/**
	 * Envia arquivo para o Alfresco
	 * @param buff
	 * @param nomearquivo
	 * @param folder
	 * @param session
	 * @return
	 * @throws Exception
	 */
	public  Document enviarArquivo(byte[] buff,String nomearquivo,String mimeType, Folder folder, Session session) throws Exception {
		try {
			SimpleDateFormat sourceDateFormat = new SimpleDateFormat("yyyyMMDDHHmmss");
			String nameTime = sourceDateFormat.format(new Date());
			final Map<String, Object> propsDoc = new HashMap<String, Object>();
			propsDoc.put(PropertyIds.OBJECT_TYPE_ID, "cmis:document");
			final String novoNomeArquivo = nameTime+"-"+nomearquivo;
			propsDoc.put(PropertyIds.DESCRIPTION, novoNomeArquivo);
			propsDoc.put(PropertyIds.NAME, novoNomeArquivo);
			final ByteArrayInputStream input = new ByteArrayInputStream(buff);
			final ContentStream cs = session.getObjectFactory().createContentStream(novoNomeArquivo, buff.length,mimeType, input);
			document = folder.createDocument(propsDoc, cs,VersioningState.MAJOR);
			//docto.setIdRepositorio(formataId(document.getId()));
			logger.debug("Documento criado...");
		}catch(CmisContentAlreadyExistsException  e) {
			logger.error("Documento ja existe...",e);
			throw new Exception(e);
		}
		return document;
	}

	public  void deletaDocumento(Session session, Folder folder,String nomeDocumento) throws Exception {
		try {
			CmisObject obj = session.getObjectByPath(folder.getPath()+"/"+nomeDocumento);
			obj.delete(true);
		}
		catch(CmisObjectNotFoundException e) {
			logger.error("ERROR",e);
			throw new Exception(e);
		}

	}
	
	/**
	 * Faz o replace dos dados de configuracao para gerar o Ticket de configuracao
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	public String getTicket() throws UnsupportedEncodingException {
		Client client = Client.create();
		String urlLogin = params.get(ConfigureAlfrescoFileUpload.URL_LOGIN); //"http://10.6.5.32:8080/alfresco/service/api/login";//
		String user = params.get(SessionParameter.USER);//PropertiesUtil.getResource("repositorio.user");
		String pwd = params.get(SessionParameter.PASSWORD);// "mci-sant";//PropertiesUtil.getResource("repositorio.pwd");
		String url = urlLogin +"?u="+user+"&pw="+pwd;
		WebResource wr = client.resource(url).queryParam("u", user).queryParam("pw", pwd);
		String ticket = wr.get(String.class);
	    return ticket.substring(ticket.indexOf("TICKET_"),ticket.indexOf("</ticket>"));
	}
	
	/**
	 * //
	 * @param objectId
	 * @param swapDirJava
	 * @param urlImage
	 * @param extencao (.pdf)
	 * @return
	 * @throws IOException
	 */
	public String copyFilePath(String objectId,File swapDirJava,String urlImage,String extencao) throws IOException{
		if(objectId==null){
			return null;
		}
		String namefile = objectId.replaceAll(";","_"); 
		File filetemp = new File(swapDirJava.getAbsolutePath()+ System.getProperty("file.separator")+namefile+extencao);
		String urls = getUrlImage(objectId,urlImage);
		URL url = new URL(urls);
		FileUtils.copyURLToFile(url, filetemp);
		return filetemp.getAbsolutePath();
	}
	
	/** 
	 * @param idDocto (ID DO DOC DO ALFRESCO)
	 * @param urlImage  "http://10.6.5.32:8080/alfresco/api/-default-/public/cmis/versions/1.1/browser/root"; ou //PropertiesUtil.getResource("repositorio.url.view");
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	public  String getUrlImage(String idDocto,String urlImage) throws UnsupportedEncodingException {
		urlImage += "?objectId="+idDocto+"&alf_ticket="+getTicket();
		return urlImage;
	}
	
	
	/**
	 * FAZ CHECKOUT DO DOCUMENTO
	 * @param documentId --ID do documento
	 * @return --Retorna um documento PWC(Private Working Copy)
	 */
	public  Document checkout(Session session, String documentId){
		Document document = (Document) findObjectById(session, documentId);
		ObjectId objId = document.checkOut();
		return (Document) session.getObject(objId);	
	}
	
	/**
	 * DESFAZ CHECKOUT DO DOCUMENTO
	 * @param documentId --ID do documento
	 * @return --Retorna um documento PWC(Private Working Copy)
	 */
	public  void cancelCheckout(Session session, String documentId){
		Document document = (Document) findObjectById(session, documentId);
		document.cancelCheckOut();
	}
	
	/**
	 *  VERSIONA DOCUMENTO
	 * @param documentId --ID do documento que sera versionado
	 * @param content --Conteudo da nova versao
	 * @param note --Comentarios sobre a nova versao
	 * @param isMajorVersion --Informa se a nova versao sera a versao principal
	 * @param properties --Propriedades da nova versao
	 */
	public String versioning(Session session, String documentId, byte[] content, String note, boolean isMajorVersion, Map<String, Object> properties){
		String retorno = null;
		try {
			Document document = checkout(session, documentId);
			ByteArrayInputStream input =   new ByteArrayInputStream(content);
			ContentStream contentStream = session.getObjectFactory().createContentStream(document.getName().toUpperCase(), content.length, document.getContentStream().getMimeType(), input);
			ObjectId id = document.checkIn(isMajorVersion, properties, contentStream, note);
			retorno = id.getId();
		} catch (Exception e) {
			logger.error("ERROR",e);
			try {
				cancelCheckout(session, documentId);
			} catch (Exception e1) {
				logger.error("ERROR",e1);
			}
		}
		
		return retorno;
		
	}
	
}