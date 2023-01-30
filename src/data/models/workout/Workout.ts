import Units from "../general/Units";
import WorkoutBlock from "./WorkoutBlocks";
import WorkoutType from "./WorkoutType";

export interface Workout {
  version: number;
  parsedFileVersion?: string;
  parsedFileName?: string;
  name: string;
  description?: string;
  workoutType: WorkoutType;
  ftp?: number;
  units: Units;
  workoutBlocks: WorkoutBlock[];
}