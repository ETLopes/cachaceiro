export const calculatePrice = (
  value: string,
  size: number,
  quantity: number,
) => {
  const convertedValue: any =
    value && parseFloat(value.replace(/[^0-9.-]+/g, ''));
  console.log('convertedvalue', convertedValue);

  if (size === 0 || convertedValue === 0) {
    return 0;
  }

  return (((convertedValue / size) * quantity) / 100).toFixed(2);
};

export default calculatePrice;
