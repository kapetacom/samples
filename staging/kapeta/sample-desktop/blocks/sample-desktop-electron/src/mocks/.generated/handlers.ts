import { sortHandlersByPathSpecificity } from './sortHandlers';
import { Test_getNextHandler } from '../handlers/test/getNextHandler';

export const handlers = sortHandlersByPathSpecificity([Test_getNextHandler]);
