/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.sample.rest;

import com.kapeta.spring.annotation.*;
import com.sample.service.IKeyValueKeyValueService;
import jakarta.validation.Valid;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Description;
import org.springframework.web.bind.annotation.*;

@RestController
@KapetaController("KeyValue")
@RequestMapping("/kv")
public class KeyValueKeyValueController {

    private final IKeyValueKeyValueService service;

    public KeyValueKeyValueController(IKeyValueKeyValueService service) {
        this.service = service;
    }

    @ResponseBody
    @RequestMapping(value = "/{key}", method = RequestMethod.GET)
    public String get(@PathVariable String key) throws Exception {
        return service.get(key);
    }

    @RequestMapping(value = "/{key}", method = RequestMethod.POST)
    public void create(
        @PathVariable String key,
        @Valid @RequestBody String value
    ) throws Exception {
        service.create(key, value);
    }

    @RequestMapping(value = "/{key}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String key) throws Exception {
        service.delete(key);
    }
}
