package com.montreal.portal;

public class PortalTest {
	
	

	public static void main(String[] args) {
		try {
			PortalTest pt  = new PortalTest();
			pt.test();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void test() throws InterruptedException {
		for ( int i = 0 ; i < 20 ; i ++) { 
			 System.out.println ( i ); 
			 } 
		int i = 15 ;
		System.out.println (i);
	    
	}
	
	
	public static void radon() {
		
	}
}
