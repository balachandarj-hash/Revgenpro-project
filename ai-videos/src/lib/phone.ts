/** Indian mobile: 10 digits starting with 6–9 (optional +91 / 0 prefix). */
export function normalizeIndianMobile(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  const mobile =
    digits.length === 10
      ? digits
      : digits.length === 12 && digits.startsWith("91")
        ? digits.slice(2)
        : digits.length === 11 && digits.startsWith("0")
          ? digits.slice(1)
          : null;

  if (!mobile || mobile.length !== 10) return null;
  if (!/^[6-9]/.test(mobile)) return null;
  return mobile;
}

export function isValidIndianMobile(input: string): boolean {
  return normalizeIndianMobile(input) !== null;
}