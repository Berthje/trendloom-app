<script setup>
import { RouterLink } from 'vue-router';
import InputField from '../components/InputField.vue';
import SocialButton from '../components/SocialButton.vue';

import DividerWithText from '../components/DividerWithText.vue';
</script>

<template>
  <main class="h-screen flex items-center">
    <div class="hidden md:block md:w-1/2">
      <img src="../assets/login-image.jpg" alt="Girl in clothing with birds" class="w-full h-screen object-cover">
    </div>
    <div class="p-8 w-full md:w-1/2 lg:p-16">
      <RouterLink to="/"><img src="../assets/logo.svg" class="mb-8 md:mb-12 w-full md:max-w-96 lg:max-w-[30rem]"
          alt="Trendloom logo"></RouterLink>
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
      <DividerWithText text="or social media" />
      <div class="flex flex-col space-y-4 mb-8">
        <SocialButton platform="Google" buttonText="Log In" />
        <SocialButton platform="Facebook" buttonText="Register" />
      </div>
      <p>Don't have an account? <RouterLink to="/register" class="text-md font-extrabold underline">Sign Up</RouterLink>
      </p>
      <p class="mt-4">or go back to the <RouterLink to="/" class="text-md font-extrabold underline">homepage
        </RouterLink>
      </p>
    </div>
  </main>
</template>