// HTMLEmbedElement对象

bodavm.memory.globalobj['HTMLEmbedElement'] = function HTMLEmbedElement() {
  console.log_copy('HTMLEmbedElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLEmbedElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLEmbedElement'], "HTMLEmbedElement");
bodavm.memory.globalobj['HTMLEmbedElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLEmbedElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLEmbedElement', "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "src_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLEmbedElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLEmbedElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLEmbedElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLEmbedElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLEmbedElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLEmbedElement', "getSVGDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSVGDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLEmbedElement'].prototype, "HTMLEmbedElement", "getSVGDocument", arguments);
  }
}, 'prototype');