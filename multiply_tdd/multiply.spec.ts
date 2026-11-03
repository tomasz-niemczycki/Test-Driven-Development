import { describe, it, expect } from "vitest";
import { calc } from "./multiply";

describe("Test mnożenia", () => {
  it("Zwykłe mnożenie", () => {
    expect(calc(5, 10)).toBe(50);
    // expect(calc(0.1, 0.2)).toBe(0.02);
  });

  it("Mnożenie razy 1", () => {
    expect(calc(7, 1)).toBe(7);
    expect(calc(1, 7)).toBe(7);
  });

  it("Mnożenie przez liczbę ujemną", () => {
    expect(calc(5, -5)).toBe(-25);
    expect(calc(10, -1)).toBe(-10);
    expect(calc(-5, 5)).toBe(-25);
  });

  it("Mnożenie dwóch ujemnych", () => {
    expect(calc(-2, -5)).toBe(10);
  });

  it("Mnożenie przez 0", () => {
    expect(calc(5, 0)).toBe(0);
  });

  // it("Mnożenie liczb niewymiernych", () => {
  //   expect(calc(Math.sqrt(2), 1)).toBe(Math.sqrt(2));
  // });

  it("Mnożenie liczb nieokreślonych", () => {
    expect(calc(Number.NaN, 1)).toBe(null);
    expect(calc(Number.POSITIVE_INFINITY, 1)).toBe(null);
    expect(calc(Number.NEGATIVE_INFINITY, 1)).toBe(null);
    expect(calc(1, Number.NaN)).toBe(null);
    expect(calc(1, Number.NEGATIVE_INFINITY)).toBe(null);
    expect(calc(1, Number.POSITIVE_INFINITY)).toBe(null);
  });

  it("Mnożenie liczb spoza zakresu", () => {
    expect(calc(Number.MAX_VALUE, Number.MAX_VALUE)).toBe(null);
    expect(calc(Number.MAX_VALUE, Number.MIN_VALUE)).toBe(null);
    expect(calc(Number.MIN_VALUE, Number.MAX_VALUE)).toBe(null);
    expect(calc(Number.MIN_VALUE, Number.MIN_VALUE)).toBe(null);
    expect(calc(Number.MAX_SAFE_INTEGER, 2)).toBe(null);
    expect(calc(Number.MAX_SAFE_INTEGER - 100, 2)).toBe(null);
    expect(calc(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(null);
    expect(calc(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)).toBe(null);
    expect(calc(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(null);
    expect(calc(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)).toBe(null);
  });
});
