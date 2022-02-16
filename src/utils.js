let id = 0;
export const getId = () => {
  return id++;
};

export const getRandomID = () => String(new Date().getTime());
