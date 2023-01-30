import { Workout } from "../models/workout/Workout";

export interface Parser {
  parse(content: string): Workout;
}