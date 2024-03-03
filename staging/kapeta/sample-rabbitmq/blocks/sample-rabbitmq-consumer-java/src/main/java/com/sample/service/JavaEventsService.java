package com.sample.service;

import com.sample.dto.EventDTO;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class JavaEventsService implements IJavaEventsService {

    @Override
    public List<EventDTO> getAll() {
        throw new RuntimeException("Not implemented");
    }
}
