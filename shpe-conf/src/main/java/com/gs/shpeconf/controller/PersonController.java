package com.gs.shpeconf.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gs.shpeconf.controller.model.Person;

@RestController
public class PersonController
{
    @RequestMapping("/api/people")
    public Map <String, List<Person>> getPeople()
    {
        List<Person> people = new ArrayList<Person>();

        //todo: emy-> setup to read from a file
        people.add(new Person("emy"));
        people.add(new Person("rosbel"));
        people.add(new Person("eddy"));

        return buildGetPeopleResponse(people);
    }

    private Map<String, List<Person>> buildGetPeopleResponse(List<Person> people) {
        Map<String, List<Person>> response = new HashMap<>();
        response.put("people", people);
        return response;
    }
}