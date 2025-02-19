// AuthenticatorAttestationResponse对象

bodavm.memory.globalobj['AuthenticatorAttestationResponse'] = function AuthenticatorAttestationResponse() {
  console.log_copy('AuthenticatorAttestationResponse 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AuthenticatorAttestationResponse)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AuthenticatorAttestationResponse'], "AuthenticatorAttestationResponse");
bodavm.memory.globalobj['AuthenticatorAttestationResponse'].prototype.__proto__ = bodavm.memory.globalobj['AuthenticatorResponse'].prototype;
bodavm.memory.globalobj['AuthenticatorAttestationResponse'].__proto__ = bodavm.memory.globalobj['AuthenticatorResponse'];
bodavm.toolsFunc.defineProperty('AuthenticatorAttestationResponse', "attestationObject", {
  configurable: true,
  enumerable: true,
  get: function attestationObject() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AuthenticatorAttestationResponse'].prototype, "AuthenticatorAttestationResponse", "attestationObject_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AuthenticatorAttestationResponse', "getAuthenticatorData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAuthenticatorData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AuthenticatorAttestationResponse'].prototype, "AuthenticatorAttestationResponse", "getAuthenticatorData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AuthenticatorAttestationResponse', "getPublicKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPublicKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AuthenticatorAttestationResponse'].prototype, "AuthenticatorAttestationResponse", "getPublicKey", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AuthenticatorAttestationResponse', "getPublicKeyAlgorithm", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPublicKeyAlgorithm() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AuthenticatorAttestationResponse'].prototype, "AuthenticatorAttestationResponse", "getPublicKeyAlgorithm", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AuthenticatorAttestationResponse', "getTransports", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTransports() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AuthenticatorAttestationResponse'].prototype, "AuthenticatorAttestationResponse", "getTransports", arguments);
  }
}, 'prototype');