# Video Live Chat Demo App
## Stack Used
- Vue.js [Official Document](https://vuejs.org/v2/guide/)
- Buefy for UI Framework [Official Document](https://buefy.org/documentation)
- Amity Chat SDK [Official Document](https://docs2.amity.co/chat/javascript) 

## Live Demo
- Try me on [CodeSandBox](https://codesandbox.io/s/github/AmityCo/VideoLiveChatWeb/tree/code-review)

## How to Run Project Locally
### Install all dependencies in package.json
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
Markdown All in One
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

Before using the Chat SDK, you will need to create a new SDK instance with your API key (find it via the Admin Panel under setting). Navigate to [src/store/index.js](./src/store/index.js) and put in your API key
```
const apiKey = "";  // Place your API Key here
const client = EkoClient.create({ apiKey });
```


3. Register Session for your device via User ID

Register the current device with a userId by passing `userId` parameter into `login` action in [src/store/index.js](./src/store/index.js).
```
client.registerSession({ userId });
```

4. Implement `ChatBox` component

Chatbox UI reisdes within [src/components/chatbox/ChatBox.vue](./src/components/chatbox/ChatBox.vue). To use the component pass in `channelId` as its property as shown in example file [src/views/Home.vue](./src/components/chatbox/ChatBox.vue)

```
<div class="column is-4">
  <chat-box :channelId="channel" />
</div>
```

### Functionalities detail

1. How to query list of messages

To query for a list of all messages in a channel, you have to call function `messageRepo.messagesForChannel`. Then it will return a LiveCollection of all messages in the specified channel that you can observe the LiveCollection in order to update your view whenever you receive new messages.
```
import { MessageRepository } from "eko-sdk";
const messageRepo = new MessageRepository();
```
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
File: [src/components/chatbox/ChatBox.vue](./src/components/chatbox/ChatBox.vue) 
2. How to send message to the channel

To create a new messege in channel, you can basically initiate it with the following scripts
```
import { MessageRepository } from "eko-sdk";
const messageRepo = new MessageRepository();
```
```
const messageLiveObject = messageRepo.createTextMessage({
  channelId: "CHANNEL_ID",
  text: "String you want to send",
});
```
File: [src/components/chatbox/ChatInput.vue](./src/components/chatbox/ChatInput.vue) 

3. How to add reaction on a message

In order to make a reaction on message, you need to import MessageRepository for getting message's model since ReactorRepository require it to done the action. 
```
import { MessageRepository, ReactorRepository } from "eko-sdk";
const messageRepo = new MessageRepository();
```
After get the model, pass it in to the react and call for addReaction() and pass along the identifier for your reaction.
```
const liveObject = messageRepo.messageForId("MESSAGE_ID");
const messageModel = liveObject.model;
const reactorRepo = new ReactorRepository(messageModel);
reactorRepo.addReaction("REACTION_NAME");
```
File: [src/components/reaction/MyReactionList.vue](./src/components/reaction/MyReactionList.vue) 

4. How to flag / unflag a message

Before flag or unflag the messages, you need to import MessageFlagRepository for using its actions.
```
import { MessageFlagRepository } from 'eko-sdk';
const flagRepo = new MessageFlagRepository("MESSAGE_ID");
```
To flag a message, call the following method:
```
flagRepo.flag()
```

To unflag a message, call the following method:
```
flagRepo.unflag()
```
File: [src/components/message/MessageOptions.vue](./src/components/message/MessageOptions.vue) 
