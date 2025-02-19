// NetworkInformation对象

bodavm.memory.globalobj['NetworkInformation'] = function NetworkInformation() {
  console.log_copy('NetworkInformation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NetworkInformation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NetworkInformation'], "NetworkInformation");
bodavm.memory.globalobj['NetworkInformation'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['NetworkInformation'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('NetworkInformation', "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NetworkInformation'].prototype, "NetworkInformation", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NetworkInformation'].prototype, "NetworkInformation", "onchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NetworkInformation', "effectiveType", {
  configurable: true,
  enumerable: true,
  get: function effectiveType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NetworkInformation'].prototype, "NetworkInformation", "effectiveType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NetworkInformation', "rtt", {
  configurable: true,
  enumerable: true,
  get: function rtt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NetworkInformation'].prototype, "NetworkInformation", "rtt_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NetworkInformation', "downlink", {
  configurable: true,
  enumerable: true,
  get: function downlink() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NetworkInformation'].prototype, "NetworkInformation", "downlink_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NetworkInformation', "saveData", {
  configurable: true,
  enumerable: true,
  get: function saveData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NetworkInformation'].prototype, "NetworkInformation", "saveData_get", arguments);
  },
  set: undefined
}, 'prototype');