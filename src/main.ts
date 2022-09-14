import ArgParser from "./argsparser/ArgsParser";

const argsParser = new ArgParser();
const args = process.argv.slice(2);
const parsedArgs = argsParser.parse(args);
console.log(parsedArgs);
