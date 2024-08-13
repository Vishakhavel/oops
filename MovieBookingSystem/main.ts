import User from "./classFiles/User";
import Movie from "./classFiles/Movie";
import ShowTime from "./classFiles/ShowTime";

const spiderManMovie = new Movie("Spiderman", "Sci-Fi");

spiderManMovie.addShowtime(new ShowTime("08-13-2024", "10:00", 10));
spiderManMovie.addShowtime(new ShowTime("08-12-2024", "10:00", 10));

const user = new User("John", 25);

// movie name, show time, number of seats.
user.bookTicket(spiderManMovie, showTimesForSpiderman[0], 2);
user.bookTicket(batmanMovie, showTimesForSpiderman, 2);

user.cancelBooking();
