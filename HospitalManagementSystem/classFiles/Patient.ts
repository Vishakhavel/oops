import { v4 as uuidV4 } from "uuid";
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
    let isDoctorOccupied = doctor.appointments.some(
      (a: AppointmentWithPatient) =>
        a.date === date && a.time == time && a.status === "scheduled"
    );

    let doesPatientHaveOtherAppointments = this.appointments.some(
      (a: AppointmentWithDoctor) =>
        a.date === date && a.time === time && a.status === "scheduled"
    );

    if (isDoctorOccupied) {
      throw new Error(`Doctor is occupied at ${date} - ${time}. \n`);
    } else if (doesPatientHaveOtherAppointments) {
      throw new Error(`You have another appointment at ${date} - ${time}. \n`);
    } else {
      // add appointment to patient's list of appointments
      this.appointments.push(new AppointmentWithDoctor(time, date, doctor));
      // add appointment to doctor's list of appointments
      doctor.appointments.push(new AppointmentWithPatient(time, date, this));
      console.log(
        ` Successfully scheduled appointment at ${date} - ${time} with Dr. ${doctor.name}. Please arrive 30 mins early.`
      );
    }
  }
  cancelAppointment(appointment: AppointmentWithDoctor): void {
    let index = this.appointments.findIndex(
      (a: AppointmentWithDoctor) =>
        appointment.time === a.time &&
        appointment.date === a.date &&
        appointment.status === "scheduled"
    );

    if (index === -1) {
      throw new Error(
        `There is no appointment scheduled at ${appointment.date} - ${appointment.time}. `
      );
    } else {
      // delete the appointment for the patient
      this.appointments[index].status = "canceled";

      //   delete the appointment for the doctor at this time, day for this patient
      const docAppointmentIndex = appointment.doctor.appointments.findIndex(
        (a: AppointmentWithPatient) =>
          a.date === appointment.date &&
          a.time === appointment.time &&
          a.status === "scheduled"
      );

      appointment.doctor.appointments[docAppointmentIndex].status = "canceled";
    }
  }
}
