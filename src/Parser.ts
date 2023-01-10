import { Workout } from "./data/models/Workout";

export class Parser {

  public static instance: Parser;

  public static getInstance(): Parser {
    if (!Parser.instance) {
      Parser.instance = new Parser();
    }

    return Parser.instance;
  }

  private constructor() {

  }

  public parseERG(content: string): Workout {
    return new Workout();
  }
}