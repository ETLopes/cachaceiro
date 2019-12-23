export const calculatePrice = (
  value: string,
  size: number,
  quantity: number,
) => {
  const convertedValue: number = parseFloat(value.replace(/[^0-9.-]+/g, ''));

  if (size === 0 || convertedValue === 0) {
    return 0;
  }

  return (((convertedValue / size) * quantity) / 100).toFixed(2);
};
