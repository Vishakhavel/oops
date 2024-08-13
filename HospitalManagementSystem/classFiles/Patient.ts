import { v4 as uuidV4 } from "uuid";
import { AppointmentStatus } from "../constants";

import { findAppointmentIndex } from "../utils";
import Doctor from "./Doctor";
import Person from "./Person";
import AppointmentWithDoctor from "./AppointmentWithDoctor";
import AppointmentWithPatient from "./AppointmentWithPatient";

export default class Patient implements Person {
  name: string;
  patientId: string;
  appointments: AppointmentWithDoctor[];

  constructor(name: string) {
    // auto generate the patient ID
    this.patientId = uuidV4();
    this.name = name;
    this.appointments = [];
  }

  public bookAppointment(doctor: Doctor, date: string, time: string): void {
    // check if the doctor is available at the given date and time.
    let isDoctorOccupied = findAppointmentIndex(
      date,
      time,
      doctor.appointments
    );

    let doesPatientHaveOtherAppointments = findAppointmentIndex(
      date,
      time,
      this.appointments
    );

    if (isDoctorOccupied !== -1) {
      throw new Error(`Doctor is occupied at ${date} - ${time}. \n`);
    } else if (doesPatientHaveOtherAppointments !== -1) {
      throw new Error(`You have another appointment at ${date} - ${time}. \n`);
    } else {
      // add appointment to patient's list of appointments
      this.appointments.push(new AppointmentWithDoctor(time, date, doctor));
      // add appointment to doctor's list of appointments
      doctor.appointments.push(new AppointmentWithPatient(time, date, this));
      console.log(
        ` Successfully scheduled appointment at ${date} - ${time} with Dr. ${doctor.name}. Please arrive 30 mins early. \n`
      );
    }
  }
  //   cancelAppointment(appointment: AppointmentWithDoctor): void {
  // can't be date time in creation, and appointment class in deletion. better to make it date, time doctor for both creatuion and deletion
  //   cancelAppointment(appointment: AppointmentWithDoctor): void {
  public cancelAppointment(doctor: Doctor, date: string, time: string): void {
    let index = findAppointmentIndex(date, time, this.appointments);

    if (index === -1) {
      throw new Error(
        `There is no appointment scheduled at ${date} - ${time}. `
      );
    } else {
      // delete the appointment for the patient
      this.appointments[index].status = AppointmentStatus.Canceled;

      //   delete the appointment for the doctor at this time, day for this patient
      const docAppointmentIndex = doctor.appointments.findIndex(
        (a: AppointmentWithPatient) =>
          a.date === date && a.time === time && a.status === "scheduled"
      );

      doctor.appointments[docAppointmentIndex].status =
        AppointmentStatus.Canceled;
    }
  }

  public printAppointments(): void {
    let printString = "";
    for (let i = 0; i < this.appointments.length; i++) {
      printString +=
        "Doctor -" +
        this.appointments[i].doctor.name +
        " Date -" +
        this.appointments[i].date +
        " Time -" +
        this.appointments[i].time +
        "\n" +
        "Status - " +
        this.appointments[i].status +
        "\n";
    }
    console.log(`Patient - ${this.name}'s appointments: \n ${printString} \n`);
  }
}
