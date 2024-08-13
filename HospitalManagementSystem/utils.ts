import Appointment from "./classFiles/Appointment";
import { AppointmentStatus } from "./constants";
export const findAppointmentIndex = (
  date: string,
  time: string,
  appointments: Appointment[]
): number => {
  return appointments.findIndex(
    (a: Appointment) =>
      a.date === date &&
      a.time === time &&
      a.status === AppointmentStatus.Scheduled
  );
};
