# Kapeta Readme

This file contains some structural information about the block.

This file will be overwritten every time you change the block definition in Kapeta.

## Folder Structure

The block is structured as follows:

* `src/renderer`: Contains code that is only executed in the renderer.
* `src/mocks`: Contains code that enables you to mock the REST APIs.
* `src/main`: Contains code that is only executed on the main / node context.

You'll find some subfolders called `.generated` under `src/`,  `src/renderer/` and `src/main/`. 
These folders contain generated files and should not be edited directly.

In particular the following folders are generated:
* `src/.generated/entities`: Contains the entities defined by the block.

### Build System
The renderer is built using webpack - and there is a dev and prod mode for it.
You'll find configuration for both in the `.erb` folder.

#### Dev mode
In dev mode the renderer is served from a webpack dev server and will be automatically rebuild whenever you change the code.
For react components and styles it also supports hot-reloading whenever possible.

## REST Clients

The block consumes the following REST APIs:

* `test`

REST clients for each of these APIs is available both in the browser: `src/renderer/.generated/clients` and server: `src/main/.generated/clients` directories
* [src/renderer/.generated/clients](src/renderer/.generated/clients)
* [src/main/.generated/clients](src/main/.generated/clients)


You can use these clients to make requests to the REST API. For example:

In the main context:
```typescript
import { createSomeClient } from '../../.generated/clients/SomeClient';

// ...

const someApi = createSomeClient(cfg);
const apiResponseData = await someApi.someApiMethod('my-id');
```

In the renderer context:
```typescript
import { useSomeClient } from '../../.generated/clients/SomeClient';

// ...

const someApi = useSomeClient();
const apiResponseData = await someApi.someApiMethod('my-id');
```
### Configuration
When testing locally Kapeta will make sure your rest clients are pointing to the right instance.

However when it's time to go live you need to tell the app where to find the API endpoints.

You do that under [config/](config) where you'll find 2 files:
* `hosts.development.json` for development. This file is automatically updated by Kapeta and should not be edited.
* `hosts.production.json` for production - this is where you should set the correct endpoints.

Both files are basically a key/map of the name of the resource and the endpoint. For example:
```json
{
  "my-rest-client-resource": "https://api.my-cool-domain.com"
}
```


## Mocking the REST API

The block comes with support for mocking the REST API with [Mock Service Worker (MSW)](https://mswjs.io/).


### Understanding MSW

MSW is an API mocking library that uses Service Worker API to intercept actual network requests. This enables you to mock REST APIs and other external dependencies during development and testing. Here's why incorporating MSW is beneficial:

1. **Realistic Testing Environment:** MSW allows you to create mocks that closely resemble actual server responses. This helps in testing your application in a more realistic environment without the need to set up and maintain a backend server for development purposes.

2. **Offline Development:** With MSW, you can continue developing and testing your application even when you're offline or the backend server is down. This can significantly improve productivity and is particularly useful for front-end development.

3. **Faster Feedback Loop:** By mocking responses, you reduce the dependency on actual network conditions or server response times. This results in a faster feedback loop during development, making the process more efficient.

4. **Controlled Testing Scenarios:** MSW allows you to simulate various server responses, including errors and edge cases, which might be hard to reproduce with a real server. This level of control is crucial for thorough testing and ensuring application robustness.

5. **Ease of Use:** Implementing MSW is relatively straightforward and doesn't require significant changes to existing code.


### Enable MSW and edit mock data

To enable MSW run

```js
window.enableMockApi(true)
```

in the renderer console. This will set `enableMockApi = true` in the browser's local storage. The mock service worker will then intercept all requests to the REST API and return mock data instead.

_Note: You open the renderer console through the main menu or by right-clicking and selecting "Inspect Element" and then navigating to the "Console" tab._

Edit the mock data that is returned by the handlers in:
* [src/mocks/handlers](src/mocks/handlers)


Endpoints that doesn't return any data is mocked to return an empty response with status code 200.

When a handler file has been changed Kapeta will not touch it. This is to allow you to make changes to the mock data. If you want to reset the mock data to the default values you can delete the file and Kapeta will recreate it.

