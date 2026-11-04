export function isAppointmentAvailable(
  appointmentStart: Date | null | undefined,
  durationMinutes: number,
  workingHoursStart: Date | null | undefined,
  workingHoursEnd: Date | null | undefined,
  existingAppointments: {
    start: Date;
    end: Date;
  }[],
): boolean {
  if (!appointmentStart || !workingHoursStart || !workingHoursEnd) {
    return false;
  }
  if (durationMinutes <= 0) {
    return false;
  }

  const start = appointmentStart.getTime();
  const end = start + durationMinutes * 60000;
  const workFrom = workingHoursStart.getTime();
  const workTo = workingHoursEnd.getTime();

  if (start < workFrom || end > workTo) {
    return false;
  }

  for (const other of existingAppointments) {
    if (start < other.end.getTime() && end > other.start.getTime()) {
      return false;
    }
  }

  return true;
}
