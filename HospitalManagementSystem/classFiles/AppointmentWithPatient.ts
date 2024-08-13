import Appointment from "./Appointment";
import Patient from "./Patient";

export default class AppointmentWithPatient extends Appointment {
  patient: Patient;
  constructor(time: string, date: string, patient: Patient) {
    super(time, date);
    this.patient = patient;
  }
}
