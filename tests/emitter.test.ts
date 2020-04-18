import { EventEmitter } from '../src';

describe('EventEmitter', () => {
  it('Check methods', async (next) => {
    const emitter: EventEmitter = new EventEmitter();

    expect(typeof emitter.on).toEqual('function');
    expect(typeof emitter.once).toEqual('function');
    expect(typeof emitter.off).toEqual('function');
    expect(typeof emitter.emit).toEqual('function');
    expect(typeof emitter.stopListening).toEqual('function');

    next();
  });

  it('on', async (next) => {
    const emitter: EventEmitter = new EventEmitter();

    const cb = () => {
      expect(1).toEqual(1);
      next();
    };

    emitter.on('test', cb);
    emitter.emit('test');
    emitter.off('test', cb);
  });

  it('once', async (next) => {
    const emitter: EventEmitter = new EventEmitter();

    let count: number = 0;

    const cb = () => {
      if (count === 0) {
        expect(1).toEqual(1); 
      } else if (count > 0) {
        throw new Error('once is not working')
      }

      count++;
    };
    
    emitter.once('test', cb);
    emitter.emit('test');
    emitter.emit('test');

    setTimeout(() => next(), 200);
  });

  it('off', async (next) => {
    const emitter: EventEmitter = new EventEmitter();

    let count: number = 0;

    const cb = () => {
      if (count === 0) {
        expect(1).toEqual(1); 
      } else if (count > 0) {
        throw new Error('once is not working')
      }

      count++;
    };
    
    emitter.on('test', cb);
    emitter.emit('test');
    emitter.off('test', cb);
    emitter.emit('test');

    setTimeout(() => next(), 200);
  });

  it('stopListening', async (next) => {
    const emitter: EventEmitter = new EventEmitter();

    let count: number = 0;

    const cb = () => {
      if (count === 0) {
        expect(1).toEqual(1); 
      } else if (count > 0) {
        throw new Error('stopListening is not working')
      }

      count++;
    };
    
    emitter.on('test', cb);
    emitter.emit('test');
    emitter.off('test', cb);
    emitter.emit('test');

    setTimeout(() => next(), 200);
  });

  // it('Error. Check all value', async (next) => {

  //   next();
  // });
});