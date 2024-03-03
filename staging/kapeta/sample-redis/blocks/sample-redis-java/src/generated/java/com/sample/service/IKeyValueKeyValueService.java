package com.sample.service;

import java.util.*;

public interface IKeyValueKeyValueService {
    String get(String key) throws Exception;

    void create(String key, String value) throws Exception;

    void delete(String key) throws Exception;
}
