import Movie from "./Movie";
import ShowTime from "./ShowTime";

type Booking = {
  movie: Movie;
  showTime: ShowTime;
  numberOfSeats: number;
};
export default class User {
  private name: string;
  private userId: number;
  private bookings: Booking[] = [];

  constructor(name: string, age: number) {
    this.name = name;
    this.userId = Math.floor(Math.random() * 1000000);
  }

  bookTicket(movie: Movie, showTime: ShowTime, numberOfSeats: number) {
    // update the available seats
    if (showTime.availableSeats < numberOfSeats) {
      throw new Error("Not enough seats during this show time!");
    } else {
      // enough seats.
      showTime.updateAvailableSeats(-numberOfSeats);
      // add this to the bookings array
      this.bookings.push({ movie, showTime, numberOfSeats });
      console.log("");
    }
  }
  cancelTicket(showTime: ShowTime);
}
