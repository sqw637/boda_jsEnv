// RTCSessionDescription对象

bodavm.memory.globalobj['RTCSessionDescription'] = function RTCSessionDescription() {
  console.log_copy('RTCSessionDescription 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.RTCSessionDescription();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCSessionDescription'], "RTCSessionDescription");
bodavm.toolsFunc.defineProperty('RTCSessionDescription', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSessionDescription'].prototype, "RTCSessionDescription", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSessionDescription'].prototype, "RTCSessionDescription", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCSessionDescription', "sdp", {
  configurable: true,
  enumerable: true,
  get: function sdp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSessionDescription'].prototype, "RTCSessionDescription", "sdp_get", arguments);
  },
  set: function sdp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSessionDescription'].prototype, "RTCSessionDescription", "sdp_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCSessionDescription', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSessionDescription'].prototype, "RTCSessionDescription", "toJSON", arguments);
  }
}, 'prototype');