package com.sample.service;

import com.sample.dto.EventDTO;
import java.util.*;

public interface IMainEventsService {
    void submit(EventDTO event) throws Exception;
}
