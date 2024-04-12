<template>
  <div class="main-wrapp">
    <Header />
    <div class="main-content">
      <NuxtPage />
    </div>
    <Footer />
    <!-- <ChatBot /> -->
  </div>
</template>

<style lang="scss">
@import url("~/css/style.css");
@import url("~/css/media.css");
.main-wrapp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1 1 auto;
  margin: 0 auto;
  width: 100%;
}
</style>
