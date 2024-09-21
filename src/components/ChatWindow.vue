<template>
  <div v-if="chatOpen" class="chat-window">
    <v-card>
      <v-card-title class="headline">How can we help?</v-card-title>
      <v-card-text class="chat-content">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
          <span>{{ message.text }}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-text-field
          v-model="newMessage"
          label="Type a message"
          @keyup.enter="sendMessage"
          dense
          outlined
          hide-details
        ></v-text-field>
        <div>
            <v-btn color="primary" @click="sendMessage">Send</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps<{ isChatOpen: boolean }>();
const emit = defineEmits(['update:isChatOpen']);

const chatOpen = ref(props.isChatOpen);
const messages = ref([
  { text: 'Hello! How can I help you today?', sender: 'bot' },
  { text: 'I have a question about my order.', sender: 'user' },
  { text: 'Sure, what is your order number?', sender: 'bot' },
]);
const newMessage = ref('');

watch(() => props.isChatOpen, (newVal) => {
  chatOpen.value = newVal;
});

function sendMessage() {
  if (newMessage.value.trim() !== '') {
    messages.value.push({ text: newMessage.value, sender: 'user' });
    newMessage.value = '';
    // Simulate a bot response
    setTimeout(() => {
      messages.value.push({ text: 'Thank you for your message. We will get back to you shortly.', sender: 'bot' });
    }, 1000);
  }
}
</script>

<style scoped>
.chat-window {
  position: fixed;
  bottom: 80px; 
  right: 16px;
  width: 300px;
  max-height: 400px; 
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  scrollbar-width: none; 
  -ms-overflow-style: none;
}

.chat-content {
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none; 
}

.message {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
}

.message.bot {
  background-color: #ffffff;
  text-align: left;
}

.message.user {
  background-color: gray-100;
  color: rgb(0, 0, 0);
  text-align: right;
}
</style>