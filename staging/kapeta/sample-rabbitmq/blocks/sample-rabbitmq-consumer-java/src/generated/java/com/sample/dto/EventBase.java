/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.sample.dto;

import jakarta.validation.constraints.NotNull;
import java.util.*;
import lombok.*;

@Data
public class EventBase {

    @NotNull
    private String type;

    @NotNull
    private String payload;
}
