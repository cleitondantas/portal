package com.montreal.portal.util;

import java.io.IOException;
import java.io.InputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.xml.bind.DatatypeConverter;

import org.apache.commons.io.IOUtils;

public class EncodeHash {

	
	
	public String encode(InputStream in) throws IOException, NoSuchAlgorithmException {
		byte[] targetArray = IOUtils.toByteArray(in);
		return encode(targetArray);
	}
	
	public String encode(byte[] input) throws NoSuchAlgorithmException {
	        MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
			algorithm.update(input);
			byte[] digest = algorithm.digest();
		    String myChecksum = DatatypeConverter.printHexBinary(digest).toUpperCase();
			return myChecksum;
	}
	

}
