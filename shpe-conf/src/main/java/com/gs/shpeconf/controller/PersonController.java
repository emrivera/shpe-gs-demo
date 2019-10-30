package com.gs.shpeconf.controller;

import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gs.shpeconf.model.Person;

@RestController
public class PersonController
{
    @RequestMapping("/api/people")
    public Map <String, List<Person>> getPeople() throws FileNotFoundException
    {
        return buildGetPeopleResponse(Person.fetchAllPersons());
    }

    private Map<String, List<Person>> buildGetPeopleResponse(List<Person> people) {
        Map<String, List<Person>> response = new HashMap<>();
        response.put("people", people);
        return response;
    }
}