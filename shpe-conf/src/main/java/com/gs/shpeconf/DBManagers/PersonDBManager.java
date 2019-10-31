package com.gs.shpeconf.DBManagers;

import com.gs.shpeconf.model.Person;

import java.io.*;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class PersonDBManager extends SharedDBManager{

    private static final String fileName = "shpe-conf/src/main/java/com/gs/shpeconf/DBManagers/personDB.txt";

    public static List<Person> getAllPersons () throws FileNotFoundException {
        Scanner scanner = generateNewScanner(fileName);
        List<Person> people = new LinkedList<>();
        while(scanner.hasNextLine()) {
            people.add(new Person(scanner.nextInt(), scanner.next()));
        }
        return people;
    }

    public static Person findPersonById(Integer id) throws FileNotFoundException{
        Scanner scanner = generateNewScanner(fileName);
        while(scanner.hasNextLine()) {
            if(scanner.nextInt() == id){
                return new Person(id, scanner.next());
            }
            scanner.nextLine();
        }
        throw new IllegalStateException();
    }

    public static void insertPerson(String row) throws IOException {
        insertRow(row, fileName);
    }
}
