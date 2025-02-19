// OfflineAudioContext对象

bodavm.memory.globalobj['OfflineAudioContext'] = function OfflineAudioContext() {
  console.log_copy('OfflineAudioContext 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof OfflineAudioContext)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OfflineAudioContext': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['OfflineAudioContext'], "OfflineAudioContext");
bodavm.memory.globalobj['OfflineAudioContext'].prototype.__proto__ = bodavm.memory.globalobj['BaseAudioContext'].prototype;
bodavm.memory.globalobj['OfflineAudioContext'].__proto__ = bodavm.memory.globalobj['BaseAudioContext'];
bodavm.toolsFunc.defineProperty('OfflineAudioContext', "oncomplete", {
  configurable: true,
  enumerable: true,
  get: function oncomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OfflineAudioContext'].prototype, "OfflineAudioContext", "oncomplete_get", arguments);
  },
  set: function oncomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OfflineAudioContext'].prototype, "OfflineAudioContext", "oncomplete_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OfflineAudioContext', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OfflineAudioContext'].prototype, "OfflineAudioContext", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('OfflineAudioContext', "resume", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OfflineAudioContext'].prototype, "OfflineAudioContext", "resume", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OfflineAudioContext', "startRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function startRendering() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OfflineAudioContext'].prototype, "OfflineAudioContext", "startRendering", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OfflineAudioContext', "suspend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function suspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OfflineAudioContext'].prototype, "OfflineAudioContext", "suspend", arguments);
  }
}, 'prototype');