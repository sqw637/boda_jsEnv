// ReadableStreamBYOBRequest对象

bodavm.memory.globalobj['ReadableStreamBYOBRequest'] = function ReadableStreamBYOBRequest() {
  console.log_copy('ReadableStreamBYOBRequest 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ReadableStreamBYOBRequest)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ReadableStreamBYOBRequest'], "ReadableStreamBYOBRequest");
bodavm.toolsFunc.defineProperty('ReadableStreamBYOBRequest', "view", {
  configurable: true,
  enumerable: true,
  get: function view() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamBYOBRequest'].prototype, "ReadableStreamBYOBRequest", "view_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamBYOBRequest', "respond", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function respond() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamBYOBRequest'].prototype, "ReadableStreamBYOBRequest", "respond", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamBYOBRequest', "respondWithNewView", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function respondWithNewView() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamBYOBRequest'].prototype, "ReadableStreamBYOBRequest", "respondWithNewView", arguments);
  }
}, 'prototype');