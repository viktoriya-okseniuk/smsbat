<template>
  <header class="header home-header">
    <div class="container">
      <div class="header-content">
        <NuxtLink :to="localePath('/')" class="nav-link">
          <img src="/images/logo.svg" alt="" />
        </NuxtLink>
        <button
          @click="mobileMenu.classList.toggle('open')"
          class="menu-button"
        >
          <img src="/images/icons/menu-icon.svg" alt="" />
        </button>
        <div ref="mobileMenu" class="header-main">
          <div class="main-nav">
            <NuxtLink :to="localePath('/')" class="nav-link">
              <p>{{ $t("mainNav.main") }}</p>
            </NuxtLink>
            <NuxtLink :to="localePath('/about')" class="nav-link">
              <p>{{ $t("mainNav.about") }}</p>
            </NuxtLink>
            <NuxtLink :to="localePath('/services')" class="nav-link">
              <p>{{ $t("mainNav.services") }}</p>
            </NuxtLink>
            <NuxtLink :to="localePath('/contacts')" class="nav-link">
              <p>{{ $t("mainNav.contacts") }}</p>
            </NuxtLink>
          </div>
          <div class="header-actions">
            <div class="header-lang">
              <button class="action-button">
                <img src="/images/icons/lang-icon.svg" alt="" />
              </button>
              <div class="lang-list">
                <a
                  href="#"
                  @click="setLocale('ua')"
                  class="lang-link"
                  :class="{ active: locale == 'ua' }"
                  >Українська</a
                >
                <a
                  href="#"
                  @click="setLocale('en')"
                  class="lang-link"
                  :class="{ active: locale == 'en' }"
                  >English</a
                >
              </div>
            </div>
            <div class="header-add-nav">
              <button class="action-button">
                <img src="/images/icons/burger-icon.svg" alt="" />
              </button>
              <div class="add-nav">
                <NuxtLink :to="localePath('/tech')" class="nav-link">
                  <p>Підримка</p>
                </NuxtLink>
                <a href="#" class="nav-link">Документація</a>
                <a href="#" class="nav-link">Увійти</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

const mobileMenu = ref();
</script>
