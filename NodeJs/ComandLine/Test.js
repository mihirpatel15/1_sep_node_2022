
const yargs = require('yargs')
yargs.command({
    command: 'add',
    describe: 'Addition performance',
    builder: {
        num1: {
            describe: 'Enter your Number 1',
            type: 'number',
            demandOption: true
        },
        num2: {
            describe: 'Enter your Number 2',
            type: 'number',
            demandOption: true
        }

    },
    handler(args) {
        console.log(args.num1 + args.num2)
    }
})
yargs.command({
    command: 'sub',
    describe: 'Addition performance',
    builder: {
        num1: {
            describe: 'Enter your Number 1',
            type: 'number',
            demandOption: true
        },
        num2: {
            describe: 'Enter your Number 2',
            type: 'number',
            demandOption: true
        }

    },
    handler(args) {
        console.log(args.num1 - args.num2)
    }
})
yargs.parse()