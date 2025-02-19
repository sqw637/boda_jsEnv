// RTCDtlsTransport对象

bodavm.memory.globalobj['RTCDtlsTransport'] = function RTCDtlsTransport() {
  console.log_copy('RTCDtlsTransport 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCDtlsTransport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCDtlsTransport'], "RTCDtlsTransport");
bodavm.memory.globalobj['RTCDtlsTransport'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['RTCDtlsTransport'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('RTCDtlsTransport', "iceTransport", {
  configurable: true,
  enumerable: true,
  get: function iceTransport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDtlsTransport'].prototype, "RTCDtlsTransport", "iceTransport_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDtlsTransport', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDtlsTransport'].prototype, "RTCDtlsTransport", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDtlsTransport', "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDtlsTransport'].prototype, "RTCDtlsTransport", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDtlsTransport'].prototype, "RTCDtlsTransport", "onstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDtlsTransport', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDtlsTransport'].prototype, "RTCDtlsTransport", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDtlsTransport'].prototype, "RTCDtlsTransport", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDtlsTransport', "getRemoteCertificates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRemoteCertificates() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDtlsTransport'].prototype, "RTCDtlsTransport", "getRemoteCertificates", arguments);
  }
}, 'prototype');