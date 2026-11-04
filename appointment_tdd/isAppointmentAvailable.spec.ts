import { describe, it, expect } from "vitest";
import { isAppointmentAvailable } from "./isAppointmentAvailable";

const time = (h: number, m = 0) => new Date(2026, 10, 3, h, m);

const start = time(8);
const end = time(16);

describe("Testy sprawdzania dostępności", () => {
  it("Umówienie wizyty w godzinach pracy", () => {
    expect(isAppointmentAvailable(time(10), 60, start, end, [])).toBe(true);
  });

  it("Umówienie wizyty w momencie rozpoczęcia pracy", () => {
    expect(isAppointmentAvailable(time(8), 60, start, end, [])).toBe(true);
  });

  it("Wizyta kończy się w momencie zakończenia pracy", () => {
    expect(isAppointmentAvailable(time(15), 60, start, end, [])).toBe(true);
  });

  it("Umówienie wizyty przed rozpoczęciem pracy", () => {
    expect(isAppointmentAvailable(time(7, 59), 60, start, end, [])).toBe(false);
  });

  it("Umówienie wizyty trwającej dłużej niż są godziny pracy", () => {
    expect(isAppointmentAvailable(time(15, 50), 60, start, end, [])).toBe(
      false,
    );
  });

  it("Długość trwania wizyty jest ujemna lub równa zero", () => {
    expect(isAppointmentAvailable(time(10), -5, start, end, [])).toBe(false);
    expect(isAppointmentAvailable(time(10), 0, start, end, [])).toBe(false);
  });

  it("Wizyta jest w trakcie lub zaczyna się w tym samym momencie co inna wizyta", () => {
    expect(
      isAppointmentAvailable(time(15), 30, start, end, [
        { start: time(15), end: time(16) },
      ]),
    ).toBe(false);
  });
  expect(
    isAppointmentAvailable(time(15, 20), 30, start, end, [
      { start: time(15), end: time(16) },
    ]),
  ).toBe(false);

  it("Null lub Undefined w datach", () => {
    expect(isAppointmentAvailable(null, 60, start, end, [])).toBe(false);
    expect(isAppointmentAvailable(time(9), 60, null, end, [])).toBe(false);
    expect(isAppointmentAvailable(time(10), 60, start, null, [])).toBe(false);
  });
});
