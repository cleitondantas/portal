package com.montreal.portal.util;

import java.io.IOException;
import java.io.InputStream;

import org.apache.tika.exception.TikaException;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.parser.AutoDetectParser;
import org.apache.tika.parser.ParseContext;
import org.apache.tika.parser.Parser;
import org.apache.tika.sax.BodyContentHandler;
import org.xml.sax.SAXException;

public class MimeType {
	public enum Type {
		JPG, JPEG, BMP, PNG, DOCX, DOC, PDF,TIF;
	}
	
	/**
	 * Metodo que retora o tipo de extenção do arquivo/ (Mime-Type Ex: aplication/pdf)
	 * @param input
	 * @return
	 * @throws IOException
	 * @throws SAXException
	 * @throws TikaException
	 */
	public String mimeTypeUtil(InputStream input) throws IOException, SAXException, TikaException{
		
		Metadata metadata = new Metadata();
		BodyContentHandler handler = new BodyContentHandler(-1);
		//Define o parser que detecta automaticamente o tipo
			Parser parser = new AutoDetectParser();
			parser.parse(input, handler, metadata,new ParseContext());
			String mimeTypeString = metadata.get("Content-Type");
			
			return mimeTypeString;
	}
	
	
	/**
	 * Retorna o tipo do arquivo do InputStream
	 * @param input
	 * @return
	 * @throws IOException
	 * @throws SAXException
	 * @throws TikaException
	 */
	public String modifiedUtil(InputStream input) throws IOException, SAXException, TikaException{
		Metadata metadata = new Metadata();
		BodyContentHandler handler = new BodyContentHandler(-1);
		//Define o parser que detecta automaticamente o tipo
			Parser parser = new AutoDetectParser();
			parser.parse(input, handler, metadata,new ParseContext());
		return  metadata.get("modified");
	}
	
	
}
