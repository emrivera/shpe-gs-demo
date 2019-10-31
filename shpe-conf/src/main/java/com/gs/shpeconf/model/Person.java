package com.gs.shpeconf.model;

import com.gs.shpeconf.DBManagers.PersonDBManager;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class Person {

    private String name;
    private Integer id;

    public static Integer createNewPerson(String name) throws IOException {
        Random r = new Random();
        Integer id = r.ints(0, 9999).findAny().getAsInt();
        // Remove whitespace from Names and convert to PascalCase
        Person newPerson =  new Person(id, name);
        PersonDBManager.insertPerson(buildDBEntry(newPerson));
        return newPerson.id;
    }

    public static List<Person> fetchAllPersons() throws FileNotFoundException {
        return PersonDBManager.getAllPersons();
    }

    private static String buildDBEntry(Person newPerson) {
        return newPerson.id.toString().concat(" " + newPerson.name);
    }

    //setters & getters-----
    public Person() {

    }

    public Person(Integer id, String name) {
        this.id = id;
        this.name = name;
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

    public void setId(Integer id) {
        this.id = id;
    }
}