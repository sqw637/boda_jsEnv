// SVGRectElement对象

bodavm.memory.globalobj['SVGRectElement'] = function SVGRectElement() {
  console.log_copy('SVGRectElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGRectElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGRectElement'], "SVGRectElement");
bodavm.memory.globalobj['SVGRectElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGeometryElement'].prototype;
bodavm.memory.globalobj['SVGRectElement'].__proto__ = bodavm.memory.globalobj['SVGGeometryElement'];
bodavm.toolsFunc.defineProperty('SVGRectElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRectElement'].prototype, "SVGRectElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRectElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRectElement'].prototype, "SVGRectElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRectElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRectElement'].prototype, "SVGRectElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRectElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRectElement'].prototype, "SVGRectElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRectElement', "rx", {
  configurable: true,
  enumerable: true,
  get: function rx() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRectElement'].prototype, "SVGRectElement", "rx_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRectElement', "ry", {
  configurable: true,
  enumerable: true,
  get: function ry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRectElement'].prototype, "SVGRectElement", "ry_get", arguments);
  },
  set: undefined
}, 'prototype');