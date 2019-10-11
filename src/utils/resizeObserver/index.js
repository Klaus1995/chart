import pool from './pool';

const OBSERVER_ID_KEY = 'observerid';

/*
 * 给元素绑定resize回调函数
 * @param element
 * @param cb
 * @return unbind函数 
 */
export function add(element, cb) {
  if (!element instanceof HTMLElement) {
    throw Error('element参数必须为HTML元素');
  }

  let observerId = element.dataset[OBSERVER_ID_KEY];
  let observer;
  if (observerId) {
    observer = pool.get(observerId);
  } else {
    observer = pool.create(element);
    element.dataset[OBSERVER_ID_KEY] = observer.id;
  }

  observer.addListener(cb);

  return () => observer.removeListener(cb);
}

/*
 * 给元素解绑resize回调函数
 * @param element
 * @param cb
 * @return 解绑结果
 */
export function remove(element, cb) {
  if (!element instanceof HTMLElement) {
    throw Error('element参数必须为HTML元素');
  }

  const observerId = element.dataset[OBSERVER_ID_KEY];
  if (!observerId) {
    return false;
  }

  const observer = pool.get(observerId);
  if (!observer) {
    return false;
  }

  return observer.removeListener(cb);
}

/*
 * 清空元素的resize回调函数
 * @param element
 * @return 清空结果
 */
export function clear(element) {
  if (!element instanceof HTMLElement) {
    throw Error('element参数必须为HTML元素');
  }

  const observerId = element.dataset[OBSERVER_ID_KEY];
  if (!observerId) {
    return false;
  }

  delete element.dataset[OBSERVER_ID_KEY];
  return pool.remove(observerId);
}

export default {
  add,
  remove,
  clear,
};