import React from 'react';
import { createRoot } from 'react-dom/client';
import { enableApiMocking } from '../../../mocks/enableApiMocking';
import { MainPage } from './MainPage';

/*
The main entry point for the Main page.

Creates a container div and renders the MainPage component into it. To change the page content,
edit the MainPage component instead.
This file should only be edited if you need to preload or setup some things before the page is rendered.
When running in development mode the API mocking is available.
Call window.enableMockApi(true) in the browser console to enable it.

*/

const container = document.createElement('div');
container.classList.add('application-container');
document.body.append(container);

void (async () => {
    if (process.env.NODE_ENV === 'development') {
        await enableApiMocking();
    }

    createRoot(container).render(<MainPage />);
})();
