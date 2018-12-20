package com.montreal.portal;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.xml.bind.DatatypeConverter;

public class TesteAlgoritmo {
	 public static void main(String args []) throws NoSuchAlgorithmException, UnsupportedEncodingException {
         try {
		//-------------- Senha Admin
         String senhaAdmin = "C:\\jdk-11.0.1_linux-x64_bin.tar.gz";
          
         MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
		algorithm.update(Files.readAllBytes(Paths.get(senhaAdmin)));

		byte[] digest = algorithm.digest();
	    String myChecksum = DatatypeConverter.printHexBinary(digest).toUpperCase();
		System.out.println(myChecksum);
//		
         byte messageDigestSenhaAdmin[] = algorithm.digest(senhaAdmin.getBytes("UTF-8"));
           
         StringBuilder hexStringSenhaAdmin = new StringBuilder();
         for (byte b : messageDigestSenhaAdmin) {
                  hexStringSenhaAdmin.append(String.format("%02X", 0xFF & b));
         }
         String senhahexAdmin = hexStringSenhaAdmin.toString();
          
         System.out.println(senhahexAdmin);
 		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	 }
}
