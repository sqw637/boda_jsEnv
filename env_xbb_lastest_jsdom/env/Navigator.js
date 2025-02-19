// Navigator对象

bodavm.memory.globalobj['Navigator'] = function Navigator() {
  console.log_copy('Navigator 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Navigator)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Navigator'], "Navigator");
bodavm.toolsFunc.defineProperty('Navigator', "vendorSub", {
  configurable: true,
  enumerable: true,
  get: function vendorSub() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "vendorSub_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "productSub", {
  configurable: true,
  enumerable: true,
  get: function productSub() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "productSub_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "vendor", {
  configurable: true,
  enumerable: true,
  get: function vendor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "vendor_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "maxTouchPoints", {
  configurable: true,
  enumerable: true,
  get: function maxTouchPoints() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "maxTouchPoints_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "scheduling", {
  configurable: true,
  enumerable: true,
  get: function scheduling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "scheduling_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "userActivation", {
  configurable: true,
  enumerable: true,
  get: function userActivation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "userActivation_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "doNotTrack", {
  configurable: true,
  enumerable: true,
  get: function doNotTrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "doNotTrack_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "geolocation", {
  configurable: true,
  enumerable: true,
  get: function geolocation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "geolocation_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "connection", {
  configurable: true,
  enumerable: true,
  get: function connection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "connection_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "plugins", {
  configurable: true,
  enumerable: true,
  get: function plugins() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "plugins_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "mimeTypes", {
  configurable: true,
  enumerable: true,
  get: function mimeTypes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "mimeTypes_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "pdfViewerEnabled", {
  configurable: true,
  enumerable: true,
  get: function pdfViewerEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "pdfViewerEnabled_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "webkitTemporaryStorage", {
  configurable: true,
  enumerable: true,
  get: function webkitTemporaryStorage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "webkitTemporaryStorage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "webkitPersistentStorage", {
  configurable: true,
  enumerable: true,
  get: function webkitPersistentStorage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "webkitPersistentStorage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "hardwareConcurrency", {
  configurable: true,
  enumerable: true,
  get: function hardwareConcurrency() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "hardwareConcurrency_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "cookieEnabled", {
  configurable: true,
  enumerable: true,
  get: function cookieEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "cookieEnabled_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "appCodeName", {
  configurable: true,
  enumerable: true,
  get: function appCodeName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "appCodeName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "appName", {
  configurable: true,
  enumerable: true,
  get: function appName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "appName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "appVersion", {
  configurable: true,
  enumerable: true,
  get: function appVersion() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "appVersion_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "platform", {
  configurable: true,
  enumerable: true,
  get: function platform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "platform_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "product", {
  configurable: true,
  enumerable: true,
  get: function product() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "product_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "userAgent", {
  configurable: true,
  enumerable: true,
  get: function userAgent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "userAgent_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "language", {
  configurable: true,
  enumerable: true,
  get: function language() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "language_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "languages", {
  configurable: true,
  enumerable: true,
  get: function languages() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "languages_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "onLine", {
  configurable: true,
  enumerable: true,
  get: function onLine() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "onLine_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "webdriver", {
  configurable: true,
  enumerable: true,
  get: function webdriver() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "webdriver_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "getGamepads", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getGamepads() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "getGamepads", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "javaEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function javaEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "javaEnabled", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "sendBeacon", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sendBeacon() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "sendBeacon", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "vibrate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vibrate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "vibrate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "bluetooth", {
  configurable: true,
  enumerable: true,
  get: function bluetooth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "bluetooth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "clipboard", {
  configurable: true,
  enumerable: true,
  get: function clipboard() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "clipboard_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "credentials", {
  configurable: true,
  enumerable: true,
  get: function credentials() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "credentials_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "keyboard", {
  configurable: true,
  enumerable: true,
  get: function keyboard() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "keyboard_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "managed", {
  configurable: true,
  enumerable: true,
  get: function managed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "managed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "mediaDevices", {
  configurable: true,
  enumerable: true,
  get: function mediaDevices() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "mediaDevices_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "storage", {
  configurable: true,
  enumerable: true,
  get: function storage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "storage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "serviceWorker", {
  configurable: true,
  enumerable: true,
  get: function serviceWorker() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "serviceWorker_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "virtualKeyboard", {
  configurable: true,
  enumerable: true,
  get: function virtualKeyboard() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "virtualKeyboard_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "wakeLock", {
  configurable: true,
  enumerable: true,
  get: function wakeLock() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "wakeLock_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "deviceMemory", {
  configurable: true,
  enumerable: true,
  get: function deviceMemory() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "deviceMemory_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "ink", {
  configurable: true,
  enumerable: true,
  get: function ink() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "ink_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "hid", {
  configurable: true,
  enumerable: true,
  get: function hid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "hid_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "locks", {
  configurable: true,
  enumerable: true,
  get: function locks() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "locks_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "mediaCapabilities", {
  configurable: true,
  enumerable: true,
  get: function mediaCapabilities() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "mediaCapabilities_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "mediaSession", {
  configurable: true,
  enumerable: true,
  get: function mediaSession() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "mediaSession_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "permissions", {
  configurable: true,
  enumerable: true,
  get: function permissions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "permissions_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "presentation", {
  configurable: true,
  enumerable: true,
  get: function presentation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "presentation_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "serial", {
  configurable: true,
  enumerable: true,
  get: function serial() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "serial_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "usb", {
  configurable: true,
  enumerable: true,
  get: function usb() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "usb_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "gpu", {
  configurable: true,
  enumerable: true,
  get: function gpu() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "gpu_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "windowControlsOverlay", {
  configurable: true,
  enumerable: true,
  get: function windowControlsOverlay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "windowControlsOverlay_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "xr", {
  configurable: true,
  enumerable: true,
  get: function xr() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "xr_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "userAgentData", {
  configurable: true,
  enumerable: true,
  get: function userAgentData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "userAgentData_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "canShare", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function canShare() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "canShare", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "share", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function share() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "share", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "clearAppBadge", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearAppBadge() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "clearAppBadge", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "getBattery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBattery() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "getBattery", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "getUserMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUserMedia() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "getUserMedia", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "requestMIDIAccess", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestMIDIAccess() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "requestMIDIAccess", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "requestMediaKeySystemAccess", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestMediaKeySystemAccess() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "requestMediaKeySystemAccess", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "setAppBadge", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAppBadge() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "setAppBadge", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "webkitGetUserMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitGetUserMedia() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "webkitGetUserMedia", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "getInstalledRelatedApps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInstalledRelatedApps() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "getInstalledRelatedApps", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "registerProtocolHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function registerProtocolHandler() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "registerProtocolHandler", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigator', "unregisterProtocolHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unregisterProtocolHandler() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigator'].prototype, "Navigator", "unregisterProtocolHandler", arguments);
  }
}, 'prototype');

// navigator对象

bodavm.memory.globalobj['navigator'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['navigator'].__proto__ = bodavm.memory.globalobj['Navigator'].prototype;