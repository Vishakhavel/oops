import ShowTime from "./ShowTime";

export default class Movie {
  title: string;
  genre: string;
  showTimes: ShowTime[];

  constructor(title: string, genre: string) {
    this.title = title;
    this.genre = genre;
    this.showTimes = [];
  }

  addShowtime(showtime: ShowTime): void {
    this.showTimes = [...this.showTimes, showtime];
  }

  removeShowtime(showtime: ShowTime): void {
    // filter out showtimes, and remove the showtime that matches with the argument, in both date and time.
    this.showTimes = this.showTimes.filter(
      (s) => !(s.date === showtime.date && s.time === showtime.time)
    );
  }
}
