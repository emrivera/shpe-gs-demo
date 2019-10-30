package com.gs.shpeconf.model;

import com.gs.shpeconf.DBManagers.ExpenseDBManager;

import java.io.FileNotFoundException;
import java.util.List;
import java.util.Random;

public class Expense {
    private Integer id;
    private String expenseName;
    private Double amount;
    private List<Person> people;

    public Integer getId() {
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

    public void setId(Integer id) {
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

    public Expense (Integer id, String expenseName, Double amount, List<Person> people) {
        this.expenseName = expenseName;
        this.amount = amount;
        this.people = people;
        this.id = id;
    }

    public static Expense createNewExpense(String expenseName, Double amount, List<Person> people) {
        Random r = new Random();
        Integer id = r.ints(0, 9999).findAny().getAsInt();
        //todo add logic here to insert into db

        return new Expense(id, expenseName, amount, people);
    }


    public static List<Expense> fetchExpenses() throws FileNotFoundException {
        return ExpenseDBManager.getAllExpenses();
    }


}
