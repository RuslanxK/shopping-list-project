export const isValidProductName = (name: unknown): name is string => {
  return typeof name === 'string' && name.trim().length >= 2;
};
