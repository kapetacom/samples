/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.pubsub.rest;

import com.kapeta.sample.pubsub.service.IRestapiService;
import com.kapeta.spring.annotation.*;
import jakarta.validation.Valid;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Description;
import org.springframework.web.bind.annotation.*;

@RestController
@KapetaController("restapi")
@RequestMapping("/")
public class RestapiController {

    private final IRestapiService service;

    public RestapiController(IRestapiService service) {
        this.service = service;
    }

    @RequestMapping(value = "/send", method = RequestMethod.GET)
    public void send() throws Exception {
        service.send();
    }
}
