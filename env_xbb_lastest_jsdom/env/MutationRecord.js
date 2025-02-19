// MutationRecord对象

bodavm.memory.globalobj['MutationRecord'] = function MutationRecord() {
  console.log_copy('MutationRecord 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MutationRecord)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MutationRecord'], "MutationRecord");
bodavm.toolsFunc.defineProperty('MutationRecord', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationRecord'].prototype, "MutationRecord", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationRecord', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationRecord'].prototype, "MutationRecord", "target_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationRecord', "addedNodes", {
  configurable: true,
  enumerable: true,
  get: function addedNodes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationRecord'].prototype, "MutationRecord", "addedNodes_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationRecord', "removedNodes", {
  configurable: true,
  enumerable: true,
  get: function removedNodes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationRecord'].prototype, "MutationRecord", "removedNodes_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationRecord', "previousSibling", {
  configurable: true,
  enumerable: true,
  get: function previousSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationRecord'].prototype, "MutationRecord", "previousSibling_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationRecord', "nextSibling", {
  configurable: true,
  enumerable: true,
  get: function nextSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationRecord'].prototype, "MutationRecord", "nextSibling_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationRecord', "attributeName", {
  configurable: true,
  enumerable: true,
  get: function attributeName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationRecord'].prototype, "MutationRecord", "attributeName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationRecord', "attributeNamespace", {
  configurable: true,
  enumerable: true,
  get: function attributeNamespace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationRecord'].prototype, "MutationRecord", "attributeNamespace_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationRecord', "oldValue", {
  configurable: true,
  enumerable: true,
  get: function oldValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationRecord'].prototype, "MutationRecord", "oldValue_get", arguments);
  },
  set: undefined
}, 'prototype');