import EkoClient from "eko-sdk";

export const ClientInstance = (() => {
  // Private Interface
  let _client;
  let _apikey;
  let _userId;

  function isClientExist() {
    if (typeof _client != "undefined") {
      return Object.keys(_client).length > 0;
    }
    return false;
  }

  // Public Interface
  return {
    init(key) {
      if (!isClientExist() && _apikey !== key) {
        _apikey = key;
        _client = EkoClient.create({ apiKey: _apikey });
      }
      return;
    },
    registerUserSession: function (userId) {
      _userId = userId;
      _client.registerSession({ userId: _userId });
    },
    isInitial() {
      return isClientExist();
    },
    getUserID() {
      return _userId;
    },
  };
})();
