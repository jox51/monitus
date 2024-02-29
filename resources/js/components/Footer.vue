<script setup>
import Link from '@/components/Link.vue'


</script>

<template>
  <div style="margin-top: 1000px">

    <Link component="About" name="About" href="/about">About</Link>
    <Link component="Test" name="Test" href="/test">Test</Link>
  
  </div>

</template>

<style>
.active {
  text-decoration: underline;
  color: red;
}
</style>