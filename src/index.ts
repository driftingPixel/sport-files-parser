console.log("sport-file-parser is working"); import { ergContent } from "./data/files/content";
import { Parser } from "./Parser";

const parsedERG = Parser.getInstance().parseERG(ergContent);