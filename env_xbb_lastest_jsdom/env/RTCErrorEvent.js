// RTCErrorEvent对象

bodavm.memory.globalobj['RTCErrorEvent'] = function RTCErrorEvent() {
  console.log_copy('RTCErrorEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCErrorEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCErrorEvent'], "RTCErrorEvent");
bodavm.memory.globalobj['RTCErrorEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['RTCErrorEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('RTCErrorEvent', "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCErrorEvent'].prototype, "RTCErrorEvent", "error_get", arguments);
  },
  set: undefined
}, 'prototype');