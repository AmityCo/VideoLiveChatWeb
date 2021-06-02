import ASCClient from "@amityco/js-sdk";

export const ClientInstance = (() => {
  // Private Interface
  let client;

  // Public Interface
  return {
    init(apiKey) {
      if (!client) {
        client = new ASCClient({ apiKey });
      }
    },

    registerUserSession: function (userId, onConnect = () => {}) {
      client.registerSession({ userId });

      client.once("connectionStatusChanged", ({ newValue }) => {
        onConnect(newValue);
      });
    },

    isInitial() {
      return !!client;
    },

    getUserID() {
      return client.currentUser.userId;
    },
  };
})();
