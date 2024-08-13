import { v4 as uuidv4 } from "uuid";
import { AppointmentStatus } from "../constants";
import Patient from "./Patient";
import Person from "./Person";
import AppointmentWithPatient from "./AppointmentWithPatient";
import AppointmentWithDoctor from "./AppointmentWithDoctor";
import { findAppointmentIndex } from "../utils";
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
    let occupied: number = findAppointmentIndex(
      date,
      time,
      patient.appointments
    );

    let isDoctorOccupied: number = findAppointmentIndex(
      date,
      time,
      this.appointments
    );

    if (occupied !== -1) {
      throw new Error(
        "Patient has another appointment at specified date and time"
      );
    } else if (isDoctorOccupied !== -1) {
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
  cancelAppointment(patient: Patient, date: string, time: string): void {
    let index = findAppointmentIndex(date, time, this.appointments);

    if (index === -1) {
      // appointment not found, can't cancel non existing appointment => throw error
      throw new Error("Appointment does not exist");
    } else {
      // not deleting, but changing status to cancelled
      //   cancel appointment for the doctor
      this.appointments[index].status = AppointmentStatus.Canceled;
      //   cancel the appointment for the patient
      //   delete the appointment for the doctor at this time, day for this patient
      const patientAppointmentIndex = findAppointmentIndex(
        date,
        time,
        patient.appointments
      );

      patient.appointments[patientAppointmentIndex].status =
        AppointmentStatus.Canceled;
      console.log(
        `Successfully scheduled at ${date} : ${time}, with patient - ${patient.name} deleted appointment.`
      );
    }
  }
}
