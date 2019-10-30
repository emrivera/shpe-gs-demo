package com.gs.shpeconf.DBManagers;

import com.gs.shpeconf.model.Expense;
import com.gs.shpeconf.model.Person;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class ExpenseDBManager {

    public static List<Expense> getAllExpenses () throws FileNotFoundException {
        List<Expense> expenses = new LinkedList<>();
        Scanner scanner = generateNewScanner();

        while(scanner.hasNextLine()) {
            List<Person> p = new LinkedList<>();
            List<Integer> pIds = new LinkedList<>();

            Expense newExpense =  new Expense();
            newExpense.setExpenseName(scanner.next());
            newExpense.setId(scanner.nextInt());
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

    private static Scanner generateNewScanner() throws FileNotFoundException{
        Scanner scanner;
        try {
            scanner = new Scanner(new File("src/main/java/com/gs/shpeconf/DBManagers/expenseDB.txt"));
            return scanner;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        throw new FileNotFoundException();
    }

}
