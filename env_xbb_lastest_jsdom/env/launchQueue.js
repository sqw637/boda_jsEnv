// LaunchQueue对象

bodavm.memory.globalobj['LaunchQueue'] = function LaunchQueue() {
  console.log_copy('LaunchQueue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof LaunchQueue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['LaunchQueue'], "LaunchQueue");
bodavm.toolsFunc.defineProperty('LaunchQueue', "setConsumer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setConsumer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LaunchQueue'].prototype, "LaunchQueue", "setConsumer", arguments);
  }
}, 'prototype');

// launchQueue对象

bodavm.memory.globalobj['launchQueue'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['launchQueue'].__proto__ = bodavm.memory.globalobj['LaunchQueue'].prototype;