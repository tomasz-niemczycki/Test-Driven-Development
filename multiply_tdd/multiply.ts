export function calc(a: number, b: number): number | null {
  if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) {
    return null;
  }

  let result = 0;
  const count = Math.abs(b);
  for (let i = 0; i < count; i++) {
    result += a;

    if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
      return null;
    }
  }

  return b < 0 ? -result : result;
}
