// SVGAngle对象

bodavm.memory.globalobj['SVGAngle'] = function SVGAngle() {
  console.log_copy('SVGAngle 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAngle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAngle'], "SVGAngle");
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_UNSPECIFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_DEG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_RAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_GRAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGAngle', "unitType", {
  configurable: true,
  enumerable: true,
  get: function unitType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAngle'].prototype, "SVGAngle", "unitType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAngle'].prototype, "SVGAngle", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAngle'].prototype, "SVGAngle", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "valueInSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  get: function valueInSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAngle'].prototype, "SVGAngle", "valueInSpecifiedUnits_get", arguments);
  },
  set: function valueInSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAngle'].prototype, "SVGAngle", "valueInSpecifiedUnits_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "valueAsString", {
  configurable: true,
  enumerable: true,
  get: function valueAsString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAngle'].prototype, "SVGAngle", "valueAsString_get", arguments);
  },
  set: function valueAsString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAngle'].prototype, "SVGAngle", "valueAsString_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_UNSPECIFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_DEG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_RAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "SVG_ANGLETYPE_GRAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "convertToSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function convertToSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAngle'].prototype, "SVGAngle", "convertToSpecifiedUnits", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAngle', "newValueSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function newValueSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAngle'].prototype, "SVGAngle", "newValueSpecifiedUnits", arguments);
  }
}, 'prototype');