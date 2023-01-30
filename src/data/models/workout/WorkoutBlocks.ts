import NumberScope from "../general/Scope";

export default class WorkoutBlock {
  //time i us (mili seconds)
  duration: number;

  name?: string;
  description?: string;
  ftpScope?: NumberScope;
  workoutBlock?: WorkoutBlock[];
  repeats?: number
}