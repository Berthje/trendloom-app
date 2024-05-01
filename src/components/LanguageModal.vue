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
        },
        save() {
            this.$emit('save', this.selectedLanguage);
        }
    }
}
</script>


<template>
    <div v-show="show" class="fixed top-0 h-full w-full overflow-auto z-50 flex justify-center items-center">
        <div class="bg-white w-full h-full">
            <div class="border-b border-solid border-gray-300 py-3">
                <AiOutlineClose class="h-6 w-6 bg-white cursor-pointer ml-auto" @click="close" />
            </div>
            <div>
                <h2>Which language would you like us to use?</h2>
                <div v-for="lang in languages" :key="lang.id" class="mb-2">
                    <input type="radio" :id="lang" :value="lang" v-model="selectedLanguage" />
                    <label :for="lang">{{ lang }}</label>
                </div>
            </div>
            <div>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    </div>
</template>