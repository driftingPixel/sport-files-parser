import { chunks } from "../../utility/ArrayUtility";
import { escapedJSONString } from "../../utility/Utility";
import HeaderERG from "../models/erg/HeaderERG";
import Units from "../models/general/Units";
import { Workout } from "../models/workout/Workout";
import WorkoutBlock from "../models/workout/WorkoutBlocks";
import WorkoutType from "../models/workout/WorkoutType";
import { Parser } from "./Parser";

export default class ParserERG implements Parser {

  public static instance: ParserERG;

  public static getInstance(): ParserERG {
    if (!ParserERG.instance) {
      ParserERG.instance = new ParserERG();
    }

    return ParserERG.instance;
  }

  public parse(content: string): Workout {
    const contentLines = content.split('\n');
    console.log("contentLines", contentLines);

    const messageContent = this.getMessageContent(contentLines);

    const headerERG = this.getHeader(contentLines);
    const workoutERG = this.getWorkoutERG(contentLines, headerERG.ftp);

    console.log("headerERG", headerERG);
    console.log("workoutERG", workoutERG);
    console.log("Message content", messageContent);

    return {
      version: 1,
      parsedFileVersion: headerERG.version,
      parsedFileName: headerERG.parsedFileName,
      name: headerERG.parsedFileName,
      description: escapedJSONString(headerERG.description),
      ftp: headerERG.ftp,
      units: headerERG.units == "ENGLISH" ? Units.IMPERIAL : Units.METRICS,
      workoutType: WorkoutType.BIKE,
      workoutBlocks: workoutERG,
    } as Workout;
  }

  private getWorkoutERG(contentLines: string[], ftp: number): WorkoutBlock[] {
    const workoutContent = this.getWorkoutContent(contentLines);

    const workoutBlocks = chunks(workoutContent).map(item => {
      const startElemPair = item[0].split('\t');
      const endElemPair = item[1].split('\t');

      const minFtp = parseInt(startElemPair[1]);
      const maxFtp = parseInt(endElemPair[1]);

      return {
        duration: (parseInt(endElemPair[0]) - parseInt(startElemPair[0])) * 60 * 1000,
        ftpScope: {
          min: minFtp,
          max: maxFtp,
          minPercent: Math.round((minFtp / ftp) * 100),
          maxPercent: Math.round((maxFtp / ftp) * 100),
          deviation: 0
        }
      } as never as WorkoutBlock;
    })

    const test = occurrences(workoutBlocks);
    console.log("!!TTEESSTT", workoutBlocks);

    return this.reduceWorkoutBlock(workoutBlocks);
  }

  private reduceWorkoutBlock(workoutBlocks: WorkoutBlock[]): WorkoutBlock[] {
    return workoutBlocks;
  }

  private getHeader(contentLines: string[]): HeaderERG {
    const headerContent = this.getHeaderContent(contentLines);
    const valueMap = new Map(headerContent.map((item) => [item.split('=')[0].trim(), item.split('=')[1]]));
    console.log("valueMap", valueMap);

    return {
      version: valueMap.get('VERSION').trim(),
      units: valueMap.get('UNITS').trim(),
      parsedFileName: valueMap.get('FILE NAME').trim(),
      columns: valueMap.get('VERSION').split(" "),
      ftp: parseInt(valueMap.get('FTP')),
      description: valueMap.get('DESCRIPTION').trim()
    } as HeaderERG;
  }

  private getHeaderContent(contentLines: string[]): string[] {

    const headerStartIndex = contentLines.indexOf('[COURSE HEADER]');
    const headerEndIndex = contentLines.indexOf('[END COURSE HEADER]');

    return contentLines.filter((line, index) => index > headerStartIndex && index < headerEndIndex)
  }

  private getWorkoutContent(contentLines: string[]): string[] {

    const courseStartIndex = contentLines.indexOf('[COURSE DATA]');
    const courseEndIndex = contentLines.indexOf('[END COURSE DATA]');

    return contentLines.filter((line, index) => index > courseStartIndex && index < courseEndIndex)
  }

  private getMessageContent(contentLines: string[]): string[] {
    const messagesStartIndex = contentLines.indexOf('[COURSE TEXT]');
    const messagesEndIndex = contentLines.indexOf('[END COURSE TEXT]');

    return contentLines.filter((line, index) => index > messagesStartIndex && index < messagesEndIndex)
  }
}