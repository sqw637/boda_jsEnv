// SVGAnimatedInteger对象
SVGAnimatedInteger = function SVGAnimatedInteger(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SVGAnimatedInteger) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SVGAnimatedInteger 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SVGAnimatedInteger, "SVGAnimatedInteger");
bodavm.toolsFunc.defineProperty(SVGAnimatedInteger.prototype, "baseVal", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGAnimatedInteger.prototype, "SVGAnimatedInteger", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGAnimatedInteger.prototype, "SVGAnimatedInteger", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(SVGAnimatedInteger.prototype, "animVal", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGAnimatedInteger.prototype, "SVGAnimatedInteger", "bodefault_get", arguments)}, set:undefined},);
