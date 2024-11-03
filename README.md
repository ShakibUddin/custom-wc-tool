# Node.js `wc`-like CLI Tool Documentation

## 1. **Introduction**
This documentation provides an overview of my custom-built Node.js command-line tool, inspired by the Unix `wc` command. This project was developed as part of a coding challenge to enhance my Node.js and CLI development skills. For the original challenge details, refer to [Coding Challenges](https://codingchallenges.fyi/challenges/challenge-wc).

## 2. **Challenge Overview**
The goal was to build a Node.js version of the Unix `wc` tool.

### **What Is `wc`?**
`wc` (word count) is a command-line utility in Unix/Linux systems that outputs:
- The number of lines (`-l`)
- The number of words (`-w`)
- The number of bytes (`-c`)

It's commonly used for processing text files and can take input from files or streams.

### **What My Tool Does**
My custom Node.js tool mimics `wc` by:
- Counting lines, words, and characters.
- Accepting input from files.
- Providing a straightforward CLI interface that integrates into Ubuntu/Linux environments.

## 3. **Tool Features**
- **Line Count (`-l`)**: Outputs the total number of lines.
- **Word Count (`-w`)**: Displays the number of words.
- **Bytes Count (`-c`)**: Provides the total number of bytes.
- **Character Count (`-m`)**: Provides the total number of characters.
- **No Options**: Provides the total number of bytes, lines, words.
- **Integrated CLI Utility**: Usable from any directory as a system-wide command.

## 4. **Setup**
- Clone the project
- Copy the ccwc file and move it into ```/usr/local/bin/``` directory
   
## 5. **Example Usage**
Run the tool from any terminal with the following syntax:
```bash
ccwc [options] [file-path]
ccwc -l [file-path] # returns total lines in file
ccwc -c [file-path] # returns total bytes in file
ccwc -w [file-path] # returns total words in file
ccwc -m [file-path] # returns total characters in file
ccwc [file-path]    # returns total bytes, lines, words in file
