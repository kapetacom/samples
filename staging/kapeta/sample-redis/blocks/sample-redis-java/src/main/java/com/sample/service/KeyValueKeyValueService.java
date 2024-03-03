package com.sample.service;

import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class KeyValueKeyValueService implements IKeyValueKeyValueService {

    @Override
    public String get(String key) {
        throw new RuntimeException("Not implemented");
    }

    @Override
    public void create(String key, String value) {
        throw new RuntimeException("Not implemented");
    }

    @Override
    public void delete(String key) {
        throw new RuntimeException("Not implemented");
    }
}
