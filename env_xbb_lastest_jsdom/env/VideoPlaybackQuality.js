// VideoPlaybackQuality对象

bodavm.memory.globalobj['VideoPlaybackQuality'] = function VideoPlaybackQuality() {
  console.log_copy('VideoPlaybackQuality 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof VideoPlaybackQuality)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['VideoPlaybackQuality'], "VideoPlaybackQuality");
bodavm.toolsFunc.defineProperty('VideoPlaybackQuality', "creationTime", {
  configurable: true,
  enumerable: true,
  get: function creationTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoPlaybackQuality'].prototype, "VideoPlaybackQuality", "creationTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoPlaybackQuality', "totalVideoFrames", {
  configurable: true,
  enumerable: true,
  get: function totalVideoFrames() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoPlaybackQuality'].prototype, "VideoPlaybackQuality", "totalVideoFrames_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoPlaybackQuality', "droppedVideoFrames", {
  configurable: true,
  enumerable: true,
  get: function droppedVideoFrames() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoPlaybackQuality'].prototype, "VideoPlaybackQuality", "droppedVideoFrames_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoPlaybackQuality', "corruptedVideoFrames", {
  configurable: true,
  enumerable: true,
  get: function corruptedVideoFrames() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoPlaybackQuality'].prototype, "VideoPlaybackQuality", "corruptedVideoFrames_get", arguments);
  },
  set: undefined
}, 'prototype');