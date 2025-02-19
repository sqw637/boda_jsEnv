// IDBVersionChangeEvent对象

bodavm.memory.globalobj['IDBVersionChangeEvent'] = function IDBVersionChangeEvent() {
  console.log_copy('IDBVersionChangeEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBVersionChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'IDBVersionChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBVersionChangeEvent'], "IDBVersionChangeEvent");
bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['IDBVersionChangeEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('IDBVersionChangeEvent', "oldVersion", {
  configurable: true,
  enumerable: true,
  get: function oldVersion() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype, "IDBVersionChangeEvent", "oldVersion_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBVersionChangeEvent', "newVersion", {
  configurable: true,
  enumerable: true,
  get: function newVersion() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype, "IDBVersionChangeEvent", "newVersion_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBVersionChangeEvent', "dataLoss", {
  configurable: true,
  enumerable: true,
  get: function dataLoss() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype, "IDBVersionChangeEvent", "dataLoss_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBVersionChangeEvent', "dataLossMessage", {
  configurable: true,
  enumerable: true,
  get: function dataLossMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype, "IDBVersionChangeEvent", "dataLossMessage_get", arguments);
  },
  set: undefined
}, 'prototype');