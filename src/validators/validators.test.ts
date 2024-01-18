import { describe, test } from 'vitest';

import { numericValidator, starsValidator } from '.';

describe('validators', () => {
  describe('numericValidator object', () => {
    test('should return true for valid positive numbers', () => {
      expect(numericValidator.validate.isNumber(10)).toBe(true);
      expect(numericValidator.validate.isNumber(0.5)).toBe(true);
    });

    test('should return message for invalid numbers and non-numeric values', () => {
      expect(numericValidator.validate.isNumber(-5)).toBe(
        'Pole musi zawierać wartość numeryczną większą od zera!'
      );
      expect(numericValidator.validate.isNumber('abc')).toBe(
        'Pole musi zawierać wartość numeryczną większą od zera!'
      );
      expect(numericValidator.validate.isNumber(true)).toBe(true);
      expect(numericValidator.validate.isNumber(NaN)).toBe(
        'Pole musi zawierać wartość numeryczną większą od zera!'
      );
      expect(numericValidator.validate.isNumber(0)).toBe(
        'Pole musi zawierać wartość numeryczną większą od zera!'
      );
      expect(numericValidator.validate.isNumber(NaN)).toBe(
        'Pole musi zawierać wartość numeryczną większą od zera!'
      );
      expect(numericValidator.validate.isNumber(0)).toBe(
        'Pole musi zawierać wartość numeryczną większą od zera!'
      );
    });
  });

  describe('starsValidator object', () => {
    test('should return true for valid stars numbers', () => {
      expect(starsValidator.validate.isNumber(3)).toBe(true);
      expect(starsValidator.validate.isNumber(4.5)).toBe(true);
    });

    test('should return false for invalid stars numbers and non-numeric values', () => {
      expect(starsValidator.validate.isNumber(0)).toBe(
        'Pole musi zawierać wartość numeryczną oraz być w przedziale 1-5!'
      );
      expect(starsValidator.validate.isNumber(6)).toBe(
        'Pole musi zawierać wartość numeryczną oraz być w przedziale 1-5!'
      );
      expect(starsValidator.validate.isNumber('abc')).toBe(
        'Pole musi zawierać wartość numeryczną oraz być w przedziale 1-5!'
      );
      expect(starsValidator.validate.isNumber(true)).toBe(true);
      expect(starsValidator.validate.isNumber(NaN)).toBe(
        'Pole musi zawierać wartość numeryczną oraz być w przedziale 1-5!'
      );
    });
  });
});
