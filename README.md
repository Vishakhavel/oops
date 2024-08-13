## Thoughtful first round qn - design a parking lot using oops. The lot has 4 types of vehicles - motorcycyles, compact cars, regular cars and vans. motorcycles can park anywhere, compacts can park in any CAR spot, regulars can park in regular and van spots, vans can park only in 2 consecutive regular car spots, or 3 compact car spots.

we should be able to park, unpark, get count of total vehicles, get count of each vehicle, get remaining spaces for each vehicle from this parking lot.

first make a 5x20 parking lot, with 5 rows and 20 lots in each row. The first 3 rows are reserved for motorcycles, the next 3 for compact and the remaining are for regular car spots.

## 1. Design a Library Management System

Assumptions:
The library has books, members, and librarians.
Each book has a title, author, ISBN, and a list of copies.
Members can borrow and return books.
Librarians can add and remove books.
Requirements:
Book class with properties: title, author, ISBN, copies.
Member class with properties: name, memberID, borrowedBooks.
Librarian class with properties: name, employeeID.
Methods in Member class: borrowBook(book: Book), returnBook(book: Book).
Methods in Librarian class: addBook(book: Book), removeBook(book: Book).

## 2. Design a Hospital Management System

Assumptions:
The hospital has doctors, patients, and appointments.
Each doctor has a name, specialization, and a list of appointments.
Each patient has a name, patient ID, and a list of appointments.
Appointments have a date, time, and status (e.g., scheduled, completed, canceled).
Requirements:
Doctor class with properties: name, specialization, appointments.
Patient class with properties: name, patientID, appointments.
Appointment class with properties: date, time, status.
Methods in Doctor class: scheduleAppointment(patient: Patient, date: Date, time: string), cancelAppointment(appointment: Appointment).
Methods in Patient class: bookAppointment(doctor: Doctor, date: Date, time: string), cancelAppointment(appointment: Appointment).

## 3. Design an Online Shopping System

Assumptions:
The system has users, products, and orders.
Each user has a name, user ID, and a cart.
Each product has a name, product ID, price, and stock.
Orders have an order ID, list of products, and total amount.
Requirements:
User class with properties: name, userID, cart.
Product class with properties: name, productID, price, stock.
Order class with properties: orderID, products, totalAmount.
Methods in User class: addToCart(product: Product, quantity: number), placeOrder().
Methods in Product class: updateStock(quantity: number).
Methods in Order class: calculateTotalAmount().

## 4. Design a Movie Ticket Booking System

Assumptions:
The system has users, movies, and showtimes.
Each user has a name, user ID, and a list of bookings.
Each movie has a title, genre, and list of showtimes.
Showtimes have a date, time, and available seats.
Requirements:
User class with properties: name, userID, bookings.
Movie class with properties: title, genre, showtimes.
Showtime class with properties: date, time, availableSeats.
Methods in User class: bookTicket(movie: Movie, showtime: Showtime, numberOfSeats: number), cancelBooking(showtime: Showtime).
Methods in Movie class: addShowtime(showtime: Showtime), removeShowtime(showtime: Showtime).
Methods in Showtime class: updateAvailableSeats(seats: number).

## 5. Design a Social Networking Site

Assumptions:
The site has users, posts, and comments.
Each user has a name, user ID, and a list of friends.
Each post has a post ID, content, author, and list of comments.
Each comment has a comment ID, content, author, and a reference to the post.
Requirements:
User class with properties: name, userID, friends.
Post class with properties: postID, content, author, comments.
Comment class with properties: commentID, content, author, post.
Methods in User class: addFriend(user: User), removeFriend(user: User), createPost(content: string).
Methods in Post class: addComment(comment: Comment), removeComment(comment: Comment).
Methods in Comment class: editContent(newContent: string).

## 6. Design a University Course Management System

Assumptions:

The system has students, courses, and enrollments.
Each student has a name, student ID, and a list of courses.
Each course has a course ID, name, and a list of enrolled students.
Each enrollment has an enrollment ID, student, course, and grade.
Requirements:

Student class with properties: name, studentID, courses.
Course class with properties: courseID, name, students.
Enrollment class with properties: enrollmentID, student, course, grade.
Methods in Student class:

enrollInCourse(course: Course)
dropCourse(course: Course)
viewCourses()
Methods in Course class:

addStudent(student: Student)
removeStudent(student: Student)
viewStudents()

## 7. Design a Restaurant Reservation System

Assumptions:

The system has customers, tables, and reservations.
Each customer has a name, customer ID, and a list of reservations.
Each table has a table ID, capacity, and availability status.
Each reservation has a reservation ID, customer, table, and time.
Requirements:

Customer class with properties: name, customerID, reservations.
Table class with properties: tableID, capacity, isAvailable.
Reservation class with properties: reservationID, customer, table, time.
Methods in Customer class:

makeReservation(table: Table, time: string)
cancelReservation(reservation: Reservation)
viewReservations()
Methods in Table class:

reserveTable()
releaseTable()
checkAvailability()
