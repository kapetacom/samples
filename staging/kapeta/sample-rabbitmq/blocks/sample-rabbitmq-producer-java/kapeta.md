# Kapeta Readme
This file contains some structural information about this service.

This file will be overwritten every time you change the service definition in Kapeta.

## Structure
This service is structured as follows:
* ```src/generated```: Contains generated code that shouldn't be edited directly
* ```src/main```: Contains your own and generated code that you can and should edit

In the sub folder structure you'll find the following:
* ```src/generated/java/com/sample/repositories```: Contains anything related to databases
* ```src/generated/java/com/sample/dto```: Contains the entities used by the service.
  * These are generated files and should not be edited directly
* ```src/main/java/com/sample/service```: Contains the service layer logic. This is where you should add your business logic



## RabbitMQ Publisher
To publish messages to the RabbitMQ queue a publisher is generated for you for each resource.

Use the publisher bean relevant for the exchange you want to publish to

Below is an example of how to use the publisher to publish a message to one or more exchanges:
```java
package com.pub.service;

import com.pub.dto.EventDTO;
import com.pub.queue.EventsPublisher;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class SomeService {

  private final EventsPublisher eventsPublisher;

  public SomeService(EventsPublisher eventsPublisher) {
    this.eventsPublisher = eventsPublisher;
  }

  public void doPublish(EventDTO event) {
    eventsPublisher.publish(event);
  }
}

```
