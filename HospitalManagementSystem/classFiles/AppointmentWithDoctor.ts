import Appointment from "./Appointment";
import Doctor from "./Doctor";

export default class AppointmentWithDoctor extends Appointment {
  doctor: Doctor;
  constructor(time: string, date: string, doctor: Doctor) {
    super(time, date);
    this.doctor = doctor;
  }
}
