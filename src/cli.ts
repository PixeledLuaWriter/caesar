#! /usr/bin/env node

// Importing Modules, Above is for POSIX/UNIX systems including macOS
import { Command } from "commander";
import figlet from "figlet";
import gradient from "gradient-string"
import { caesarCipher } from "./utils/functions";
const program = new Command()

/**
 * @name Caesar
 * @description A special command tool that allows you to encrypt or decrypt caesar cipher messages
*/

program
    .version("1.1.0")
    .usage("caesar [options]")
    .description("A tool that allows you to encrypt or decrypt messages written in or out of the caesar cipher")
    .option("-e, --encrypt <message>", "Encrypts user input to caesar cipher")
    .option("-d, --decrypt <message>", "Decrypts message back to user input")
    .option("-s, --shift <length>", "Shifts the text by user input, Maximum is 13 (use negative when going backwards)")
    .parse() // implicitly use process.argv and auto-detect node vs electron conventions

const options = program.opts()


if (options.encrypt && options.shift !== undefined) {
    console.log(options)
    console.log(`Here's Your Encrypted Message, Have Fun\ntext: ${gradient.cristal(caesarCipher({
        text: String(options.encrypt), // To fix parsing errors
        shift: Number(options.shift) // To fix parsing errors
    }))}\nshift level: ${options.shift}`)
}

if (options.decrypt && options.shift !== undefined) {
    console.log(options)
    console.log(`${gradient.atlas(`Here's Your Decrypted Message`)}\ntext: ${gradient.cristal(caesarCipher({
        text: String(options.decrypt), // To fix parsing errors
        shift: Number(options.shift) // To fix parsing errors
    }))}\nshift level: ${options.shift}`)
}

if (!process.argv.slice(2).length) {
    console.log(gradient.retro(figlet.textSync("caesar", {
        font: "Delta Corps Priest 1",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true
    })))
    console.log(gradient.retro(figlet.textSync("The Ancient Message Tool", {
        font: "Delta Corps Priest 1",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: true
    }))) // Only Appears If You aren't supplying any flags or arguments in the flags
    program.outputHelp()
}
