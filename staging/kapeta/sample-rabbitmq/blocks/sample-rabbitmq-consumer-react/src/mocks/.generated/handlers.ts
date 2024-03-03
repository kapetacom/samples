import { sortHandlersByPathSpecificity } from './sortHandlers';
import { NodeEvents_getAllHandler } from '../handlers/node-events/getAllHandler';
import { JavaEvents_getAllHandler } from '../handlers/java-events/getAllHandler';
import { GoEvents_getAllHandler } from '../handlers/go-events/getAllHandler';

export const handlers = sortHandlersByPathSpecificity([
    NodeEvents_getAllHandler,

    JavaEvents_getAllHandler,

    GoEvents_getAllHandler,
]);
