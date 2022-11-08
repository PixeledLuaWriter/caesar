#! /usr/bin/env node

// Importing Modules, Above is for POSIX/UNIX systems including macOS
import { Command } from "commander";
import CommanderOptions from "./common/types"
import gradient from "gradient-string"
import { caesarCipher } from "./utils/functions";
const program = new Command()

/**
 * @name Caesar
 * @description A special command tool that allows you to encrypt or decrypt caesar cipher messages
*/

program
    .version("1.1.0")
    .description(gradient.atlas("A tool that allows you to encrypt or decrypt messages written in or out of the caesar cipher"))
    .option("-e, --encrypt <string>", "Encrypts user input to caesar cipher")
    .option("-d, --decrypt <string>", "Decrypts message back to user input")
    .requiredOption("-s, --shift <number>", "Shifts the text by user input, Maximum is 13 (use negative when going backwards)")
    .parse() // implicitly use process.argv and auto-detect node vs electron conventions

const options: CommanderOptions = program.opts()


if (options.encrypt && options.shift !== undefined) {
    console.log(`Here's Your Encrypted Message, Have Fun\ntext: ${gradient.cristal(caesarCipher({
        text: options.encrypt,
        shift: options.shift
    }))}\nshift level: ${options.shift}`)
}

if (options.decrypt && options.shift !== undefined) {
    console.log(`Here's Your Decrypted Message\ntext: ${gradient.pastel(caesarCipher({
        text: options.decrypt,
        shift: options.shift
    }))}\nshift level: ${options.shift}`)
}

if (!process.argv.slice(2).length) {
    console.log(gradient.retro("The Ancient message Tool")) // Only Appears If You aren't supplying any flags or arguments in the flags
    program.outputHelp()
}
