// generate random string of length 3~32
export function createRandomStr() {
  return Math.random().toString(36).substr(2);
}