/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.sample.rest;

import com.kapeta.spring.annotation.*;
import com.sample.dto.EventDTO;
import com.sample.service.IJavaEventsService;
import jakarta.validation.Valid;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Description;
import org.springframework.web.bind.annotation.*;

@RestController
@KapetaController("javaEvents")
@RequestMapping("/")
public class JavaEventsController {

    private final IJavaEventsService service;

    public JavaEventsController(IJavaEventsService service) {
        this.service = service;
    }

    @ResponseBody
    @RequestMapping(value = "/events", method = RequestMethod.GET)
    public List<EventDTO> getAll() throws Exception {
        return service.getAll();
    }
}
