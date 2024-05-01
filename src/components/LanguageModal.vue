<script>
import { AiOutlineClose } from "vue3-icons/ai";

export default {
    name: 'LanguageModal',
    components: {
        AiOutlineClose
    },
    props: {
        show: Boolean,
    },
    data() {
        return {
            selectedLanguage: null,
            languages: ["francais", "nederlands"]
        };
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<template>
    <div v-show="show" class="fixed top-0 h-full w-full overflow-auto z-50 flex justify-center items-center">
        <div class="bg-white w-full h-full sm:max-w-96 sm:max-h-[32rem] flex flex-col justify-between">
            <div>
                <div class="border-b border-solid border-gray-300 p-3">
                    <AiOutlineClose class="h-6 w-6 bg-white cursor-pointer ml-auto hover:opacity-40" @click="close" />
                </div>
                <div class="p-6">
                    <h2 class="text-2xl font-extrabold mb-8">Which language would you like us to use?</h2>
                    <div v-for="lang in languages" :key="lang" class="mb-2 flex items-center space-x-2">
                        <input type="radio" :id="lang" :value="lang" name="language" class="radio-button" />
                        <label :for="lang" class="capitalize text-lg font-medium">{{ lang }}</label>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <button class="w-full py-2 bg-gray-200 text-black rounded mb-2 hover:opacity-70">Cancel</button>
                <button class="w-full py-2 bg-black text-white rounded hover:opacity-40">Save</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.radio-button {
    @apply appearance-none w-5 h-5 border border-black rounded-full outline-none cursor-pointer relative;
}

.radio-button:checked {
    @apply bg-white;
}

.radio-button:checked::after {
    @apply content-[''] block w-[14px] h-[14px] bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}
</style>