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
* ```src/generated/java/com/sample/rest```: Contains the REST API routes.
* ```src/generated/java/com/sample/service```: Contains the REST interfaces.
  * These are generated files and should not be edited directly
* ```src/main/java/com/sample/service```: Contains the service layer logic. This is where you should add your business logic

## REST API 
To edit the REST API handlers edit the services found here:
[src/main/java/com/sample/service](src/main/java/com/sample/service/)

The REST layer itself is generated for you - so your service
will be called as specified within the REST API definition in Kapeta.

You just need to worry about the logic.

The service files will only be generated if they don't already exist - or if they have not
changed since the last time they were generated.



## RabbitMQ Subscriber
To consume messages from a RabbitMQ queue a consumer is generated for you for each resource.

Implement the subscriber interface in a component to consume from a queue

Below is an example of how to use the consumer to listen for messages on the queue:
```java
package com.example.queue;

import com.example.dto.EventDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class EventsSubscriber implements IEventsSubscriber {

  @Override
  public void onMessage(Message<EventDTO> message) {
    log.warn("Received message from events using example handler: {}", message);
  }
}
```
