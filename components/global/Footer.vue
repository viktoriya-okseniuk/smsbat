<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-top-content">
          <div class="footer-social">
            <a href="#" class="social-link">
              <img src="/images/icons/instagram-icon.svg" alt="" />
            </a>
            <a href="#" class="social-link">
              <img src="/images/icons/facebook-icon.svg" alt="" />
            </a>
          </div>
          <div class="footer-nav">
            <div class="footer-nav-col">
              <div class="footer-nav-title">Продукти</div>
              <div class="footer-nav-list">
                <a href="#" class="nav-link">Програмовані носії</a>
                <a href="#" class="nav-link">DAM</a>
                <a href="#" class="nav-link">Демо-версії</a>
                <a href="#" class="nav-link">Ціни</a>
                <a href="#" class="nav-link">План дій</a>
                <a href="#" class="nav-link">Поширені запитання</a>
              </div>
            </div>
            <div class="footer-nav-col">
              <div class="footer-nav-title">Рішення</div>
              <div class="footer-nav-list">
                <a href="#" class="nav-link">Чому SMSbat</a>
                <a href="#" class="nav-link">Video API</a>
                <a href="#" class="nav-link">Електронна комерція</a>
                <a href="#" class="nav-link">Роздрібний продаж</a>
                <a href="#" class="nav-link">Медіа та розваги</a>
                <a href="#" class="nav-link">Подорожі</a>
                <a href="#" class="nav-link">Non-Profits</a>
                <a href="#" class="nav-link">Наші клієнти</a>
                <a href="#" class="nav-link">Бібліотека ресурсів</a>
              </div>
            </div>
            <div class="footer-nav-col">
              <div class="footer-nav-title">Розробникам</div>
              <div class="footer-nav-list">
                <a href="#" class="nav-link">Початок роботи</a>
                <a href="#" class="nav-link">Документація</a>
                <a href="#" class="nav-link">Спільнота</a>
                <a href="#" class="nav-link">SDKs</a>
                <a href="#" class="nav-link">Додатки</a>
                <a href="#" class="nav-link">Подкасти</a>
                <a href="#" class="nav-link">Cookbooks</a>
              </div>
            </div>
            <div class="footer-nav-col">
              <div class="footer-nav-title">Компанія</div>
              <div class="footer-nav-list">
                <a href="#" class="nav-link">Про нас</a>
                <a href="#" class="nav-link">Клієнти</a>
                <a href="#" class="nav-link">Партнери</a>
                <a href="#" class="nav-link">Заходи</a>
                <a href="#" class="nav-link">Кар’єра</a>
                <a href="#" class="nav-link">Новини</a>
                <a href="#" class="nav-link">Блог</a>
              </div>
            </div>
            <div class="footer-nav-col">
              <div class="footer-nav-title">Контакти</div>
              <div class="footer-nav-list">
                <a href="#" class="nav-link">Технічна підтримка</a>
                <a href="#" class="nav-link">Контактні продажі</a>
                <a href="#" class="nav-link">Навчання та тренінги</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <div class="footer-bottom-nav">
            <NuxtLink :to="localePath('/use-terms')" class="nav-link">
              <p>Terms of Use</p>
            </NuxtLink>
            <NuxtLink :to="localePath('/privacy')" class="nav-link">
              <p>Privacy Policy</p>
            </NuxtLink>
            <NuxtLink :to="localePath('/dcma')" class="nav-link">
              <p>DMCA Notice</p>
            </NuxtLink>
          </div>
          <div class="footer-copyright">
            © 2023 SMSBAT LTD, All rights reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
