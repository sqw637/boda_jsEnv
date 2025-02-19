// SVGFEConvolveMatrixElement对象

bodavm.memory.globalobj['SVGFEConvolveMatrixElement'] = function SVGFEConvolveMatrixElement() {
  console.log_copy('SVGFEConvolveMatrixElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEConvolveMatrixElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEConvolveMatrixElement'], "SVGFEConvolveMatrixElement");
bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "SVG_EDGEMODE_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "SVG_EDGEMODE_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "SVG_EDGEMODE_DUPLICATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "SVG_EDGEMODE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "SVG_EDGEMODE_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "SVG_EDGEMODE_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "SVG_EDGEMODE_DUPLICATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "SVG_EDGEMODE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "orderX", {
  configurable: true,
  enumerable: true,
  get: function orderX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "orderX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "orderY", {
  configurable: true,
  enumerable: true,
  get: function orderY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "orderY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "kernelMatrix", {
  configurable: true,
  enumerable: true,
  get: function kernelMatrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "kernelMatrix_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "divisor", {
  configurable: true,
  enumerable: true,
  get: function divisor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "divisor_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "bias", {
  configurable: true,
  enumerable: true,
  get: function bias() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "bias_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "targetX", {
  configurable: true,
  enumerable: true,
  get: function targetX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "targetX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "targetY", {
  configurable: true,
  enumerable: true,
  get: function targetY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "targetY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "edgeMode", {
  configurable: true,
  enumerable: true,
  get: function edgeMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "edgeMode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "kernelUnitLengthX", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "kernelUnitLengthX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "kernelUnitLengthY", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "kernelUnitLengthY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "preserveAlpha", {
  configurable: true,
  enumerable: true,
  get: function preserveAlpha() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "preserveAlpha_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEConvolveMatrixElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEConvolveMatrixElement'].prototype, "SVGFEConvolveMatrixElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');