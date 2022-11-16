<template>
  <q-page class="column flex-center">
    <h1>Logga in</h1>

    <q-input label="E-post" v-model="mail" />
    <q-input label="Lösenord" v-model="password" />
    <q-btn label="Logga in" @click="login" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const mail = ref('');
const password = ref('');
const login = function () {
  let data = { login: mail.value, password: password.value };
  fetch('https://test6.zoezi.se/api/v8.0/memberapi/login', {
    method: 'POST',
    credentials: 'include',
    body:
      data instanceof FormData ? data : data ? JSON.stringify(data) : undefined,
  });
};
</script>
