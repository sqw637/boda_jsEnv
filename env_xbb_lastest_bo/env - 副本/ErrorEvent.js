// ErrorEvent对象
ErrorEvent = function ErrorEvent(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof ErrorEvent) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ErrorEvent': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('ErrorEvent 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(ErrorEvent, "ErrorEvent");
ErrorEvent.prototype.__proto__=Event.prototype;
ErrorEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(ErrorEvent.prototype, "message", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ErrorEvent.prototype, "filename", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ErrorEvent.prototype, "lineno", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ErrorEvent.prototype, "colno", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ErrorEvent.prototype, "error", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "bodefault_get", arguments)}, set:undefined},);
