 
<script setup>
import { Link, router } from '@inertiajs/vue3'
import Paginate from '@/components/Paginate.vue'
import { onMounted } from 'vue';
import ShowSite from '@/components/ShowSite.vue'
import AskToSubscibe from './AskToSubscribe.vue'
defineProps(['monitors'])

function createSite(){
router.visit('site/create')
}



</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <div class="py-8 flex justify-between">
     <div class="flex flex-col mb-2">
      <h1 class="text-2xl font-semibold">Sites</h1>
      <p class="mt-2 text-sm text-gray-500">
        A list of all the sites in your account including their name, title, email and role.
      </p>
    </div>
    <div class="py-4">
 
      <button @click="createSite" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mb-4 bg-indigo-600 text-white">
        Add Sites
      </button>
     </div>
    </div>
    </div>
  <div class="flex flex-col">
 
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200" v-if="monitors.data?.length">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <ShowSite v-for="monitor in monitors.data" :key="monitor.id" :monitor="monitor" />
            </tbody>
          </table>

          <div v-else>
            <Link href="/site/create" type="button" class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
    </svg>
    <span class="mt-2 block text-sm font-medium text-gray-900"> Add New Site </span>
  </Link>
          </div>
          <AskToSubscibe v-if="!$page.props.auth.user.isSubscribe" />
        </div>
      </div>
    </div>
  </div>

  <Paginate v-if="monitors.last_page > 1" :next="monitors.next_page_url" :prev="monitors.prev_page_url" :current="monitors.current_page" :last="monitors.last_page" :from="monitors.from" :to="monitors.to" :total="monitors.total" class="mt-4" />
</template>

