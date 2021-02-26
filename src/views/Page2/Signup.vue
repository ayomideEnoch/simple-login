<template>
  <div class="flex w-full h-screen justify-center items-center bg-gray-200">
    <div class="w-96 bg-white rounded-xl shadow-xl">
      <div>
        <p class="text-center capitalize text-purple-900 px-4 py-2 text-xl font-bold">
          Register
        </p>
        <p class="text-center text-gray-500">Sign up to register an account with us.</p>
      </div>
      <div class="p-5">
        <input
          type="text"
          placeholder="Name"
          class="bg-gray-300 p-2 rounded-lg w-full mt-2 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          class="bg-gray-300 p-2 rounded-lg w-full mt-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          class="bg-gray-300 mt-3 p-2 rounded-lg w-full focus:outline-none"
        />
        <div class="flex justify-center">
          <button
            class="uppercase bg-purple-900 text-white px-4 py-2 rounded-lg mt-6 focus:outline-none"
          >
            sign Up
          </button>
        </div>
        <div class="text-center pt-2">
          <span>Already have an account?</span>
          <router-link :to="{ name: 'Page1In' }">
            <span class="text-purple-900 pl-2 capitalize font-semibold">sign in</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
