// DeviceOrientationEvent对象
DeviceOrientationEvent = function DeviceOrientationEvent(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof DeviceOrientationEvent) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceOrientationEvent': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('DeviceOrientationEvent 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(DeviceOrientationEvent, "DeviceOrientationEvent");
DeviceOrientationEvent.prototype.__proto__=Event.prototype;
DeviceOrientationEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "alpha", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "beta", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "gamma", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "absolute", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "bodefault_get", arguments)}, set:undefined},);
