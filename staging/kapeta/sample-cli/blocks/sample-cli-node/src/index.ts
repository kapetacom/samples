import { program } from 'commander';
import packageData from '../package.json';
import {runApp} from "@kapeta/sdk-config";
import {createSampleClient} from "generated:clients/SampleClient";
import * as Path from "path";

program.name('sample-cli-node').version(packageData.version);


program
    .command('increment')
    .description('Call backend to get the next value.')
    .action(() => {
        runApp(async (config) => {
            const client = await createSampleClient(config)
            const nextValue = await client.getNextValue()
            console.log(`Next value: ${nextValue?.next}`)
        }, Path.resolve(__dirname, '..'));
    });

// Catch all command to show a custom message for unknown commands
program.command('*', { hidden: true }).action(() => {});
// Event listener for unknown commands
program.on('command:*', function (operands) {
    console.error(`Error: Unknown command '${operands[0]}'.`);
    console.log('See --help for a list of available commands.');
    process.exit(1);
});

program.showHelpAfterError();

program.parse(process.argv);
