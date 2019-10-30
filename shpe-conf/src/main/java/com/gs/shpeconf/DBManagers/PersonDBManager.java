package com.gs.shpeconf.DBManagers;

import com.gs.shpeconf.model.Person;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class PersonDBManager {

    public static List<Person> getAllPersons () throws FileNotFoundException {
        Scanner scanner = generateNewScanner();
        List<Person> people = new LinkedList<>();
        while(scanner.hasNextLine()) {
            people.add(new Person(scanner.nextInt(), scanner.next()));
        }
        return people;
    }

    public static Person findPersonById(Integer id) throws FileNotFoundException{
        Scanner scanner = generateNewScanner();
        while(scanner.hasNextLine()) {
            if(scanner.nextInt() == id){
                return new Person(id, scanner.next());
            }
            scanner.nextLine();
        }
        throw new IllegalStateException();
    }

    private static Scanner generateNewScanner() throws FileNotFoundException{
        Scanner scanner;
        try {
            scanner = new Scanner(new File("src/main/java/com/gs/shpeconf/DBManagers/personDB.csv"));
            return scanner;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        throw new FileNotFoundException();
    }
}
