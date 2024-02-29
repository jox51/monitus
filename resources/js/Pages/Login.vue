 
 <script setup>
 import { Head, Link , useForm} from '@inertiajs/vue3';
 import {reactive} from 'vue'
 import { useToast } from "vue-toastification";

 const toast = useToast()

 const form = useForm({
  email:'',
  password: ''
 })

 function submit(){
 
  form.post('/auth/login', {
    preserveScroll:true,
    onSuccess: () => {
      toast('You are logged in')
    }
  })
 }

 function handleInput(e){
  form.clearErrors(e.target.name)
 }
 
</script>
<template>

  <Head title="Login" />
 
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST" @submit.prevent="submit"  >
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="form.email" @input="handleInput" />
          </div>
          <small class="text-red-500" v-if="form.errors.email"> {{ form.errors.email }}</small>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
       
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="form.password" @input="handleInput" />
          </div>
          <small class="text-red-500" v-if="form.errors.password"> {{ form.errors.password }}</small>

        </div>

        <div>
          <!-- <Link href="/auth/login" method="post" as="button" type="button" 
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :data="form">
          Sign In -->
            <button type="submit"    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :disabled="form.processing" >Sign in</button>
          <!-- </Link> -->
        </div>
      </form>

      
    </div>
  </div>
</template>
