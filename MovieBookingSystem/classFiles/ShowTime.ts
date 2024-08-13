export default class ShowTime {
  public date: string;
  public time: string;
  public availableSeats: number;
  constructor(date: string, time: string, availableSeats: number) {
    this.date = date;
    this.time = time;
    this.availableSeats = availableSeats;
  }

  public updateAvailableSeats(numberOfSeats: number): void {
    this.availableSeats += numberOfSeats;
  }
}
