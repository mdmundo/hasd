export const getPath = ({ type, number }) => {
  const path = `${type || 'sung'}/${number.toString().padStart(3, '0')}.mp3`;
  return path;
};
