<h1>Ontime EventEmitter</h1>

The class is used to implement pattern Mediator. The common idea of the class has been taken from NodeJS native class EventEmitter and class BackboneJS Events.

<h2>How to install</h2>

```bash
npm install ontime-eventemitter
```

<h2>How to use</h2>

```typescript
import { EvenEmitter } from 'ontime-eventemitter';

const emitter: EvenEmitter = new EvenEmitter();

// create callback function
const cb = (name: string): void => console.log('Hello', name);

// subscribe callback
emitter.on('say', cb);

// send event
emitter.emit('say', 'John'); // -> Hello John
emitter.emit('say', 'Helen'); // -> Hello Helen

// unsubscribe callback
emitter.off('say', cb);
```

<h2>Methods</h2>

<h2>on</h2>

on(name: name, callback: Function) - Subscribe callback. The callback will be invoked whenever the event is fired.

<h2>once</h2>

once(name: name, callback: Function) - Just like "on", but causes the callback to fire only once before being removed.

<h2>off</h2>

off(name: name, callback: Function) - Unsubscribe previously callback.

<h2>emit</h2>

emit(name: name, [...args]) - Emit callbacks for the given event. Subsequent arguments to trigger will be passed along to the event callbacks.

<h2>stopListening</h2>

stopListening() - Remove all listeners.
