export default function debounce(fn, timeout) {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, timeout);
  }
}