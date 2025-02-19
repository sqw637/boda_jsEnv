// SubtleCrypto对象

bodavm.memory.globalobj['SubtleCrypto'] = function SubtleCrypto() {
  console.log_copy('SubtleCrypto 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SubtleCrypto)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SubtleCrypto'], "SubtleCrypto");
bodavm.toolsFunc.defineProperty('SubtleCrypto', "decrypt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decrypt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "decrypt", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "deriveBits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deriveBits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "deriveBits", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "deriveKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deriveKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "deriveKey", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "digest", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function digest() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "digest", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "encrypt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encrypt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "encrypt", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "exportKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exportKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "exportKey", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "generateKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function generateKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "generateKey", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "importKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function importKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "importKey", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "sign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "sign", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "unwrapKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unwrapKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "unwrapKey", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "verify", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function verify() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "verify", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SubtleCrypto', "wrapKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function wrapKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubtleCrypto'].prototype, "SubtleCrypto", "wrapKey", arguments);
  }
}, 'prototype');