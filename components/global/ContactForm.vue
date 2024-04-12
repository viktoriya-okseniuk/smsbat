<template>
  <div>
    <div class="page-section callback-section">
      <div class="callback-section-img">
        <img src="/images/callback.png" alt="" />
      </div>
      <div class="callback-section-main">
        <div class="section-head">
          <div class="section-head-title">Зв’яжіться з нами</div>
        </div>
        <form
          ref="formRef"
          class="section-content"
          @submit.prevent="sendRequest"
        >
          <div class="text-content">
            <p>
              Ми готові стати
              <span class="highlight-blue">надійним</span> партнером для Вашого
              бізнесу і надати послуги, які допоможуть йому рости і розвиватися.
            </p>
            <p>
              Зв'яжіться з нами вже сьогодні, і ми допоможемо Вам обрати
              послуги, які найбільше підходять для Вашого бізнесу.
            </p>
            <p>
              Співпраця з нами - це
              <span class="highlight-blue"
                >гарантія якості, професіоналізму та успішного розвитку!</span
              >
            </p>
          </div>
          <div class="callback-form">
            <div class="form-main">
              <div class="form-item">
                <input
                  v-model="form.name"
                  type="text"
                  class="textbox"
                  placeholder="Ім’я та прізвище"
                />
              </div>
              <div
                class="form-item"
                :class="{ error: v$.phone.$errors.length }"
              >
                <input
                  name="phone"
                  v-model="form.phone"
                  class="textbox"
                  placeholder="Номер телефону"
                />
                <div
                  class="input-errors"
                  v-for="error of v$.phone.$errors"
                  :key="error.$uid"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
              <div class="form-item">
                <input
                  v-model="form.company"
                  type="text"
                  class="textbox"
                  placeholder="Назва компанії"
                  name="company"
                />
              </div>
              <div class="form-item">
                <input
                  v-model="form.email"
                  type="text"
                  name="email"
                  class="textbox"
                  placeholder="Робоча пошта"
                />
              </div>
              <div class="form-item" :class="{ error: v$.text.$errors.length }">
                <input
                  name="text"
                  v-model="form.text"
                  class="textarea"
                  placeholder="Запит"
                />
                <div
                  class="input-errors"
                  v-for="error of v$.text.$errors"
                  :key="error.$uid"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <div class="form-hint">
              Цей сайт захищено за допомогою reCAPTCHA, і до нього
              застосовуються Політика конфіденційності та Умови надання послуг
              Google.
            </div>
            <div class="form-action">
              <button type="submit" class="button filled">
                Надіслати запит
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

const toast = useToast();
const formRef = ref();

const form = reactive({
  name: "",
  phone: "",
  company: "",
  email: "",
  text: "",
});

const phoneValidator = (value: string) =>
  new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$").test(
    value
  );

const rules = {
  name: {},

  phone: {
    required: helpers.withMessage(() => "Це поле обов'язкове", required),
    phoneValidator: helpers.withMessage(
      () => "Введіть валідний номер телефону",
      phoneValidator
    ),
  },
  company: {},
  email: { email },
  text: {
    required: helpers.withMessage(() => "Це поле обов'язкове", required),
  },
};

const v$ = useVuelidate(rules, form);

const sendRequest = async () => {
  const isValid = await v$.value.$validate();
  if (isValid) {
    const formD = new FormData(formRef.value);
    formD.append("form_id", "69");
    await $fetch("https://loc.indexbat.com/api/survey", {
      method: "POST",
      body: formD,
      onResponse: ({ response }) => {
        if (response.status == 200) {
          toast.add({
            severity: "success",
            summary: "Успіх",
            detail: "Ваша заявка була надіслана",
            life: 3000,
          });
          for (let key in form) {
            v$.value[key].$model = "";
            v$.value[key].$dirty = false;
          }
        }
      },
    });
  }
};
</script>

<style lang="scss">
.form-item.error input {
  border: 1px solid red;
}
.input-errors {
  color: red;
  margin: 2px 0;
}
</style>
