import { v4 as uuidV4 } from "uuid";
import Doctor from "./Doctor";
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

    if (isDoctorOccupied) {
      throw new Error(
        `Doctor is occupied at ${date} - ${time}. Here's a list of the doctor's appointments, please check before booking again - \n`
      );
    } else {
      this.appointments.push(new AppointmentWithDoctor(time, date, doctor));
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
      this.appointments[index].status = "canceled";
    }
  }
}
