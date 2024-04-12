<template>
  <div class="chat-bot">
    <div v-if="isHintDisplay" class="chat-bot-hint">
      <button @click="isHintDisplay = !isHintDisplay" class="close-button">
        <img src="/images/icons/cross-icon.svg" alt="" />
      </button>
      <div class="hint-text">Привіт! Тобі допомогти?</div>
    </div>
    <a href="#" class="chat-bot-link">
      <img src="/images/icons/viber-bot-icon.svg" alt="" />
    </a>
  </div>
</template>

<script setup lang="ts">
let isHintDisplay = ref(true);
</script>
