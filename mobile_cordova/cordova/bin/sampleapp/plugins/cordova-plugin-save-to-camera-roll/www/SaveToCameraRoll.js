var saveToCameraRoll = {};

saveToCameraRoll.isAuthorized = function (success, error) {

  cordova.exec(
    function (result) {
      success(result);
    },
    error,
    'PhotoLibrary',
    'isAuthorized', []
  );

};

// Call when getting errors that begin with 'Permission Denial'
saveToCameraRoll.requestAuthorization = function (success, error, options) {

  options = getRequestAuthenticationOptionsWithDefaults(options);

  cordova.exec(
    success,
    error,
    'PhotoLibrary',
    'requestAuthorization', [options]
  );

};

// url is file url or dataURL
saveToCameraRoll.saveImage = function (url, album, success, error) {

  cordova.exec(
    success,
    error,
    'PhotoLibrary',
    'saveImage', [url, album]
  );

};

// url is file url or dataURL
saveToCameraRoll.saveVideo = function (url, album, success, error) {

  cordova.exec(
    success,
    error,
    'PhotoLibrary',
    'saveVideo', [url, album]
  );

};

module.exports = saveToCameraRoll;

var getRequestAuthenticationOptionsWithDefaults = function (options) {

  if (!options) {
    options = {};
  }

  options = {
    read: options.read || true,
    write: options.write || false,
  };

  return options;

};
