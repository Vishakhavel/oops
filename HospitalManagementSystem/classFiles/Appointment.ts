// type AppointmentStatus = "scheduled" | "completed" | "canceled";
import { AppointmentStatus } from "../constants";
export default class Appointment {
  date: string;
  time: string;
  status: AppointmentStatus;

  constructor(time: string, date: string) {
    this.time = time;
    this.date = date;
    this.status = AppointmentStatus.Scheduled;
  }
}
