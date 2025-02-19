// HTMLInputElement对象

bodavm.memory.globalobj['HTMLInputElement'] = function HTMLInputElement() {
  console.log_copy('HTMLInputElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLInputElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLInputElement'], "HTMLInputElement");
bodavm.memory.globalobj['HTMLInputElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLInputElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLInputElement', "accept", {
  configurable: true,
  enumerable: true,
  get: function accept() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "accept_get", arguments);
  },
  set: function accept() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "accept_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "alt", {
  configurable: true,
  enumerable: true,
  get: function alt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "alt_get", arguments);
  },
  set: function alt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "alt_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "autocomplete", {
  configurable: true,
  enumerable: true,
  get: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "autocomplete_get", arguments);
  },
  set: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "autocomplete_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "defaultChecked", {
  configurable: true,
  enumerable: true,
  get: function defaultChecked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "defaultChecked_get", arguments);
  },
  set: function defaultChecked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "defaultChecked_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "checked", {
  configurable: true,
  enumerable: true,
  get: function checked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "checked_get", arguments);
  },
  set: function checked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "checked_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "dirName", {
  configurable: true,
  enumerable: true,
  get: function dirName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "dirName_get", arguments);
  },
  set: function dirName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "dirName_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "disabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "files", {
  configurable: true,
  enumerable: true,
  get: function files() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "files_get", arguments);
  },
  set: function files() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "files_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "formAction", {
  configurable: true,
  enumerable: true,
  get: function formAction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formAction_get", arguments);
  },
  set: function formAction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formAction_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "formEnctype", {
  configurable: true,
  enumerable: true,
  get: function formEnctype() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formEnctype_get", arguments);
  },
  set: function formEnctype() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formEnctype_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "formMethod", {
  configurable: true,
  enumerable: true,
  get: function formMethod() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formMethod_get", arguments);
  },
  set: function formMethod() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formMethod_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "formNoValidate", {
  configurable: true,
  enumerable: true,
  get: function formNoValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formNoValidate_get", arguments);
  },
  set: function formNoValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formNoValidate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "formTarget", {
  configurable: true,
  enumerable: true,
  get: function formTarget() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formTarget_get", arguments);
  },
  set: function formTarget() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "formTarget_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "indeterminate", {
  configurable: true,
  enumerable: true,
  get: function indeterminate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "indeterminate_get", arguments);
  },
  set: function indeterminate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "indeterminate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "list", {
  configurable: true,
  enumerable: true,
  get: function list() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "list_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "max", {
  configurable: true,
  enumerable: true,
  get: function max() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "max_get", arguments);
  },
  set: function max() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "max_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "maxLength", {
  configurable: true,
  enumerable: true,
  get: function maxLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "maxLength_get", arguments);
  },
  set: function maxLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "maxLength_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "min", {
  configurable: true,
  enumerable: true,
  get: function min() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "min_get", arguments);
  },
  set: function min() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "min_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "minLength", {
  configurable: true,
  enumerable: true,
  get: function minLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "minLength_get", arguments);
  },
  set: function minLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "minLength_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "multiple", {
  configurable: true,
  enumerable: true,
  get: function multiple() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "multiple_get", arguments);
  },
  set: function multiple() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "multiple_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "pattern", {
  configurable: true,
  enumerable: true,
  get: function pattern() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "pattern_get", arguments);
  },
  set: function pattern() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "pattern_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "placeholder", {
  configurable: true,
  enumerable: true,
  get: function placeholder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "placeholder_get", arguments);
  },
  set: function placeholder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "placeholder_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "readOnly", {
  configurable: true,
  enumerable: true,
  get: function readOnly() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "readOnly_get", arguments);
  },
  set: function readOnly() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "readOnly_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "required", {
  configurable: true,
  enumerable: true,
  get: function required() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "required_get", arguments);
  },
  set: function required() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "required_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "size_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "src_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "step", {
  configurable: true,
  enumerable: true,
  get: function step() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "step_get", arguments);
  },
  set: function step() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "step_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "defaultValue", {
  configurable: true,
  enumerable: true,
  get: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "defaultValue_get", arguments);
  },
  set: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "defaultValue_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "valueAsDate", {
  configurable: true,
  enumerable: true,
  get: function valueAsDate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "valueAsDate_get", arguments);
  },
  set: function valueAsDate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "valueAsDate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "valueAsNumber", {
  configurable: true,
  enumerable: true,
  get: function valueAsNumber() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "valueAsNumber_get", arguments);
  },
  set: function valueAsNumber() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "valueAsNumber_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "willValidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "validity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "validationMessage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "labels_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "selectionStart", {
  configurable: true,
  enumerable: true,
  get: function selectionStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "selectionStart_get", arguments);
  },
  set: function selectionStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "selectionStart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "selectionEnd", {
  configurable: true,
  enumerable: true,
  get: function selectionEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "selectionEnd_get", arguments);
  },
  set: function selectionEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "selectionEnd_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "selectionDirection", {
  configurable: true,
  enumerable: true,
  get: function selectionDirection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "selectionDirection_get", arguments);
  },
  set: function selectionDirection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "selectionDirection_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "useMap", {
  configurable: true,
  enumerable: true,
  get: function useMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "useMap_get", arguments);
  },
  set: function useMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "useMap_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "webkitdirectory", {
  configurable: true,
  enumerable: true,
  get: function webkitdirectory() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "webkitdirectory_get", arguments);
  },
  set: function webkitdirectory() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "webkitdirectory_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "incremental", {
  configurable: true,
  enumerable: true,
  get: function incremental() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "incremental_get", arguments);
  },
  set: function incremental() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "incremental_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "checkValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "reportValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "select", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function select() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "select", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "setCustomValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "setRangeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRangeText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "setRangeText", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "setSelectionRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSelectionRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "setSelectionRange", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "showPicker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showPicker() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "showPicker", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "stepDown", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stepDown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "stepDown", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "stepUp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stepUp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "stepUp", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLInputElement', "webkitEntries", {
  configurable: true,
  enumerable: true,
  get: function webkitEntries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLInputElement'].prototype, "HTMLInputElement", "webkitEntries_get", arguments);
  },
  set: undefined
}, 'prototype');