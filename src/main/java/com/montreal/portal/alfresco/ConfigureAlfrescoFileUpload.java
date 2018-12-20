package com.montreal.portal.alfresco;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.chemistry.opencmis.client.api.Repository;
import org.apache.chemistry.opencmis.client.api.Session;
import org.apache.chemistry.opencmis.client.api.SessionFactory;
import org.apache.chemistry.opencmis.client.runtime.SessionFactoryImpl;
import org.apache.chemistry.opencmis.commons.SessionParameter;
import org.apache.chemistry.opencmis.commons.enums.BindingType;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class ConfigureAlfrescoFileUpload {

	private static Logger logger = LogManager.getLogger(ConfigureAlfrescoFileUpload.class);
	private String servidor = "http://10.6.5.32:8080/alfresco/api/-default-/public/cmis/versions/1.1/atom";//PropertiesUtil.getResource("repositorio.url");
	private String user = "admin-mci@santander.montreal.br";//PropertiesUtil.getResource("repositorio.user");
	private String pwd = "mci-sant";//PropertiesUtil.getResource("repositorio.pwd");
	private String urlLogin = "http://10.6.5.32:8080/alfresco/service/api/login";//PropertiesUtil.getResource("repositorio.url.login");
	private String urlView = "http://10.6.5.32:8080/alfresco/api/-default-/public/cmis/versions/1.1/browser/root";
	private String pathSitesDocument = "/sites/acessoria/DocumentLibrary/";
	public static String URL_LOGIN = "URL_LOGIN";
	public static String URL_VIEW = "URL_VIEW";
	public static String PATH_SITES_DOCUMENTLIBRARY = "PATH_SITES_DOCUMENTLIBRARY";
	
	public ConfigureAlfrescoFileUpload() {
	}
	
	public ConfigureAlfrescoFileUpload(String servidor,String user,String pwd,String urlLogin,String urlView,String pathSitesDocument) {
		if(servidor!=null) {
			this.servidor = servidor;
		}
		if(user != null) {
			this.user = user;
		}
		if(pwd != null) {
			this.pwd = pwd;
		}
		if(urlLogin != null) {
			this.urlLogin = urlLogin;
		}
		if(urlView != null) {
			this.urlView = urlView;
		}
		if(pathSitesDocument != null) {
			this.pathSitesDocument = pathSitesDocument;
		}
				
	}
	
	// conectar ao alfresco
	public Session getSession() {
		if(user==null|| servidor == null || pwd == null) {
			logger.error("ERRO: FALTA DE PARAMETROS DE LOGIN");
			return null;
		}
		SessionFactory factory = SessionFactoryImpl.newInstance();
		Map<String, String> params = getParams();
		List<Repository> repositories = factory.getRepositories(params);
		params.put(SessionParameter.REPOSITORY_ID,repositories.get(0).getId());  
		Session session = factory.createSession(params);
		return session;
	}	
	
	public Map<String, String> getParams(){
		Map<String, String> params = new HashMap<String, String>();
		params.put(SessionParameter.USER, user);
		params.put(SessionParameter.PASSWORD, pwd);
		params.put(SessionParameter.ATOMPUB_URL, servidor);
		params.put(SessionParameter.BINDING_TYPE, BindingType.ATOMPUB.value());
		params.put(URL_LOGIN, urlLogin);
		params.put(URL_VIEW, urlView);
		params.put(PATH_SITES_DOCUMENTLIBRARY, pathSitesDocument);
		return params;
	}
	
	
	
}
