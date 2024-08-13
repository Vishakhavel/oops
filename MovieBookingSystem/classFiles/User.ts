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

  public bookTicket(
    movie: Movie,
    showTime: ShowTime,
    numberOfSeats: number
  ): void {
    // update the available seats
    if (showTime.availableSeats < numberOfSeats) {
      throw new Error("Not enough seats during this show time!");
    } else {
      // enough seats.
      showTime.updateAvailableSeats(-numberOfSeats);
      // add this to the bookings array
      this.bookings.push({ movie, showTime, numberOfSeats });
      console.log(
        ` ${numberOfSeats} tickets booked for ${movie.title} at ${showTime.date} on ${showTime.time}`
      );
    }
  }
  public cancelTicket(showTime: ShowTime): void {
    let index = this.bookings.findIndex(
      (curBooking) =>
        curBooking.showTime.time === showTime.time &&
        curBooking.showTime.date === showTime.date
    );

    if (index !== -1) {
      // booking found
      // increase seats for this showtime
      showTime.updateAvailableSeats(this.bookings[index].numberOfSeats);
      // remove this booking from the user's list of bookings.
      this.bookings.splice(index, 1);
      console.log(
        `Booking on ${showTime.date}, at ${showTime.time}, cancelled successfully`
      );
    } else {
      throw new Error("This booking does not exists");
    }

    // print all the bookings for the user
    this.printAllBookings();
  }

  private printAllBookings() {
    let printedText = "";

    this.bookings.map((booking) => {
      printedText += `Movie - ${booking.movie.title} | Date - ${booking.showTime.date} | Time - ${booking.showTime.time} | Seats Booked -  ${booking.numberOfSeats} \n`;
    });

    console.log(`All bookings for user - ${this.name} - \n ${printedText}`);
  }
}
