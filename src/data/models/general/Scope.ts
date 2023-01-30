export default class NumberScope {

  constructor(private min: number, private max: number, private deviation = 0) { }

  public contains(value: number): boolean {
    return value >= this.min - this.deviation && value <= this.max + this.deviation;
  }
}