package com.gs.shpeconf.DBManagers;

import java.io.*;
import java.util.Scanner;


public class SharedDBManager {

    public static void insertRow(String newRow, String fileName) throws IOException {
        PrintWriter writer = new PrintWriter(new FileWriter(SharedDBManager.class.getClass().getResource(fileName).getPath(), true));
        writer.println();
        writer.print(newRow);
        writer.close();
    }

    static Scanner generateNewScanner(String fileName) throws FileNotFoundException {
        Scanner scanner;
        try {
            scanner = new Scanner(new File(SharedDBManager.class.getClassLoader().getResource(fileName).getFile()));
            return scanner;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        throw new FileNotFoundException();    }
}
