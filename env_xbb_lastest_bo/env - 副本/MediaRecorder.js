// MediaRecorder对象

MediaRecorder = function MediaRecorder(){let arg=arguments[0];

if (arg!='bobo' && !(this instanceof MediaRecorder) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaRecorder': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);

if (arg =='bobo'){console.log_copy('MediaRecorder 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}


bodavm.toolsFunc.safeProto(MediaRecorder, "MediaRecorder");

MediaRecorder.prototype.__proto__=EventTarget.prototype;

MediaRecorder.__proto__=EventTarget;

bodavm.toolsFunc.defineProperty(MediaRecorder, "isTypeSupported", {configurable:true, enumerable:true, writable:true, value:function isTypeSupported (){return bodavm.toolsFunc.dispatch(this, MediaRecorder, "MediaRecorder", "isTypeSupported", arguments)}});

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "stream", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "mimeType", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "state", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "onstart", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "onstop", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "ondataavailable", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "onpause", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "onresume", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "onerror", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "videoBitsPerSecond", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "audioBitsPerSecond", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "audioBitrateMode", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "pause", {configurable:true, enumerable:true, writable:true, value:function pause (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "pause", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "requestData", {configurable:true, enumerable:true, writable:true, value:function requestData (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "requestData", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "resume", {configurable:true, enumerable:true, writable:true, value:function resume (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "resume", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "start", {configurable:true, enumerable:true, writable:true, value:function start (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "start", arguments)}},);

bodavm.toolsFunc.defineProperty(MediaRecorder.prototype, "stop", {configurable:true, enumerable:true, writable:true, value:function stop (){return bodavm.toolsFunc.dispatch(this, MediaRecorder.prototype, "MediaRecorder", "stop", arguments)}},);

