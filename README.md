# Video Live Chat Demo App
## Table of Contents
- [Stack Used](#stack-used)
- [Live Demo](#live-demo)
- [Installing Amity Chat SDK](#installing-amity-chat-sdk)
- [Using Chatbox Component](#using-chatbox-component)
- [ChatBox Folder Structure](#chatbox-folder-structure)
- [Detail of Each Folder](#detail-of-each-folder)
- [Customization](#customization)

## Stack Used
| Name | Official Document |
| :---  | :---  |
| Vue.js | [link](https://vuejs.org/v2/guide/)|
| Buefy - UI Framework | [link](https://buefy.org/documentation) |
| Amity Chat SDK | [link](https://docs2.amity.co/chat/javascript)  |

## Live Demo
- Try me on [CodeSandBox](https://codesandbox.io/s/github/AmityCo/VideoLiveChatWeb/tree/code-review)

## Installing Amity Chat SDK
Add the SDK to your project via **npm** or **yarn**

Using npm:
```
$ npm install eko-sdk —save
```
Using yarn:
```
$ yarn add eko-sdk
```

## Using Chatbox Component
1. Import & Declare ChatBox.vue to your component that going to use it.
2. Implement it as a tag in your <template> … </template>. It can declare as either <ChatBox /> or  <chat-box />
3. Pass data to the the component via following props 
  - api_key
  - userId
  - channelId

Example of implementation in template and script tag
```
<template>
  ...
  <chat-box :api_key="api_key" :userId="user" :channelId="channel" />
  ...
</template>
```

```
<script>
import ChatBox from "@/chatbox/ChatBox.vue";

export default {
  components: {
    ChatBox,
    ...
  },
  ...
};
</script>
```

## ChatBox Folder Structure
In chatbox folder, It contains many sub-components which will combined together to create the main component ( Chatbox.vue ).

<img width="512" alt="overall-structure" src="https://user-images.githubusercontent.com/80325355/118606593-d1c7f800-b7e1-11eb-99dd-d02a2f258575.png">

| # | Folde Name | Description |
| --- | :---  | :---  |
| 1 | [main](./src/chatbox/main) | Contains whole chatbox UI |
| 2 | [message](./src/chatbox/message) | Contains UI of each cell of message |
| 3 | [reaction](./src/chatbox/reaction) | Contains UI of bubble reaction when on clicked and reaction list of each message |
| - | [config.js](./src/chatbox/config.js) | Contains configuration file for UI customization e.g. chatbox background color |
| - | [sdkInstance.js](./src/chatbox/sdkInstance.js) | Contains singleton class for handling EkoSDK |

## Detail of Each Folder
#### Main Folder
<img width="512" alt="structure" src="https://user-images.githubusercontent.com/80325355/118606352-7f86d700-b7e1-11eb-99aa-0fccc2093e56.png">

| # | File Name | Responsibility |
| --- | :---  | :---  |
| 1 | ChatBoxHeader.vue | - |
| 2 | ChatBoxMessageList.vue | Get All Messages in Channel |
| 3 | ChatBoxInput.vue | Send Messages to the Channel |


**Get All Messages in Channel**

> To query all messages in the channel, you need to call function `messageRepo.messagesForChannel`. Then it will return a LiveCollection of all messages in the specified channel that you can observe the LiveCollection. So you can update your screen whenever you receive new messages.
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
> And you need to unobserve data changes once you are finished.
```
beforeDestroy() {
  // unobserve data changes once you are finished
  this.liveCollection.removeAllListeners("dataUpdated");
  this.liveCollection.removeAllListeners("dataError");
}
```

**Send Messages to the Channel**

> To send a new messege in channel, you can basically initiate it with the following scripts
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
  
#### Message Folder
<img width="512" alt="msg-structure" src="https://user-images.githubusercontent.com/80325355/118606650-e1474100-b7e1-11eb-8c52-6f70ffa09a9b.png">

| # | File Name | Responsibility |
| --- | :---  | :---  |
| 1 | ProfilePicture.vue | - |
| 2 | ChatMessage.vue | - |
| 3 | MessageDescription.vue | - |
| 3 | MessageOptions.vue | Flag / UnFlag Message |

**Flag / UnFlag Message**

> In order to flag or unflag the messages, you need to import MessageFlagRepository for using its actions.
```
import { MessageFlagRepository } from 'eko-sdk';
const flagRepo = new MessageFlagRepository("MESSAGE_ID");
```
> To flag a message, call the following method:
```
flagRepo.flag()
```

> To unflag a message, call the following method:
```
flagRepo.unflag()
```

#### Reaction Folder
<img width="512" alt="react-structure" src="https://user-images.githubusercontent.com/80325355/118606716-eefcc680-b7e1-11eb-97de-5aa1590c9ddf.png">


| # | File Name | Responsibility |
| --- | :---  | :---  |
| 1 | MyReactionList.vue | Create Reaction on Message |
| 2 | MessageReaction.vue | - |

**Create Reaction on Message**
 
> In order to make a reaction on message, you need to import MessageRepository for getting message's model since ReactorRepository require it to done the action. 
```
import { MessageRepository, ReactorRepository } from "eko-sdk";
const messageRepo = new MessageRepository();
```
> After get the model, pass it in to the react and call for addReaction() and pass along the identifier for your reaction.
```
const liveObject = messageRepo.messageForId("MESSAGE_ID");
const messageModel = liveObject.model;
const reactorRepo = new ReactorRepository(messageModel);
reactorRepo.addReaction("REACTION_NAME");
```

## Customization

ChatBox component allow you to do some UI customization on following list.
- font_color
- chat background color
- chat input background color 

This can be done by setting variables inside ([config.js](./src/chatbox/config.js)) file with CSS color values as below table.

```
export const CHATBOX_STYLE = {
  font_color: "#363636", // Black
  chat_color: "#57de8573", // Green
  composer_color: "#ffdd57" // Yellow,
};
```

| Format | Syntax | Example |
| :--- | :---  | :---  |
| Hex Code | #RRGGBB | "#FF0000" |
| Short Hex Code | #RGB | "#6A7" |
| RGB % | rgb(rrr%,ggg%,bbb%) | "rgb(50%,50%,50%)" |
| RGB Absolute | rgb(rrr,ggg,bbb) | "rgb(0,0,255)" |
| keyword | aqua, black, etc. | "teal" |

Then, you will get the customization chatbox following with your configuration!!  
<img width="512" alt="Screen Shot 2564-05-20 at 10 21 58" src="https://user-images.githubusercontent.com/80325355/118914517-94847700-b955-11eb-80e4-20451edf368a.png">



