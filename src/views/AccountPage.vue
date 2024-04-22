<script setup>
import { RouterLink } from 'vue-router';
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
          errorMessage="The email must be a valid email address." status="default" type="text" />
        <InputField id="password" label="Password" placeholder="your password"
          errorMessage="It must be a combination of minimum 8 letters, numbers, and symbols." status="default"
          type="password" />
        <RouterLink to="/forgot-password" class="text-md underline">Forgot Password?</RouterLink>
        <button
          class="w-full block border-2 border-black border-solid bg-white text-black py-2 hover:bg-black hover:text-white">Log
          In</button>
      </div>
      <div class="social-buttons">
        <button
          class="w-full block border-2 border-black border-solid bg-white text-black py-2 hover:bg-black hover:text-white">Log
          In with Google</button>
        <button
          class="w-full block border-2 border-black border-solid bg-white text-black py-2 hover:bg-black hover:text-white">Log
          In with Facebook</button>
      </div>
      <p>Don't have an account? <RouterLink to="/register" class="text-md underline">Sign Up</RouterLink></p>
    </div>
  </main>
</template>