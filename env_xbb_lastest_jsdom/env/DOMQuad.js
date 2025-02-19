// DOMQuad对象

bodavm.memory.globalobj['DOMQuad'] = function DOMQuad() {
  console.log_copy('DOMQuad 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DOMQuad();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMQuad'], "DOMQuad");
bodavm.toolsFunc.defineProperty('DOMQuad', "fromQuad", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromQuad() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMQuad'].undefined, "DOMQuad", "fromQuad", arguments);
  }
});
bodavm.toolsFunc.defineProperty('DOMQuad', "fromRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMQuad'].undefined, "DOMQuad", "fromRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty('DOMQuad', "p1", {
  configurable: true,
  enumerable: true,
  get: function p1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMQuad'].prototype, "DOMQuad", "p1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMQuad', "p2", {
  configurable: true,
  enumerable: true,
  get: function p2() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMQuad'].prototype, "DOMQuad", "p2_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMQuad', "p3", {
  configurable: true,
  enumerable: true,
  get: function p3() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMQuad'].prototype, "DOMQuad", "p3_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMQuad', "p4", {
  configurable: true,
  enumerable: true,
  get: function p4() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMQuad'].prototype, "DOMQuad", "p4_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMQuad', "getBounds", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBounds() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMQuad'].prototype, "DOMQuad", "getBounds", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMQuad', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMQuad'].prototype, "DOMQuad", "toJSON", arguments);
  }
}, 'prototype');