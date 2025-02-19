// RTCIceCandidate对象

bodavm.memory.globalobj['RTCIceCandidate'] = function RTCIceCandidate() {
  console.log_copy('RTCIceCandidate 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCIceCandidate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCIceCandidate': sdpMid and sdpMLineIndex are both null.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCIceCandidate'], "RTCIceCandidate");
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "candidate", {
  configurable: true,
  enumerable: true,
  get: function candidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "candidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "sdpMid", {
  configurable: true,
  enumerable: true,
  get: function sdpMid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "sdpMid_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "sdpMLineIndex", {
  configurable: true,
  enumerable: true,
  get: function sdpMLineIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "sdpMLineIndex_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "foundation", {
  configurable: true,
  enumerable: true,
  get: function foundation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "foundation_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "component", {
  configurable: true,
  enumerable: true,
  get: function component() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "component_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "priority", {
  configurable: true,
  enumerable: true,
  get: function priority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "priority_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "address", {
  configurable: true,
  enumerable: true,
  get: function address() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "address_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "protocol_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "port_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "tcpType", {
  configurable: true,
  enumerable: true,
  get: function tcpType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "tcpType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "relatedAddress", {
  configurable: true,
  enumerable: true,
  get: function relatedAddress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "relatedAddress_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "relatedPort", {
  configurable: true,
  enumerable: true,
  get: function relatedPort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "relatedPort_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "usernameFragment", {
  configurable: true,
  enumerable: true,
  get: function usernameFragment() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "usernameFragment_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceCandidate', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceCandidate'].prototype, "RTCIceCandidate", "toJSON", arguments);
  }
}, 'prototype');