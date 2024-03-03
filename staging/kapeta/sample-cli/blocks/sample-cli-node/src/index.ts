import { program } from 'commander';
import packageData from '../package.json';
import { initRestClients } from 'generated:clients';

const { sampleClient } = initRestClients();

program.name('sample-cli-node').version(packageData.version);

program
    .command('increment')
    .description('Call backend to get the next value.')
    .action(async () => {
        const nextValue = await sampleClient.getNextValue();
        console.log(`Next value: ${nextValue?.next}`);
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
