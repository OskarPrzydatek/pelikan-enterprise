const isPositiveNumber = (value: unknown) =>
  (!Number.isNaN(value as number) && Number(value) > 0) ||
  'Pole musi zawierać wartość numeryczną większą od zera!';

const isStarsNumber = (value: unknown) =>
  (!Number.isNaN(value as number) && Number(value) > 0 && Number(value) < 6) ||
  'Pole musi zawierać wartość numeryczną oraz być w przedziale 1-5!';

export const requiredValidator = {
  required: 'Pole jest wymagane!',
};

export const numericValidator = {
  ...requiredValidator,
  validate: {
    isNumber: isPositiveNumber,
  },
};

export const starsValidator = {
  ...requiredValidator,
  required: 'Pole jest wymagane!',
  validate: {
    isNumber: isStarsNumber,
  },
};
