package com.ssafy.sayeon.model.entity;

public interface ReceivedStoryView {
	String getStoryId();
	String getSenderId();
	String getReceiverId();
	String getDateSent();
	String getDateReceived();
	String getImage();
	String getImageType();
	String getKeyword();
}
