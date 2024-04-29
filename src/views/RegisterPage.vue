<script>
import { RouterLink } from 'vue-router';
import InputField from '@/components/InputField.vue';
import SocialButton from '@/components/SocialButton.vue';
import DividerWithText from '@/components/DividerWithText.vue';
import RegisterPageService from '@/modules/RegisterPage/Services/RegisterPageService';

export default {
    components: {
        RouterLink,
        InputField,
        SocialButton,
        DividerWithText
    },
    data() {
        return {
            service: new RegisterPageService(),
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            firstNameStatus: 'default',
            lastNameStatus: 'default',
            emailStatus: 'default',
            passwordStatus: 'default',
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
            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!this.email || !emailRegex.test(this.email)) {
                this.emailStatus = 'error';
                return false;
            }
            this.emailStatus = 'default';
            return true;
        },
        validatePassword() {
            if (!this.password || this.password.length < 8) {
                this.passwordStatus = 'error';
                return false;
            }
            this.passwordStatus = 'default';
            return true;
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

                console.log(response)

                if(response.success) {
                    this.$router.push({name: 'LoginPage'});
                }
            }
        }
    }
}
</script>

<template>
    <main class="h-screen flex items-center">
        <div class="hidden md:block md:w-1/2">
            <img src="../assets/account-register-image.avif" alt="Girl in clothing with birds"
                class="w-full h-screen object-cover" v-once>
        </div>
        <div class="p-8 w-full md:w-1/2 lg:p-16">
            <RouterLink to="/"><img src="../assets/logo-black.svg"
                    class="mb-8 md:mb-12 w-full md:max-w-96 lg:max-w-[30rem]" alt="Trendloom logo" v-once></RouterLink>
            <h2 class="text-3xl font-extrabold mb-4">Sign up</h2>
            <div class="flex flex-col space-y-4">
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <InputField id="firstname" label="First Name" placeholder="John"
                        errorMessage="The first name field is required." :status="firstNameStatus" type="text"
                        class="sm:w-1/2" v-model="firstName" @input="validateFirstName"/>
                    <InputField id="lastname" label="Last Name" placeholder="Doe"
                        errorMessage="The last name field is required." :status="lastNameStatus" type="text" class="sm:w-1/2" v-model="lastName" @input="validateLastName"
                    />
                </div>
                <InputField id="email" label="Email Address" placeholder="firstname.lastname@gmail.com"
                    errorMessage="The email must be a valid email address." :status="emailStatus" type="email" v-model="email" @input="validateEmail"/>
                <InputField id="password" label="Password" placeholder="your password"
                    errorMessage="It must be a combination of minimum 8 letters, numbers, and symbols." :status="passwordStatus"
                    type="password" v-model="password" @input="validatePassword"/>
                <button
                    class="w-full block border-solid bg-black border-2 border-black text-white py-2 hover:bg-white hover:text-black hover:border-black" @click="register">Register
                    my account
                </button>
            </div>
            <DividerWithText text="or social media" />
            <div class="flex flex-col space-y-4 mb-8">
                <SocialButton platform="Google" buttonText="Register" />
                <SocialButton platform="Facebook" buttonText="Register" />
            </div>
            <p>Already have an account? <RouterLink to="/login" class="text-md font-extrabold underline">Log in
                </RouterLink>
            </p>
            <p class="mt-4">or go back to the <RouterLink to="/" class="text-md font-extrabold underline">homepage
                </RouterLink>
            </p>
        </div>
    </main>
</template>
