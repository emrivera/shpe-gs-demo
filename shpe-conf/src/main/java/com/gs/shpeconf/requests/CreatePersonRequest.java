package com.gs.shpeconf.requests;

public class CreatePersonRequest {
    private String name;

    public CreatePersonRequest() {}

    public CreatePersonRequest(String name) {
     this.name = name;
    }

    public String getName() {
        return name;
    }
}
