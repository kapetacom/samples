import { sortHandlersByPathSpecificity } from './sortHandlers';
import { NodeEvents_getAllHandler } from '../handlers/node-events/getAllHandler';
import { JavaEvents_getAllHandler } from '../handlers/java-events/getAllHandler';
import { GoEvents_getAllHandler } from '../handlers/go-events/getAllHandler';
import { GoMainEvents_submitHandler } from '../handlers/go-main-events/submitHandler';
import { JavaMainEvents_submitHandler } from '../handlers/java-main-events/submitHandler';
import { NodeMainEvents_submitHandler } from '../handlers/node-main-events/submitHandler';

export const handlers = sortHandlersByPathSpecificity([
    NodeEvents_getAllHandler,

    JavaEvents_getAllHandler,

    GoEvents_getAllHandler,

    GoMainEvents_submitHandler,

    JavaMainEvents_submitHandler,

    NodeMainEvents_submitHandler,
]);
