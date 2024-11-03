#!/usr/bin/env node

const { access, constants, readFile } = require("node:fs/promises");
const fs = require('node:fs');
const { open } = require('node:fs/promises');

// Get command-line arguments
const args = process.argv.slice(2);

const showResult = ({ result, path }) => {
    console.log(result, path)
    process.exit(0)
}
const handleError = (error) => {
    console.log(new Error(error).message);
    process.exit(1)
}

const getTotalBytesInFile = async (filePath) => {
    try {
        // get the buffer
        const file = fs.readFileSync(filePath)
        // get file descriptor
        const fd = fs.openSync(filePath);
        // read the number of bytes in that file
        const bytesOfFileContent = fs.readSync(fd, file)
        // return the number of bytes in the file
        return String(bytesOfFileContent);
    } catch (error) {
        handleError(error)
    }
}

const getTotalLinseInFile = async (filePath) => {
    try {
        // open the file
        const file = await open(filePath);
        let numberOfLinesInTheFile = 0;
        for await (const line of file.readLines()) {
            numberOfLinesInTheFile += 1
        }
        // return the number of lines in the file
        return String(numberOfLinesInTheFile)
    } catch (error) {
        handleError(error)
    }
}

const getTotalCharactersInFile = async (filePath) => {
    try {
        // open the file
        const data = await readFile(filePath, { encoding: 'utf8' });
        const numberOfCharactersInTheFile = data.length
        // return the number of characters in the file
        return String(numberOfCharactersInTheFile)
    } catch (error) {
        handleError(error)
    }
}

const getTotalWordsInFile = async (filePath) => {
    try {
        // open the file
        const data = await readFile(filePath, { encoding: 'utf8' });
        // Split the content by spaces, tabs, and newlines to count words
        const words = data.trim().split(/\s+/);
        const numberOfWordsInTheFile = words.length
        // result, outputs the number of words in the file
        return String(numberOfWordsInTheFile)
    } catch (error) {
        handleError(error)
    }
}

if (args && args.length === 1) {
    const filePath = args && args.length === 1 ? args[0] : '';
    try {
        (async () => {
            // check if user has read permission in this path
            await access(filePath, constants.R_OK | constants.W_OK);
            const bytes = await getTotalBytesInFile(filePath)
            const lines = await getTotalLinseInFile(filePath)
            const words = await getTotalWordsInFile(filePath)
            console.log(lines, words, bytes, filePath)
            process.exit(0)
        })()
    }
    catch (error) {
        handleError(error)
    }
}
else if (args && args.length === 2) {
    (async () => {
        const filePath = args ? args.length === 1 ? args[0] : args[1] : '';

        if (args && args[0] === '-c') {
            showResult({ result: await getTotalBytesInFile(filePath), path: filePath });
        }
        else if (args && args[0] === '-l') {
            showResult({ result: await getTotalLinseInFile(filePath), path: filePath });
        }
        else if (args && args[0] === '-w') {
            showResult({ result: await getTotalWordsInFile(filePath), path: filePath });
        }
        else if (args && args[0] === '-m') {
            showResult({ result: await getTotalCharactersInFile(filePath), path: filePath });
        }
        else {
            console.log("Invalid command.");
            process.exit(1);
        }
    })()
}
else {
    console.log("Invalid command");
    process.exit(1);
}


