"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const package_json_1 = __importDefault(require("../package.json"));
const sdk_config_1 = require("@kapeta/sdk-config");
const SampleClient_1 = require("generated:clients/SampleClient");
commander_1.program.name('sample-cli-node').version(package_json_1.default.version);
commander_1.program
    .command('increment')
    .description('Call backend to get the next value.')
    .action(() => {
    (0, sdk_config_1.runApp)(async (config) => {
        const client = await (0, SampleClient_1.createSampleClient)(config);
        const nextValue = await client.getNextValue();
        console.log(`Next value: ${nextValue}`);
    }, __dirname);
});
// Catch all command to show a custom message for unknown commands
commander_1.program.command('*', { hidden: true }).action(() => { });
// Event listener for unknown commands
commander_1.program.on('command:*', function (operands) {
    console.error(`Error: Unknown command '${operands[0]}'.`);
    console.log('See --help for a list of available commands.');
    process.exit(1);
});
commander_1.program.showHelpAfterError();
commander_1.program.parse(process.argv);
//# sourceMappingURL=index.js.map