// HTMLLabelElement对象
HTMLLabelElement = function HTMLLabelElement(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof HTMLLabelElement) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('HTMLLabelElement 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(HTMLLabelElement, "HTMLLabelElement");
HTMLLabelElement.prototype.__proto__=HTMLElement.prototype;
HTMLLabelElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLLabelElement.prototype, "form", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLLabelElement.prototype, "HTMLLabelElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(HTMLLabelElement.prototype, "htmlFor", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLLabelElement.prototype, "HTMLLabelElement", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLLabelElement.prototype, "HTMLLabelElement", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(HTMLLabelElement.prototype, "control", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLLabelElement.prototype, "HTMLLabelElement", "bodefault_get", arguments)}, set:undefined},);
