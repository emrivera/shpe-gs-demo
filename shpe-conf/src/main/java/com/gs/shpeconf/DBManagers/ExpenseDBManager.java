package com.gs.shpeconf.DBManagers;

import com.gs.shpeconf.model.Expense;
import com.gs.shpeconf.model.Person;

import java.io.*;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class ExpenseDBManager {

    private static final String fileName = "src/main/java/com/gs/shpeconf/DBManagers/expenseDB.txt";

    public static List<Expense> getAllExpenses () throws FileNotFoundException {
        List<Expense> expenses = new LinkedList<>();
        Scanner scanner = generateNewScanner();

        while(scanner.hasNextLine()) {
            List<Person> p = new LinkedList<>();
            List<Integer> pIds = new LinkedList<>();

            Expense newExpense =  new Expense();
            newExpense.setId(scanner.next());
            newExpense.setExpenseName(scanner.next());
            newExpense.setAmount(scanner.nextDouble());

            while(scanner.hasNextInt()) {
                pIds.add(scanner.nextInt());
            }

            pIds.forEach(personId -> {
                try {
                    p.add(PersonDBManager.findPersonById(personId));
                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                }
            });

            newExpense.setPeople(p);
            expenses.add(newExpense);
        }

        return expenses;
    }

    public static void insertExpense(String row) throws IOException {
        FileWriter fileWriter = new FileWriter(fileName, true);
        PrintWriter writer = new PrintWriter(fileWriter);
        writer.println();
        writer.print(row);
        writer.close();
    }

    private static Scanner generateNewScanner() throws FileNotFoundException{
        Scanner scanner;
        try {
            scanner = new Scanner(new File(fileName));
            return scanner;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        throw new FileNotFoundException();
    }

}
