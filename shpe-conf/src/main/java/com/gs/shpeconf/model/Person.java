package com.gs.shpeconf.model;

import com.gs.shpeconf.DBManagers.PersonDBManager;

import java.io.FileNotFoundException;
import java.util.List;
import java.util.Random;

public class Person {

    private String name;
    private Integer id;

    public Person() {

    }

    public Person(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public static Person createNewPerson(String name) {
        Random r = new Random();
        Integer id = r.ints(0, 9999).findAny().getAsInt();

        return new Person(id, name);
    }

    public static List<Person> fetchAllPersons() throws FileNotFoundException {
        return PersonDBManager.getAllPersons();
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}