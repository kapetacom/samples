package com.sample.service;

import com.sample.dto.EventDTO;
import java.util.*;

public interface IJavaEventsService {
    List<EventDTO> getAll() throws Exception;
}
