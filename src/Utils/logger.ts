import * as fs from "fs";

enum color {
  error = "\x1b[31m%s\x1b[0m",
  success = "\x1b[32m%s\x1b[0m",
  grey = "\x1b[30m%s\x1b[0m",
}

export class Logger {
  info(message: string): void {
    this.writeIntoFile(message, "INFO");
    console.log(color.grey, this.getDate(), message);
  }

  error(message: string): void {
    this.writeIntoFile(message, "ERROR");
    console.log(color.grey + color.error, this.getDate(), message);
  }

  success(message: string): void {
    this.writeIntoFile(message, "SUCCESS");
    console.log(color.grey + color.success, this.getDate(), message);
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

  writeIntoFile(message: string, level: string): void {
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
      this.getDate() + " [" + level + "] " + message + "\n",
      (err) => {
        if (err) {
          console.log("Error writing file " + err);
        }
      }
    );
  }
}

export default new Logger();