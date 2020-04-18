type TFn = (...args: any[]) => any;

interface IEventEmitter {
  on(name: string, fn: TFn): void;
  once(name: string, fn: TFn): void;
  off(name: string, fn: TFn): void;
  emit(name: string, ...args: any[]): void;
  stopListening(): void;
}

class EventEmitter implements IEventEmitter {

  private _listeners: Map<string, Set<TFn>>;
  private _onceListeners: Map<string, Set<TFn>>;

  constructor() {
    this._listeners = new Map();
    this._onceListeners = new Map();
  }

  on(name: string, fn: TFn): void {
    const listeners = this._listeners.get(name) || new Set();

    if (typeof fn !== 'function') {
      throw new Error('Second argument must be a function');
    }

    listeners.add(fn);

    this._listeners.set(name, listeners);
  }

  once(name: string, fn: TFn): void {
    const listeners = this._onceListeners.get(name) || new Set();
    
    if (typeof fn !== 'function') {
      throw new Error('Second argument must be a function');
    }

    listeners.add(fn);
    
    this._onceListeners.set(name, listeners);
  }

  off(name: string, fn: TFn): void {
    const listeners = this._listeners.get(name);
    const onceListeners = this._onceListeners.get(name);
    
    if (typeof fn !== 'function') {
      throw new Error('Second argument must be a function');
    }

    if (listeners) {
      listeners.delete(fn);
    }

    if (onceListeners) {
      onceListeners.delete(fn);
    }
  }

  emit(name: string, ...args: any[]): void {
    const onceListeners = this._onceListeners.get(name);
    const listeners = this._listeners.get(name);
    const allListeners = this._listeners.get('*');

    if (onceListeners) {
      onceListeners.forEach((fn: TFn) => fn(...args));

      this._onceListeners.delete(name);
    }

    if (listeners) {
      listeners.forEach((fn: TFn) => fn(...args));
    }

    if (allListeners) {
      allListeners.forEach((fn: TFn) => fn(name, ...args));
    }
  }

  stopListening(): void {
    this._listeners.clear();
    this._onceListeners.clear();
  }

}

export {
  EventEmitter,
  IEventEmitter
};
