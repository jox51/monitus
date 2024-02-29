
<script setup>

import Layout from '@/components/Layout.vue'
defineProps(["monitors"])
import MonitorList from '@/components/home/MonitorList.vue'

</script>


 


<template>
   
  
    <MonitorList :monitors="monitors" />
 
 
</template>