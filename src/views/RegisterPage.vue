<script>
import { RouterLink } from 'vue-router';
import InputField from '../components/InputField.vue';
import SocialButton from '../components/SocialButton.vue';
import DividerWithText from '../components/DividerWithText.vue';

export default {
    components: {
        RouterLink,
        InputField,
        SocialButton,
        DividerWithText
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
                        errorMessage="The first name field is required." status="default" type="text"
                        class="sm:w-1/2" />
                    <InputField id="lastname" label="Last Name" placeholder="Doe"
                        errorMessage="The last name field is required." status="default" type="text" class="sm:w-1/2" />
                </div>
                <InputField id="email" label="Email Address" placeholder="firstname.lastname@gmail.com"
                    errorMessage="The email must be a valid email address." status="default" type="email" />
                <InputField id="password" label="Password" placeholder="your password"
                    errorMessage="It must be a combination of minimum 8 letters, numbers, and symbols." status="default"
                    type="password" />
                <button
                    class="w-full block border-solid bg-black border-2 border-black text-white py-2 hover:bg-white hover:text-black hover:border-black">Register
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