import * as fs from "fs";
import {utils, color} from './utils'



export class Logger {
  info(message: string): void {
    this.writeIntoFile(message, "INFO");
    console.log(color.GREY, this.getDate(), message);
  }

  error(message: string): void {
    this.writeIntoFile(message, "ERROR");
    console.log(color.GREY + color.RED, this.getDate(), message);
  }

  success(message: string): void {
    this.writeIntoFile(message, "SUCCESS");
    console.log(color.GREY + color.GREEN, this.getDate(), message);
  }

  getDate(): string {
    const date = new Date();
    return (
      "[" +
      this.getUnitWithZero(date.getDate()) +
      "/" +
      this.getUnitWithZero(date.getMonth() + 1) +
      "/" +
      this.getUnitWithZero(date.getFullYear()) +
      "] [" +
      this.getUnitWithZero(date.getHours()) +
      ":" +
      this.getUnitWithZero(date.getMinutes()) +
      ":" +
      this.getUnitWithZero(date.getSeconds()) +
      "] "
    );
  }

  getUnitWithZero(unit: number): string {
    return unit < 10 ? "0" + unit : unit.toString();
  }

  writeIntoFile(message: string, detail: string): void {
    const date = new Date();

    const fileName =
      date.getFullYear() +
      "_" +
      this.getUnitWithZero(date.getMonth() + 1) +
      "_" +
      this.getUnitWithZero(date.getDate()) +
      "_LoPotitBot.log";

    fs.appendFile(
      "./logs/" + fileName,
      this.getDate() + " [" + detail + "] " + message + "\n",
      (err) => {
        if (err) {
          console.log("Error writing file " + err);
        }
      }
    );
  }
}

export default new Logger();
