package com.gs.shpeconf.model;

import com.gs.shpeconf.DBManagers.ExpenseDBManager;
import com.gs.shpeconf.DBManagers.PersonDBManager;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Expense {
    private String id;
    private String expenseName;
    private Double amount;
    private List<Person> people;

    public static Expense createNewExpense(String expenseName, Double amount, List<Integer> people) throws IOException {
        Random r = new Random();
        Integer id = r.ints(0, 9999).findAny().getAsInt();

        List<Person> peopleWithNewExpense = new ArrayList<>();
        people.forEach(pId -> {
            try {
                peopleWithNewExpense.add(PersonDBManager.findPersonById(pId));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        });

        Expense newExpense = new Expense(id.toString().concat("e"), expenseName, amount, peopleWithNewExpense);
        ExpenseDBManager.insertExpense(buildDBEntry(newExpense));
        return newExpense;
    }

    public static List<Expense> fetchExpenses() throws FileNotFoundException {
        return ExpenseDBManager.getAllExpenses();
    }

    private static String buildDBEntry(Expense newExpense) {
        String expenseString = newExpense.getId()
                .concat(" " + newExpense.getExpenseName())
                .concat(" " + newExpense.getAmount().toString())
                .concat(" " + newExpense.getPeople().stream()
                        .map(n -> n.getId().toString())
                        .collect(Collectors.joining(" ", " ", "")));

        return expenseString;
    }

    //setters & getters ----------
    public String getId() {
        return id;
    }

    public String getExpenseName() {
        return expenseName;
    }

    public Double getAmount() {
        return amount;
    }

    public List<Person> getPeople() {
        return people;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setExpenseName(String expenseName) {
        this.expenseName = expenseName;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setPeople(List<Person> people) {
        this.people = people;
    }

    public Expense() {

    }

    public Expense (String id, String expenseName, Double amount, List<Person> people) {
        this.expenseName = expenseName;
        this.amount = amount;
        this.people = people;
        this.id = id;
    }
}
