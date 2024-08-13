import Doctor from "./classFiles/Doctor";
import Patient from "./classFiles/Patient";

const doc1 = new Doctor("doctor1", "Ortho");
const doc2 = new Doctor("doctor2", "Cardio");

const patient1 = new Patient("patient1");
const patient2 = new Patient("patient2");

// create an appointment with ortho.
patient1.bookAppointment(doc1, "08-12-2024", "10:00");
// show throw error for another appointment, scheduled at the same date and time cos clash
patient1.bookAppointment(doc2, "08-12-2024", "10:00");
