// ImageData对象
ImageData = function ImageData(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof ImageData) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ImageData': 2 arguments required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('ImageData 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(ImageData, "ImageData");
bodavm.toolsFunc.defineProperty(ImageData.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ImageData.prototype, "ImageData", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ImageData.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ImageData.prototype, "ImageData", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ImageData.prototype, "colorSpace", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ImageData.prototype, "ImageData", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ImageData.prototype, "data", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ImageData.prototype, "ImageData", "bodefault_get", arguments)}, set:undefined},);
