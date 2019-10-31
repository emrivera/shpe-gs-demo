package com.gs.shpeconf.model;

import com.gs.shpeconf.DBManagers.ExpenseDBManager;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Expense {
    private String id;
    private String expenseName;
    private Double amount;
    private List<Person> people;
    private List<Integer> peopleIds;

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

    public List<Integer> getPeopleIds() {
        return peopleIds;
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

    public void setPeopleIds(List<Integer> peopleIds) {
        this.peopleIds = peopleIds;
    }

    public Expense() {

    }

    public Expense (String id, String expenseName, Double amount, List<Integer> people) {
        this.expenseName = expenseName;
        this.amount = amount;
        this.peopleIds = people;
        this.id = id;
    }

    public static Expense createNewExpense(String expenseName, Double amount, List<Integer> people) throws IOException {
        Random r = new Random();
        Integer id = r.ints(0, 9999).findAny().getAsInt();
        Expense newExpense = new Expense(id.toString().concat("e"), expenseName, amount, people);
        ExpenseDBManager.insertExpense(buildDBEntry(newExpense));
        return newExpense;
    }

    private static String buildDBEntry(Expense newExpense) {
        String expenseString = newExpense.getId()
                .concat(" " + newExpense.getExpenseName())
                .concat(" " + newExpense.getAmount().toString())
                .concat(" " + newExpense.getPeopleIds().stream()
                        .map(n -> n.toString())
                        .collect(Collectors.joining(" ", " ", "")));

        return expenseString;
    }

    public static List<Expense> fetchExpenses() throws FileNotFoundException {
        return ExpenseDBManager.getAllExpenses();
    }


}
