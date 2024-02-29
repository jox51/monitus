<script setup>
import { onMounted } from 'vue';
import { router, Link } from '@inertiajs/vue3';
const props = defineProps(['monitor'])

function destroy(id){
  if(!confirm('Do you want to delete this site')) return
  router.delete(`/site/${id}`)
}

 
onMounted(()=>{
  Echo.channel(`status-${props.monitor.id}-changed`)
    .listen('BroadcastStatusChangedEvent', (e) => {
      props.monitor.status = e.newStatus
        console.log(e.order);
    });
 })

</script>

<template>
  <tr >
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ monitor.site_name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ monitor.site_url }}
                </td>
              

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span v-if="monitor.status" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Up</span>

                  <span v-else class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Down</span>

           
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ monitor.role }}
                </td> -->
                <td class="py-4 whitespace-nowrap  text-sm font-medium">
                  <Link :href="`/site/${monitor.id}/edit`" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
                </td>
                <td class=" pr-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button @click="destroy(monitor.id)" class="text-indigo-600 hover:text-indigo-900">Delete</button>
                </td>
              </tr>
</template>