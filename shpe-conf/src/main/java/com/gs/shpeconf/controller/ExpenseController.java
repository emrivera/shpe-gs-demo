package com.gs.shpeconf.controller;

import com.gs.shpeconf.model.Expense;
import com.gs.shpeconf.requests.CreateExpenseRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping
public class ExpenseController {

    @PostMapping("api/expense")
    @ResponseStatus(HttpStatus.CREATED)
    public Expense createExpense(@RequestBody CreateExpenseRequest request ) throws IOException {
       return Expense.createNewExpense(request.getExpenseName(), request.getAmount(), request.getPeople());
    }

    @GetMapping("api/expenses")
    public List<Expense> getExpenses() throws FileNotFoundException {
        return Expense.fetchExpenses();
    }
}
