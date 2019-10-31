package com.gs.shpeconf.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.gs.shpeconf.requests.CreatePersonRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.gs.shpeconf.model.Person;

@RestController
@RequestMapping
public class PersonController
{
    @GetMapping("/api/people")
    public Map <String, List<Person>> getPeople() throws FileNotFoundException
    {
        return buildGetPeopleResponse(Person.fetchAllPersons());
    }

    @PostMapping("/api/people")
    @ResponseStatus(HttpStatus.CREATED)
    public Map<String, Integer> createPerson(@RequestBody CreatePersonRequest request) throws IOException {
        Map<String, Integer> response = new HashMap<>();
        response.put("id", Person.createNewPerson(request.getName()));
        return response;
    }

    private Map<String, List<Person>> buildGetPeopleResponse(List<Person> people) {
        Map<String, List<Person>> response = new HashMap<>();
        response.put("people", people);
        return response;
    }
}