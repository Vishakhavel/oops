import { v4 as uuidv4 } from "uuid";
import Patient from "./Patient";
import AppointmentWithPatient from "./AppointmentWithPatient";
import AppointmentWithDoctor from "./AppointmentWithDoctor";
// add more valid specs here.
type Specialization =
  | "Ortho"
  | "Cardio"
  | "Podiatrist"
  | "Gyno"
  | "Pediatrician";
export default class Doctor implements Person {
  name: string;
  specialization: Specialization;
  public appointments: AppointmentWithPatient[];
  //   adding an extra doctor ID
  doctorId: string;

  constructor(name: string, specialization: Specialization) {
    this.name = name;
    this.specialization = specialization;
    this.appointments = [];
    this.doctorId = uuidv4();
  }

  scheduleAppointment(patient: Patient, date: string, time: string): void {
    // check if the doctor is free in this time range.
    let occupied: boolean = patient.appointments.some(
      (a: AppointmentWithDoctor) =>
        a.date === date && a.time === time && a.status === "scheduled"
    );

    if (occupied) {
      throw new Error(
        "Patient has another appointment at specified date and time"
      );
    } else {
      // add to the list of appointments. pass the doctor as this.
      this.appointments.push(new AppointmentWithPatient(time, date, patient));
    }
  }
  cancelAppointment(appointment: AppointmentWithPatient): void {
    let index: number = this.appointments.findIndex(
      (a: AppointmentWithPatient) =>
        a.date === appointment.date && a.time === appointment.time
    );

    if (index === -1) {
      // appointment not found, can't cancel non existing appointment => throw error
      throw new Error("Appointment does not exist");
    } else {
      // not deleting, but changing status to cancelled
      this.appointments[index].status = "canceled";
      console.log(
        `Successfully scheduled at ${appointment.date} : ${appointment.time}, with patient - ${appointment.patient.name} deleted appointment.`
      );
    }
  }
}
