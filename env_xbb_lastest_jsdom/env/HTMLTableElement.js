// HTMLTableElement对象

bodavm.memory.globalobj['HTMLTableElement'] = function HTMLTableElement() {
  console.log_copy('HTMLTableElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLTableElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTableElement'], "HTMLTableElement");
bodavm.memory.globalobj['HTMLTableElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTableElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTableElement', "caption", {
  configurable: true,
  enumerable: true,
  get: function caption() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "caption_get", arguments);
  },
  set: function caption() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "caption_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "tHead", {
  configurable: true,
  enumerable: true,
  get: function tHead() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "tHead_get", arguments);
  },
  set: function tHead() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "tHead_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "tFoot", {
  configurable: true,
  enumerable: true,
  get: function tFoot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "tFoot_get", arguments);
  },
  set: function tFoot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "tFoot_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "tBodies", {
  configurable: true,
  enumerable: true,
  get: function tBodies() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "tBodies_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "rows", {
  configurable: true,
  enumerable: true,
  get: function rows() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "rows_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "border", {
  configurable: true,
  enumerable: true,
  get: function border() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "border_get", arguments);
  },
  set: function border() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "border_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "frame", {
  configurable: true,
  enumerable: true,
  get: function frame() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "frame_get", arguments);
  },
  set: function frame() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "frame_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "rules", {
  configurable: true,
  enumerable: true,
  get: function rules() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "rules_get", arguments);
  },
  set: function rules() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "rules_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "summary", {
  configurable: true,
  enumerable: true,
  get: function summary() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "summary_get", arguments);
  },
  set: function summary() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "summary_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "bgColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "cellPadding", {
  configurable: true,
  enumerable: true,
  get: function cellPadding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "cellPadding_get", arguments);
  },
  set: function cellPadding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "cellPadding_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "cellSpacing", {
  configurable: true,
  enumerable: true,
  get: function cellSpacing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "cellSpacing_get", arguments);
  },
  set: function cellSpacing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "cellSpacing_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "createCaption", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createCaption() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "createCaption", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "createTBody", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTBody() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "createTBody", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "createTFoot", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTFoot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "createTFoot", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "createTHead", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTHead() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "createTHead", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "deleteCaption", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteCaption() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "deleteCaption", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "deleteRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "deleteRow", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "deleteTFoot", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteTFoot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "deleteTFoot", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "deleteTHead", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteTHead() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "deleteTHead", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableElement', "insertRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableElement'].prototype, "HTMLTableElement", "insertRow", arguments);
  }
}, 'prototype');