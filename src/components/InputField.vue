<script setup>
import { ref, computed } from 'vue';
import { GoEye, GoEyeClosed } from "vue3-icons/go";

const showPassword = ref(false);

const props = defineProps({
    id: String,
    label: String,
    placeholder: String,
    errorMessage: String,
    status: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'error'].includes(value),
    },
    type: {
        type: String,
        default: 'text',
    }
});

const labelColor = computed(() => {
    if (props.status === 'error') {
        return 'text-red-700';
    }
    return 'text-black';
});

const inputType = computed(() => {
    if (props.type === 'password' && showPassword.value) {
        return 'text';
    }
    return props.type;
});

const inputClasses = computed(() => {
    if (props.status === 'error') {
        return 'bg-red-100 border-b-2 border-red-300 text-red-900 placeholder-red-400 focus:ring-red-300 focus:border-red-300';
    }
    return 'bg-gray-100 border-b-2 border-gray-300 text-black placeholder-gray-400 focus:ring-gray-300 focus:border-gray-300';
});

</script>

<template>
    <div>
        <label :for="id" class="block mb-1 text-sm font-bold" :class="labelColor">{{ label }}</label>
        <div class="relative">
            <input :type="inputType" :id="id" class="text-sm block w-full p-2.5" :class="inputClasses"
                :placeholder="placeholder" v-model="inputValue">
            <button v-if="props.type === 'password'" class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                @click="showPassword = !showPassword">
                <GoEye v-if="showPassword" />
                <GoEyeClosed v-else />
            </button>
        </div>
        <p v-if="status === 'error'" class="mt-2 text-xs text-red-600 dark:text-red-500">
            <span class="font-medium">{{ errorMessage }}</span>
        </p>
    </div>
</template>