// HTMLLIElement对象

bodavm.memory.globalobj['HTMLLIElement'] = function HTMLLIElement() {
  console.log_copy('HTMLLIElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLLIElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLLIElement'], "HTMLLIElement");
bodavm.memory.globalobj['HTMLLIElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLLIElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLLIElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLIElement'].prototype, "HTMLLIElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLIElement'].prototype, "HTMLLIElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLIElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLIElement'].prototype, "HTMLLIElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLIElement'].prototype, "HTMLLIElement", "type_set", arguments);
  }
}, 'prototype');