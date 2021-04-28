# Video Live Chat Demo App
## Stack Used
- Vue.js [Official Document](https://vuejs.org/v2/guide/)
- Buefy for UI Framework [Official Document](https://buefy.org/documentation)
- Amity Chat SDK [Official Document](https://docs2.amity.co/chat/javascript) 

## Live Demo
- Try me on [CodeSandBox](https://codesandbox.io/s/github/EkoCommunications/VideoLiveChat/tree/code-review)

## How to Run Project Locally
### Install all dependencies in package.json
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Amity Chat SDK Installation Guide
### Setup steps for the SDK 
1. Add the SDK to your repository

Add the SDK to your repository via **npm** or **yarn**
```
npm install eko-sdk —save
```

2. Create new SDK Instance with your API Key

Before using the Chat SDK, you will need to create a new SDK instance with your API key (find it via the Admin Panel under setting).
```
import EkoClient from 'eko-sdk';
const client = new EkoClient({ apiKey: 'YOUR_API_KEY' });
```
File: src/store/index.js

3. Register Session for your device via User ID

In order to use any Chat SDK feature, you must first register the current device with an userId.
```
client.registerSession({ userId });
```
File: src/store/index.js

4. Join the user to channel you want

Before getting the channel message, you need to join user into the channel first. For this demo you can adjust your channelId at variable CHANNEL_NAME in src/config.js
```
const liveChannel = channelRepo.joinChannel({
  channelId: 'CHANNEL_ID',
  type: EkoChannelType.Standard,
});
liveChannel.once("dataUpdated", (data) => {
  ...
});
```
File: src/components/chatbox/ChatBox.vue 

5. Retrieve messages in the channel

To query for a list of all messages in a channel, you have to call function `messageRepo.messagesForChannel`. Then it will return a LiveCollection of all messages in the specified channel that you can observe the LiveCollection in order to update your view whenever you receive new messages.
```
beforeMount() {
  this.liveCollection = messageRepo.messagesForChannel({
    channelId: this.channel,
  });
  this.liveCollection.on("dataUpdated", (data) => {
    // called when any updated on channel e.g. new message, new reaction
  });

  this.liveCollection.on("dataError", (error) => {
    // called when any error found on channel
  });
}
```

And you need to unobserve data changes once you are finished.
```
beforeDestroy() {
  // unobserve data changes once you are finished
  this.liveCollection.removeAllListeners("dataUpdated");
  this.liveCollection.removeAllListeners("dataError");
}
```
File: src/components/chatbox/ChatBox.vue 

### Chat message options
1. Send message
2. Reaction
3. Flag 
