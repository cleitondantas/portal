package com.montreal.portal.controler;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.chemistry.opencmis.client.api.Document;
import org.apache.chemistry.opencmis.client.api.Folder;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.montreal.portal.alfresco.AlfrescoFileUpload;
import com.montreal.portal.alfresco.ConfigureAlfrescoFileUpload;
import com.montreal.portal.entity.UploadFilesAlfresco;
import com.montreal.portal.repository.UploadFilesAlfrescoRepository;
import com.montreal.portal.response.Response;
import com.montreal.portal.util.EncodeHash;
import com.montreal.portal.util.MimeType;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class UploadFileControler {

    @Autowired
    private UploadFilesAlfrescoRepository alfrescoRepository;
   
	
	final Logger logger = LogManager.getLogger(this.getClass());
	private EncodeHash hash = new EncodeHash ();  
	private ConfigureAlfrescoFileUpload confi = new ConfigureAlfrescoFileUpload();
	private AlfrescoFileUpload fileUpload=null;
    private SimpleDateFormat anoformat = new SimpleDateFormat("yyyy");
    private SimpleDateFormat mesformat = new SimpleDateFormat("MM");
    private MimeType mimetype = new MimeType();
    private String mimeTypeName;
    
 
	public UploadFileControler() {
		fileUpload = new AlfrescoFileUpload(confi.getParams());
	}

	
	
	@PostMapping(path = "/api")
	public ResponseEntity<?> api() {
		System.out.println("API");
		return ResponseEntity.ok("true");
	}


	
	@PostMapping(path = "/api/files")
    public ResponseEntity<Response<?>> upload(@RequestParam("plataforma") String plataforma, @RequestParam("file") MultipartFile file) {
		Response<Map<String,String>> response = new Response<>();
		 Map<String,String> map = new HashMap<String,String>();
		String idDocumentAlfresco;
		String hashcode;
		try {
			hashcode = hash.encode(file.getBytes());
			idDocumentAlfresco = salvar(plataforma, file);
		} catch (IOException | NoSuchAlgorithmException e) {
			response.getErrors().add("Problemas na tentativa de salvar arquivo.");
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		map.put("SHA256", hashcode);
		map.put("FILENAME", file.getOriginalFilename());
		map.put("IDALFRESCO", idDocumentAlfresco);
		response.setData(map);
		persisteDadosFileAlfreco(idDocumentAlfresco, file.getOriginalFilename(), plataforma, hashcode, mimeTypeName, null);
		return  ResponseEntity.ok(response);
    }
	

	public String salvar(String plataforma, MultipartFile arquivo) throws IOException {
		try {
	    String pastaAno = anoformat.format(new Date());
	    String pastaMes = mesformat.format(new Date());
	    
		fileUpload.criarPasta(confi.getSession(),pastaAno);
		fileUpload.criarSubPasta(confi.getSession(),pastaAno,pastaMes);
		Folder pasta =  fileUpload.criarSubPasta(confi.getSession(),pastaAno+"/"+pastaMes+"/",plataforma);
		mimeTypeName = mimetype.mimeTypeUtil(new ByteArrayInputStream(arquivo.getBytes()));
	
		Document document =	fileUpload.enviarArquivo(arquivo.getBytes(), arquivo.getOriginalFilename(), mimeTypeName,pasta,confi.getSession());
		System.out.println(document.getId());
		
		return document.getId();
		} catch (Exception e) {
			logger.error("ERRO",e);
			 throw new IOException(e);
		}
	}
	
	private void persisteDadosFileAlfreco(String idDocumentAlfreco,String nomeFile,String plataforma,String sha256,String mimetype,Integer idUsuario) {
		UploadFilesAlfresco uploadFile = new UploadFilesAlfresco();
		uploadFile.setDtAtividade(new Date());
		uploadFile.setIdAlfreco(idDocumentAlfreco);
		uploadFile.setMimetype(mimetype);
		uploadFile.setIdUsuarioWeb(idUsuario);
		uploadFile.setNomeFile(nomeFile);
		uploadFile.setPlataforma(plataforma);
		uploadFile.setSha256(sha256);
		alfrescoRepository.save(uploadFile);
		
	}
}
