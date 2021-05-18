# Video Live Chat Demo App
## Stack Used
- Vue.js [Official Document](https://vuejs.org/v2/guide/)
- Buefy for UI Framework [Official Document](https://buefy.org/documentation)
- Amity Chat SDK [Official Document](https://docs2.amity.co/chat/javascript) 

## Live Demo
- Try me on [CodeSandBox](https://codesandbox.io/s/github/AmityCo/VideoLiveChatWeb/tree/code-review)

## How to Use Chatbox Component
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

- [main](./src/chatbox/main) : contains whole chatbox UI
- [message](./src/chatbox/message) : contains UI of each cell of message
- [reaction](./src/chatbox/reaction): contains UI of bubble reaction when on clicked and reaction list of each message
- [sdkInstance.js](./src/chatbox/sdkInstance.js): Singleton Class for handling EkoSDK

## Detail of Each Folder
#### Main Folder
<img width="512" alt="structure" src="https://user-images.githubusercontent.com/80325355/118606352-7f86d700-b7e1-11eb-99aa-0fccc2093e56.png">

 1. ChatBoxHeader.vue
 2. ChatBoxMessageList.vue ( Get All Messages in Channel )
 3. ChatBoxInput.vue

#### Message Folder
<img width="512" alt="msg-structure" src="https://user-images.githubusercontent.com/80325355/118606650-e1474100-b7e1-11eb-8c52-6f70ffa09a9b.png">

 1. ProfilePicture.vue
 2. ChatMessage.vue
 3. MessageDescription.vue
 4. MessageOptions.vue ( Flag / UnFlag Message )

#### Reaction Folder
<img width="512" alt="react-structure" src="https://user-images.githubusercontent.com/80325355/118606716-eefcc680-b7e1-11eb-97de-5aa1590c9ddf.png">

 1.  MyReactionList.vue ( Create Reaction on Message )
 2.  MessageReaction
