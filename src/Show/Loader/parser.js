export const getPath = ({ mode, hymn }) => {
  const path = `${mode}/${hymn.toString().padStart(3, '0')}.mp3`;
  return path;
};
