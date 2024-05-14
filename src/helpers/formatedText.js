export const sentenceSlice = (text) => {
  if (text.length > 25 && text.length < 64) {
    return text.slice(0, 25) + "...";
  }
  let sentences = text.split(".");

  if (text.length >= 56) {
    if (sentences[0].length >= 56) {
      return sentences[0].slice(0, 56) + "...";
    }
    return sentences[0] + ".";
  }
  return text;
};
