package com.sample.service;

import com.sample.dto.EventDTO;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class MainEventsService implements IMainEventsService {

    @Override
    public void submit(EventDTO event) {
        throw new RuntimeException("Not implemented");
    }
}
