// Node对象
bodavm.memory.globalobj['Node'] = function Node() {
  console.log_copy('Node 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Node)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Node'], "Node");
bodavm.memory.globalobj['Node'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Node'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Node', "ELEMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('Node', "ATTRIBUTE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('Node', "TEXT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('Node', "CDATA_SECTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('Node', "ENTITY_REFERENCE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('Node', "ENTITY_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty('Node', "PROCESSING_INSTRUCTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty('Node', "COMMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_TYPE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_FRAGMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodavm.toolsFunc.defineProperty('Node', "NOTATION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_DISCONNECTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_PRECEDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_FOLLOWING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_CONTAINS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_CONTAINED_BY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32
});
bodavm.toolsFunc.defineProperty('Node', "nodeType", {
  configurable: true,
  enumerable: true,
  get: function nodeType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "nodeType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "nodeName", {
  configurable: true,
  enumerable: true,
  get: function nodeName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "nodeName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "baseURI", {
  configurable: true,
  enumerable: true,
  get: function baseURI() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "baseURI_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "isConnected", {
  configurable: true,
  enumerable: true,
  get: function isConnected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "isConnected_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "ownerDocument", {
  configurable: true,
  enumerable: true,
  get: function ownerDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "ownerDocument_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "parentNode", {
  configurable: true,
  enumerable: true,
  get: function parentNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "parentNode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "parentElement", {
  configurable: true,
  enumerable: true,
  get: function parentElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "parentElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "childNodes", {
  configurable: true,
  enumerable: true,
  get: function childNodes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "childNodes_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "firstChild", {
  configurable: true,
  enumerable: true,
  get: function firstChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "firstChild_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "lastChild", {
  configurable: true,
  enumerable: true,
  get: function lastChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "lastChild_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "previousSibling", {
  configurable: true,
  enumerable: true,
  get: function previousSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "previousSibling_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "nextSibling", {
  configurable: true,
  enumerable: true,
  get: function nextSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "nextSibling_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "nodeValue", {
  configurable: true,
  enumerable: true,
  get: function nodeValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "nodeValue_get", arguments);
  },
  set: function nodeValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "nodeValue_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "textContent", {
  configurable: true,
  enumerable: true,
  get: function textContent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "textContent_get", arguments);
  },
  set: function textContent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "textContent_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "ELEMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "ATTRIBUTE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "TEXT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "CDATA_SECTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "ENTITY_REFERENCE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "ENTITY_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "PROCESSING_INSTRUCTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "COMMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_TYPE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_FRAGMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "NOTATION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_DISCONNECTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_PRECEDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_FOLLOWING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_CONTAINS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_CONTAINED_BY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "appendChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "appendChild", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "cloneNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cloneNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "cloneNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "compareDocumentPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compareDocumentPosition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "compareDocumentPosition", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "contains", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function contains() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "contains", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "getRootNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRootNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "getRootNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "hasChildNodes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasChildNodes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "hasChildNodes", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "insertBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertBefore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "insertBefore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "isDefaultNamespace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isDefaultNamespace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "isDefaultNamespace", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "isEqualNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isEqualNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "isEqualNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "isSameNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSameNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "isSameNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "lookupNamespaceURI", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lookupNamespaceURI() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "lookupNamespaceURI", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "lookupPrefix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lookupPrefix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "lookupPrefix", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "normalize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function normalize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "normalize", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "removeChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "removeChild", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Node', "replaceChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Node'].prototype, "Node", "replaceChild", arguments);
  }
}, 'prototype');