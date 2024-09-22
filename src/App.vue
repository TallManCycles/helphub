<script setup lang="ts">
import ChatButton from './components/ChatButton.vue'
import ChatWindow from './components/ChatWindow.vue'
import { ref } from 'vue';

const chatOpen = ref(false);

function toggleChat(open: boolean) {
  console.log('open', open);
  chatOpen.value = open;
}
</script>

<template>
  <ChatButton :v-model="chatOpen" @toggle-chat="toggleChat" />
  <ChatWindow :isChatOpen="chatOpen" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>