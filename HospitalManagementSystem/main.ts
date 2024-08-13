import Doctor from "./classFiles/Doctor";
import Patient from "./classFiles/Patient";

const doc1 = new Doctor("doctor1", "Ortho");
const doc2 = new Doctor("doctor2", "Cardio");

const patient1 = new Patient("patient1");
const patient2 = new Patient("patient2");

// create an appointment with ortho.
patient1.bookAppointment(doc1, "08-12-2024", "10:00");
// show throw error for another appointment, scheduled at the same date and time cos clash
// patient1.bookAppointment(doc2, "08-12-2024", "10:00");

//  Requirements -
// patients should be able to book appointments with docs - done
// docs should be able to book appointments patients
// patient should not be able to book 2 appointments at the same time
// doctor should not be able to book 2 appointments at the same time
// patient should be able to cancel already booked appointments with docs
// patient should be able to cancel already booked appointments with patients
