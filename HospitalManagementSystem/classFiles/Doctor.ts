import { v4 as uuidv4 } from "uuid";
import Patient from "./Patient";
import Person from "./Person";
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

    let isDoctorOccupied: boolean = this.appointments.some(
      (a) => a.time === time && a.date === date && a.status === "scheduled"
    );

    if (occupied) {
      throw new Error(
        "Patient has another appointment at specified date and time"
      );
    } else if (isDoctorOccupied) {
      throw new Error(
        `You already have an appointment scheduled at ${date} - ${time}`
      );
    } else {
      // add to doctor's list of appointments
      this.appointments.push(new AppointmentWithPatient(time, date, patient));
      //   add to patient's list of appointments
      patient.appointments.push(new AppointmentWithDoctor(time, date, this));
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
      //   cancel appointment for the doctor
      this.appointments[index].status = "canceled";
      //   cancel the appointment for the patient
      //   delete the appointment for the doctor at this time, day for this patient
      const patientAppointmentIndex =
        appointment.patient.appointments.findIndex(
          (a: AppointmentWithDoctor) =>
            a.date === appointment.date &&
            a.time === appointment.time &&
            a.status === "scheduled"
        );

      appointment.patient.appointments[patientAppointmentIndex].status =
        "canceled";
      console.log(
        `Successfully scheduled at ${appointment.date} : ${appointment.time}, with patient - ${appointment.patient.name} deleted appointment.`
      );
    }
  }
}
