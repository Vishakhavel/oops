type AppointmentStatus = "scheduled" | "completed" | "canceled";
export default class Appointment {
  date: string;
  time: string;
  status: AppointmentStatus;

  constructor(time: string, date: string) {
    this.time = time;
    this.date = date;
    this.status = "scheduled";
  }
}
