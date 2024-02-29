<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import {Link, useForm} from '@inertiajs/vue3'
import ShowError from '@/components/ShowError.vue'
import AskToSubscribe from '@/components/home/AskToSubscribe.vue';

const form = useForm({
  'site_name': '',
   'site_url': ''
}) 


</script>

<script>

export default {
  computed: {
    isSubscibe(){
      return this.$page.props.auth.user.isSubscibe
    }
  }
}
</script>

<template>
  <form @submit.prevent="form.post('/site/store')">
    <div class="space-y-12 w-full p-8 flex justify-center">
   

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Add Site</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Add site for monitoring</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="site-name"  class="block text-sm font-medium leading-6 text-gray-900">Site name</label>
            <div class="mt-2">
              <input type="text" :disabled="!isSubscibe" name="site-name" id="site-name" v-model="form.site_name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <ShowError :error="form.errors.site_name" />
            </div>
          </div>

         
          <div class="sm:col-span-4">
            <label for="site_url" class="block text-sm font-medium leading-6 text-gray-900">Site url</label>
            <div class="mt-2">
              <input id="site_url" :disabled="!isSubscibe" name="site_url" type="site_url" v-model="form.site_url" autocomplete="site_url" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <ShowError :error="form.errors.site_url" />

            </div>
          </div>


         
        </div>
      </div>

      
    </div>

    <div class="mt-6 flex items-center justify-center gap-x-6  ">
      <Link href="/home" type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</Link>
      <button type="submit" :disabled="!isSubscibe" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
  <div class="mt-4">

    <AskToSubscribe v-if="!isSubscibe" />
  </div>
</template>

