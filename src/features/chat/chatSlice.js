import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    messageText: '',
    username: localStorage.getItem('username') === null ? '' : localStorage.getItem('username')
  },
  reducers: {

    updateMessageText: (state, event) => {
      state.messageText = event.payload;
    },

    updateMessages: (state, arr) => {
      if( document.hidden) {
        arr.payload.forEach((x) => (new Notification('Chat', {body: x.from + ': ' + x.message})));
      }
      console.log(arr.payload[0].message);
      state.messages = state.messages.concat(arr.payload.sort((a, b) => { return new Date(a.time) - new Date(b.time)}))
    },

    submitMessage: state => {
      state.messageText = '';
    },

    updateUsername: (state, val) => {
      state.username = val.payload;
      localStorage.setItem('username', val.payload);
    }
  },
});

export const { updateMessageText, updateMessages, submitMessage, updateUsername } = chatSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMessages = state => state.chat.messages;
export const selectMessagesText = state => state.chat.messageText;
export const selectUsername = state => state.chat.username;


export default chatSlice.reducer;
