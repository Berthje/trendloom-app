<script>
import { RouterLink } from 'vue-router';
import InputField from '../components/InputField.vue';
import SocialButton from '../components/SocialButton.vue';
import DividerWithText from '../components/DividerWithText.vue';
import LoginPageService from '@/modules/LoginPage/Services/LoginPageService';

export default {
  name: 'LoginPage',
  components: {
    RouterLink,
    InputField,
    SocialButton,
    DividerWithText
  },
  data() {
    return {
      service: new LoginPageService,
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  computed: {
    emailStatus() {
      const emailRegex = /^\S+@\S+\.\S+$/;
      return this.email && emailRegex.test(this.email) ? 'default' : 'error';
    },
    passwordStatus() {
      return this.password && this.password.length >= 8 ? 'default' : 'error';
    },
  },
  methods: {
    validate() {
      return {
        isEmailValid: this.emailStatus === 'default',
        isPasswordValid: this.passwordStatus === 'default'
      }
    },
    async login() {
      const { isEmailValid, isPasswordValid } = this.validate();

      if (isEmailValid && isPasswordValid) {
        const response = await this.service.login({
          email: this.email,
          password: this.password
        });

        console.log(response)

        if (response.message === "Customer logged in succcessfully") {
          this.$router.push({ name: 'home' });
        } else if (response.message === "Invalid details") {
          this.errorMessage = response.message;
        }
      }
    }
  }
}
</script>

<template>
  <main class="h-screen flex items-center">
    <div class="hidden md:block md:w-1/2">
      <img src="../assets/account-login-image.avif" alt="Girl in clothing with birds"
        class="w-full h-screen object-cover" v-once>
    </div>
    <div class="p-8 w-full md:w-1/2 lg:p-16">
      <RouterLink to="/"><img src="../assets/logo-black.svg" class="mb-8 md:mb-12 w-full md:max-w-96 lg:max-w-[30rem]"
          alt="Trendloom logo" v-once></RouterLink>
      <h2 class="text-3xl font-extrabold mb-4">Log In</h2>
      <div class="flex flex-col space-y-4">
        <p class="text-red-700" v-if="errorMessage">{{ errorMessage }}</p>
        <InputField id="email" label="Email Address" placeholder="firstname.lastname@gmail.com"
          errorMessage="The email must be a valid email address." status="default" type="text" v-model="email" />
        <InputField id="password" label="Password" placeholder="your password"
          errorMessage="It must be a combination of minimum 8 letters, numbers, and symbols." status="default"
          type="password" v-model="password" />
        <RouterLink to="/forgot-password" class="text-md underline ml-auto">Forgot Password?</RouterLink>
        <button @click="login"
          class="w-full block border-solid bg-black border-2 border-black text-white py-2 hover:bg-white hover:text-black hover:border-black">Log
          In
        </button>
      </div>
      <DividerWithText text="or social media" />
      <div class="flex flex-col space-y-4 mb-8">
        <SocialButton platform="Google" buttonText="Log In" />
        <SocialButton platform="Facebook" buttonText="Log In" />
      </div>
      <p>Don't have an account? <RouterLink to="/register" class="text-md font-extrabold underline">Sign Up</RouterLink>
      </p>
      <p class="mt-4">or go back to the <RouterLink to="/" class="text-md font-extrabold underline">homepage
        </RouterLink>
      </p>
    </div>
  </main>
</template>
