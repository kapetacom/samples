import { sortHandlersByPathSpecificity } from './sortHandlers';
import { JavaKeyValue_getHandler } from '../handlers/java-key-value/getHandler';
import { JavaKeyValue_createHandler } from '../handlers/java-key-value/createHandler';
import { JavaKeyValue_deleteHandler } from '../handlers/java-key-value/deleteHandler';
import { NodeKeyValue_getHandler } from '../handlers/node-key-value/getHandler';
import { NodeKeyValue_createHandler } from '../handlers/node-key-value/createHandler';
import { NodeKeyValue_deleteHandler } from '../handlers/node-key-value/deleteHandler';

export const handlers = sortHandlersByPathSpecificity([
    JavaKeyValue_getHandler,
    JavaKeyValue_createHandler,
    JavaKeyValue_deleteHandler,

    NodeKeyValue_getHandler,
    NodeKeyValue_createHandler,
    NodeKeyValue_deleteHandler,
]);
