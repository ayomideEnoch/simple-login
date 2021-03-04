<template>
  <div class="flex w-full h-screen">
    <section class="w-full sm:w-1/2 bg-purple-900">
      <div class="flex w-full h-screen justify-center items-center">
        <div class="w-full sm:w-3/5">
          <div>
            <p class="text-center capitalize text-white px-4 py-2 text-xl font-bold">
              log in
            </p>
            <p class="text-center text-white">
              Enter your email and password to log in to our dashboard.
            </p>
          </div>
          <div class="p-5">
            <input
              type="text"
              placeholder="Email"
              class="bg-white p-2 rounded-lg w-full mt-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              class="bg-white mt-3 p-2 rounded-lg w-full focus:outline-none"
            />
            <div class="flex justify-center">
              <button
                class="uppercase bg-white text-purple-900 font-semibold px-4 py-2 rounded-lg mt-6 focus:outline-none"
              >
                sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hidden sm:block w-full sm:w-1/2">
      <div class="flex w-full h-screen justify-center items-center">
        <div class="w-3/5">
          <div>
            <p class="text-center capitalize text-purple-900 px-4 py-2 text-xl font-bold">
              Register
            </p>
            <p class="text-center text-gray-500">
              Signup to register an accont with us..
            </p>
          </div>
          <div class="p-5">
            <input
              type="text"
              placeholder="Name"
              class="bg-blue-100 p-2 rounded-lg w-full mt-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              class="bg-blue-100 p-2 rounded-lg w-full mt-2 focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              class="bg-blue-100 mt-3 p-2 rounded-lg w-full focus:outline-none"
            />
            <div class="flex justify-center">
              <button
                class="uppercase bg-purple-900 text-white px-4 py-2 rounded-lg mt-6 focus:outline-none"
              >
                sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
