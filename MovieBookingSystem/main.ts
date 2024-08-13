import User from "./classFiles/User";
import Movie from "./classFiles/Movie";
import ShowTime from "./classFiles/ShowTime";

const spiderManMovie = new Movie("Spiderman", "Sci-Fi");

const showtime1 = new ShowTime("2024-08-15", "18:00", 100);
const showtime2 = new ShowTime("2024-08-15", "20:00", 100);

const user = new User("John", 25);

// movie name, show time, number of seats.
user.bookTicket(spiderManMovie, showtime1, 2);
user.bookTicket(spiderManMovie, showtime1, 7);
user.bookTicket(spiderManMovie, showtime2, 2);

user.cancelTicket(showtime1);
