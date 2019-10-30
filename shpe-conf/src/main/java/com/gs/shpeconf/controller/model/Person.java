package com.gs.shpeconf.controller.model;

import java.util.Random;

public class Person {

    private String name;
    private Integer id;

    public Person(String name) {
        super();
        Random r = new Random();
        this.id = r.ints(0, 9999).findAny().getAsInt();
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}