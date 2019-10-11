import Observer from './Observer';
import { createRandomStr } from '@/utils'

const observerPool = Object.create(null);

export function create(element) {
  const id = createRandomStr();
  const observer = new Observer(id, element);
  observerPool[id] = observer;
  return observer;
}

export function get(id) {
  const observer = observerPool[id];
  return observer ? observer : null;
}

export function remove(id) {
  const observer = observerPool[id];
  if (!observer) {
    return false;
  }

  observer.destory();
  delete observerPool[id];
  return true;
}

export default {
  create,
  get,
  remove,
}