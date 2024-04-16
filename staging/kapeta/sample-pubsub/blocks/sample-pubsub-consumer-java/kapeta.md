# Kapeta Readme
This file contains some structural information about this service.

This file will be overwritten every time you change the service definition in Kapeta.

## Structure
This service is structured as follows:
* ```src/generated```: Contains generated code that shouldn't be edited directly
* ```src/main```: Contains your own and generated code that you can and should edit

In the sub folder structure you'll find the following:
* ```src/generated/java/com/kapeta/sample/pubsub/repositories```: Contains anything related to databases
* ```src/generated/java/com/kapeta/sample/pubsub/dto```: Contains the entities used by the service.
  * These are generated files and should not be edited directly
* ```src/main/java/com/kapeta/sample/pubsub/service```: Contains the service layer logic. This is where you should add your business logic



