<script setup>
import { RouterLink } from 'vue-router';
import InputField from '../components/InputField.vue';
</script>

<template>
  <main class="h-screen">
    <div class="hidden md:block md:w-1/2">
      <img src="../assets/category-men.jpg" alt="Description of image" class="w-full h-screen object-cover">
    </div>
    <div class="p-8">
      <img src="../assets/logo.svg" class="mb-8" alt="Trendloom logo">
      <h2 class="text-3xl font-extrabold mb-4">Log In</h2>
      <div class="flex flex-col space-y-4">
        <InputField id="email" label="Email Address" placeholder="firstname.lastname@gmail.com"
          errorMessage="The email must be a valid email address." status="default" type="text" />
        <InputField id="password" label="Password" placeholder="your password"
          errorMessage="It must be a combination of minimum 8 letters, numbers, and symbols." status="default"
          type="password" />
        <RouterLink to="/forgot-password" class="text-md underline ml-auto">Forgot Password?</RouterLink>
        <button
          class="w-full block border-solid bg-black border-2 border-black text-white py-2 hover:bg-white hover:text-black hover:border-black">Log
          In
        </button>
      </div>
      <h3 class="w-full text-center border-b-2 border-black border-solid leading-[0.12em] my-8">
        <span class="bg-white px-3">or</span>
      </h3>
      <div class="flex flex-col space-y-4 mb-8">
        <button
          class="w-full block border-2 border-black border-solid bg-white text-black py-2 hover:bg-black hover:text-white">Log
          In with Google</button>
        <button
          class="w-full block border-2 border-black border-solid bg-white text-black py-2 hover:bg-black hover:text-white">Log
          In with Facebook</button>
      </div>
      <p>Don't have an account? <RouterLink to="/register" class="text-md font-extrabold underline">Sign Up</RouterLink>
      </p>
    </div>
  </main>
</template>