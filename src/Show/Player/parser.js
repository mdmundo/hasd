export const getPath = ({ sung, number }) => {
  const path = `${sung ? 'sung' : 'instrumental'}/${number
    .toString()
    .padStart(3, '0')}.mp3`;
  return path;
};
