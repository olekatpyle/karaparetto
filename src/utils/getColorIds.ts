const MAX_ID = 1802246;

export const getRandomId: (colorIds: number[]) => number = (colorIds) => {
  const id: number = Math.floor(Math.random() * MAX_ID);

  if (!colorIds.includes(id)) return id;
  return getRandomId(colorIds);
};

export const getColorIds: () => number[] = () => {
  const colorIds: number[] = [];

  while (colorIds.length < 16) {
    const color = getRandomId(colorIds);
    colorIds.push(color);
  }
  return colorIds;
};
