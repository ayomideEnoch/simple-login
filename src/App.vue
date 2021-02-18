<template>
  <div class="flex w-full h-screen justify-center items-center bg-gray-400">
    <div class="h-56 w-96 bg-white rounded-xl shadow-xl">
      <div class="p-5">
        <input
          type="text"
          placeholder="Email"
          class="bg-gray-300 p-2 rounded-lg w-full mt-6 focus:outline-none"
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
            sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
