const MAX_ID = 1000000;

export const getRandomId: (colorIds: number[]) => number = (colorIds) => {
  const id: number = Math.floor(Math.random() * MAX_ID);

  if (!colorIds.includes(id)) return id;
  return getRandomId(colorIds);
};

export const getColorIds: (amount: number) => number[] = (amount) => {
  const colorIds: number[] = [];

  while (colorIds.length < amount) {
    const color = getRandomId(colorIds);
    colorIds.push(color);
  }
  return colorIds;
};
