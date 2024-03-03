/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.sample.rest;

import com.kapeta.spring.annotation.*;
import com.sample.dto.EventDTO;
import com.sample.service.IMainEventsService;
import jakarta.validation.Valid;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Description;
import org.springframework.web.bind.annotation.*;

@RestController
@KapetaController("main")
@RequestMapping("/events")
public class MainEventsController {

    private final IMainEventsService service;

    public MainEventsController(IMainEventsService service) {
        this.service = service;
    }

    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    public void submit(@Valid @RequestBody EventDTO event) throws Exception {
        service.submit(event);
    }
}
