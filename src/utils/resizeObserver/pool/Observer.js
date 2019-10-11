import debounce from './debounce';
import './index.css';

class Observer {
  constructor(id, element) {
    this.id = id;
    this.listeners = [];
    this.trigger = this.trigger.bind(this);
    this.observerElement = this.addElement(element);
  }

  addListener(listener) {
    const isExisted = this.listeners.includes(listener);
    if (!isExisted) {
      this.listeners.push(listener);
    }
  }

  removeListener(listener) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
      return true;
    }
    return false;
  }

  addElement(element) {
    if (window.getComputedStyle(element).position === 'static') {
      element.style.position = 'relative';
    }

    const observerElement = document.createElement('object');
    observerElement.type = 'text/html';
    observerElement.setAttribute('tabindex', '-1');
    observerElement.setAttribute('class', 'resize-observer');
    observerElement.onload = () => {
      observerElement.contentDocument.defaultView.addEventListener('resize', debounce(this.trigger, 500));
      // 立马触发
      this.trigger();
    };

    element.appendChild(observerElement);
    observerElement.data = 'about:blank';

    return observerElement;
  }

  trigger() {
    console.log('trigger');
    this.listeners.forEach(listener => {
      if (typeof listener === 'function') {
        const params = {
          width: this.observerElement.offsetWidth,
          height: this.observerElement.offsetHeight,
        };
        listener(params);
      }
    });
  }

  destory() {
    if (this.observerElement && this.observerElement.parentNode) {
      if (this.observerElement.contentDocument) {
        this.observerElement.contentDocument.defaultView.removeEventListener('resize', this.trigger);
      }
      this.observerElement.parentNode.removeChild(this.observerElement);
      this.observerElement = null;
      this.listeners = [];
    }
  }
}

export default Observer;
