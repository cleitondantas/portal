package com.montreal.portal;

import java.util.concurrent.atomic.AtomicInteger;

import io.reactivex.Flowable;
import io.reactivex.Observable;
import io.reactivex.Single;
import io.reactivex.schedulers.Schedulers;

public class PortalTest {

	public static void main(String[] args) {
		try {
			test();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void test() throws InterruptedException {

		int startValue = 1;
		int incrementValue = 1;
		Flowable<Integer> flowable = Flowable.generate(() -> startValue, (s, emitter) -> {
			int nextValue = s + incrementValue;
			emitter.onNext(nextValue);
			
			return nextValue;
		});
		flowable.subscribe(value -> System.out.println(value));
	}
	
	
	public static void radon() {
		
	}
}
