<script setup>

defineProps(['error'])
</script>

<template>
    <small class="text-red-500" v-if="error"> {{ error }}</small>
</template>