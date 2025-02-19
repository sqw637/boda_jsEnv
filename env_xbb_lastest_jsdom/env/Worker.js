// Worker对象

bodavm.memory.globalobj['Worker'] = function Worker() {
  console.log_copy('Worker 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Worker)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Worker': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Worker'], "Worker");
bodavm.memory.globalobj['Worker'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Worker'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Worker', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Worker'].prototype, "Worker", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Worker'].prototype, "Worker", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Worker', "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function postMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Worker'].prototype, "Worker", "postMessage", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Worker', "terminate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function terminate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Worker'].prototype, "Worker", "terminate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Worker', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Worker'].prototype, "Worker", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Worker'].prototype, "Worker", "onerror_set", arguments);
  }
}, 'prototype');