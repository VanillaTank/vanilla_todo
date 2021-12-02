/*
 * Generate an 'uniq' random string of specific length
 * @param { number } valueOfSymbals
 * @returns { string }
 */
export function getRandomString(valueOfSymbals) {
  const elements =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < valueOfSymbals; i++) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    randomString += elements[randomIndex];
  }
  return randomString;
}
