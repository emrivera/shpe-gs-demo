package com.gs.shpeconf.DBManagers;

import java.io.*;
import java.util.Scanner;


public class SharedDBManager {

    static void insertRow(String newRow, String fileName) throws IOException {
        FileWriter fileWriter = new FileWriter(fileName, true);
        PrintWriter writer = new PrintWriter(fileWriter);
        writer.println();
        writer.print(newRow);
        writer.close();
    }

    static Scanner generateNewScanner(String fileName) throws FileNotFoundException {
        Scanner scanner;
        try {
            scanner = new Scanner(new File(fileName));
            return scanner;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        throw new FileNotFoundException();    }
}
