// USBIsochronousOutTransferPacket对象

bodavm.memory.globalobj['USBIsochronousOutTransferPacket'] = function USBIsochronousOutTransferPacket() {
  console.log_copy('USBIsochronousOutTransferPacket 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBIsochronousOutTransferPacket)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBIsochronousOutTransferPacket': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBIsochronousOutTransferPacket'], "USBIsochronousOutTransferPacket");
bodavm.toolsFunc.defineProperty('USBIsochronousOutTransferPacket', "bytesWritten", {
  configurable: true,
  enumerable: true,
  get: function bytesWritten() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBIsochronousOutTransferPacket'].prototype, "USBIsochronousOutTransferPacket", "bytesWritten_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBIsochronousOutTransferPacket', "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBIsochronousOutTransferPacket'].prototype, "USBIsochronousOutTransferPacket", "status_get", arguments);
  },
  set: undefined
}, 'prototype');