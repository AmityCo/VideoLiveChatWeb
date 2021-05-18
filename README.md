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

## ChatBox Folder Structure
In chatbox folder, It contains many sub-components which will combined together to create the main component ( Chatbox.vue ).
- [main](./src/chatbox/main) : contains whole chatbox UI
- [message](./src/chatbox/message) : contains UI of each cell of message
- [reaction](./src/chatbox/reaction): contains UI of bubble reaction when on clicked and reaction list of each message
- [sdkInstance.js](./src/chatbox/sdkInstance.js): Singleton Class for handling EkoSDK

## Detail of Each Folder
#### Main Folder
 1. ChatBoxHeader.vue
 2. ChatBoxMessageList.vue
 3. ChatBoxInput.vue

#### Message Folder
 1. ProfilePicture.vue
 2. ChatMessage.vue
 3. MessageDescription.vue
 4. MessageOptions.vue

#### Main Folder
 1.  MyReactionList.vue
 2.  MessageReaction