package com.gs.shpeconf.requests;

import java.util.List;

public class CreateExpenseRequest {

    private String expenseName;
    private Double amount;
    private List<Integer> people; //ids of the people

    public CreateExpenseRequest(String expenseName, Double amount, List<Integer> people) {
        this.expenseName = expenseName;
        this.amount = amount;
        this.people = people;
    }

    public String getExpenseName() {
        return expenseName;
    }

    public Double getAmount() {
        return amount;
    }

    public List<Integer> getPeople() {
        return people;
    }
}
