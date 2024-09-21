<template>
  <v-btn
    icon
    class="chat-button"
    @click="toggleChat"
  >
    <v-icon icon="mdi-checkbox"></v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

const isChatOpen = ref(false);
const emit = defineEmits(['toggle-chat']);

function toggleChat() {
  isChatOpen.value = !isChatOpen.value;
  // Emit an event to notify the parent component
  emit('toggle-chat', isChatOpen.value);
}
</script>

<style scoped>
.chat-button {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: #0e5faa;
  color: white;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>