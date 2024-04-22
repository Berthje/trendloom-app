<script setup>
import InputField from '../components/InputField.vue';
</script>

<template>
  <main class="h-screen">
    <div class="hidden md:block md:w-1/2">
      <img src="../assets/category-men.jpg" alt="Description of image" class="w-full h-screen object-cover">
    </div>
    <div>
      <h2>Log In</h2>
      <div>
        <InputField id="email" label="Email address" placeholder="firstname.lastname@gmail.com"
          errorMessage="The email must be a valid email address." status="error" type="text"/>
        <InputField id="password" label="Password" placeholder="your password"
          errorMessage="It must be a combination of minimum 8 letters, numbers, and symbols." status="default" type="password"/>

      </div>
    </div>
  </main>
</template>