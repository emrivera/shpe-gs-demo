package com.gs.shpeconf.requests;

public class CreateExpenseRequest {

    private String expenseName;
    private Double amount;
    private Integer[] people; //ids of the people

    public CreateExpenseRequest(String expenseName, Double amount, Integer[] people) {
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

    public Integer[] getPeople() {
        return people;
    }
}
