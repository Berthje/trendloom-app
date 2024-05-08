<script>
import { RouterLink } from 'vue-router';
import InputField from '../../components/InputField.vue';
import SocialButton from '../../components/SocialButton.vue';
import DividerWithText from '../../components/DividerWithText.vue';
import AuthenticationService from '../../modules/Authentication/Services/AuthenticationService.js';

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
      service: new AuthenticationService(),
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  computed: {
    emailStatus() {
      return this.service.validateEmail(this.email) ? 'default' : 'error';
    },
    passwordStatus() {
      return this.service.validatePassword(this.password) ? 'default' : 'error';
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
        const response = await this.service.login({ email: this.email, password: this.password });

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
      <img src="../../assets/account-login-image.avif" alt="Girl in clothing with birds"
           class="w-full h-screen object-cover" v-once>
    </div>
    <div class="p-8 w-full md:w-1/2 lg:p-16">
      <RouterLink to="/"><img src="../../assets/logo-black.svg" class="mb-8 md:mb-12 w-full md:max-w-96 lg:max-w-[30rem]"
                              alt="Trendloom logo" v-once></RouterLink>
      <h2 class="text-3xl font-extrabold mb-4">{{ $t('log_in') }}</h2>
      <div class="flex flex-col space-y-4">
        <p class="text-red-700" v-if="errorMessage">{{ $t(errorMessage.toLowerCase().replace(' ', '_')) }}</p>
        <InputField id="email" label="email_address" placeholder="sample_email" errorMessage="email_valid"
          status="default" type="text" v-model="email" />
        <InputField id="password" label="password" placeholder="your_password" errorMessage="password_valid"
          status="default" type="password" v-model="password" />
        <RouterLink to="/forgot-password" class="text-md underline ml-auto">{{ $t('forgot_password') }}?</RouterLink>
        <button @click="login"
          class="w-full block border-solid bg-black border-2 border-black text-white py-2 hover:bg-white hover:text-black hover:border-black">{{
            $t('log_in') }}
        </button>
      </div>
      <DividerWithText text="social_media_login" />
      <div class="flex flex-col space-y-4 mb-8">
        <SocialButton platform="Google" buttonText="Log In" />
        <SocialButton platform="Facebook" buttonText="Log In" />
      </div>
      <p>{{ $t('no_account') }} <RouterLink to="/register" class="text-md font-extrabold underline">{{ $t('sign_up') }}
        </RouterLink>
      </p>
      <p class="mt-4">{{ $t('go_back') }} <RouterLink to="/" class="text-md font-extrabold underline">{{ $t('homepage') }}
        </RouterLink>
      </p>
    </div>
  </main>
</template>
