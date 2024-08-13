export default class ShowTime {
  date: string;
  time: string;
  availableSeats: number;
  constructor(date: string, time: string, availableSeats: number) {
    this.date = date;
    this.time = time;
    this.availableSeats = availableSeats;
  }

  updateAvailableSeats(numberOfSeats: number) {
    this.availableSeats += numberOfSeats;
  }
}
