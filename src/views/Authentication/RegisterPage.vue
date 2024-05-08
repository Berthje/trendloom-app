<script>
import { RouterLink } from 'vue-router';
import InputField from '@/components/InputField.vue';
import SocialButton from '@/components/SocialButton.vue';
import DividerWithText from '@/components/DividerWithText.vue';
import AuthenticationService from '@/modules/Authentication/Services/AuthenticationService.js';

export default {
    components: {
        RouterLink,
        InputField,
        SocialButton,
        DividerWithText
    },
    data() {
        return {
            service: new AuthenticationService(),
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            firstNameStatus: 'default',
            lastNameStatus: 'default',
            emailStatus: 'default',
            passwordStatus: 'default',
            errorMessage: ''
        }
    },
    methods: {
        validateFirstName() {
            if (!this.firstName) {
                this.firstNameStatus = 'error';
                return false;
            }
            this.firstNameStatus = 'default';
            return true;
        },
        validateLastName() {
            if (!this.lastName) {
                this.lastNameStatus = 'error';
                return false;
            }
            this.lastNameStatus = 'default';
            return true;
        },
        validateEmail() {
            const isValid = this.service.validateEmail(this.email);
            this.emailStatus = isValid ? 'default' : 'error';
            return isValid;
        },
        validatePassword() {
            const isValid = this.service.validatePassword(this.password);
            this.passwordStatus = isValid ? 'default' : 'error';
            return isValid;
        },
        async register() {
            const isFirstNameValid = this.validateFirstName();
            const isLastNameValid = this.validateLastName();
            const isEmailValid = this.validateEmail();
            const isPasswordValid = this.validatePassword();

            if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
                const response = await this.service.register({
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email,
                    password: this.password
                });

                if (response.id) {
                    this.resetForm();
                    this.$router.push({ name: 'login' });
                } else if (response.errors.email) {
                    this.errorMessage = response.errors.email.join(', ');
                }
            }
        },
        resetForm() {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.password = '';
            this.firstNameStatus = 'default';
            this.lastNameStatus = 'default';
            this.emailStatus = 'default';
            this.passwordStatus = 'default';
            this.errorMessage = '';
        }
    }
}
</script>

<template>
    <main class="h-screen flex items-center">
        <div class="hidden md:block md:w-1/2">
            <img src="../../assets/account-register-image.avif" alt="Girl in clothing with birds"
                 class="w-full h-screen object-cover" v-once>
        </div>
        <div class="p-8 w-full md:w-1/2 lg:p-16">
            <RouterLink to="/"><img src="../../assets/logo-black.svg"
                    class="mb-8 md:mb-12 w-full md:max-w-96 lg:max-w-[30rem]" alt="Trendloom logo" v-once></RouterLink>
            <h2 class="text-3xl font-extrabold mb-4">{{ $t('sign_up') }}</h2>
            <div class="flex flex-col space-y-4">
                <p class="text-red-500" v-if="errorMessage">{{ errorMessage }}</p>
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <InputField id="firstname" label="first_name" placeholder="sample_firstname"
                        errorMessage="first_name_required" :status="firstNameStatus" type="text"
                        class="sm:w-1/2" v-model="firstName" @input="validateFirstName" />
                    <InputField id="lastname" label="last_name" placeholder="sample_lastname"
                        errorMessage="last_name_required" :status="lastNameStatus" type="text"
                        class="sm:w-1/2" v-model="lastName" @input="validateLastName" />
                </div>
                <InputField id="email" label="email_address" placeholder="sample_email"
                    errorMessage="email_valid" :status="emailStatus" type="email"
                    v-model="email" @input="validateEmail" />
                <InputField id="password" label="password" placeholder="your_password"
                    errorMessage="password_requirement"
                    :status="passwordStatus" type="password" v-model="password" @input="validatePassword" />
                <button
                    class="w-full block border-solid bg-black border-2 border-black text-white py-2 hover:bg-white hover:text-black hover:border-black"
                    @click="register">{{ $t('register_my_account') }}
                </button>
            </div>
            <DividerWithText text="social_media_login" />
            <div class="flex flex-col space-y-4 mb-8">
                <SocialButton platform="Google" buttonText="Register" />
                <SocialButton platform="Facebook" buttonText="Register" />
            </div>
            <p>{{ $t('already_have_an_account') }} <RouterLink to="/login" class="text-md font-extrabold underline">{{
                $t('log_in') }}
                </RouterLink>
            </p>
            <p class="mt-4">{{ $t('go_back') }} <RouterLink to="/" class="text-md font-extrabold underline">
                    {{ $t('homepage') }}
                </RouterLink>
            </p>
        </div>
    </main>
</template>
