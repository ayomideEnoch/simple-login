<template>
  <div class="flex w-full h-screen">
    <section class="hidden sm:block w-2/6 relative" style="background-color: #88e3f6">
      <img
        src="https://image.freepik.com/free-vector/graphic-designer-workspace-concept_1284-18695.jpg"
        alt="Logo"
        class="bottom-0 absolute"
      />
    </section>
    <section class="w-full sm:w-4/6">
      <div class="flex w-full h-screen justify-center items-center">
        <div class="w-full sm:w-2/4">
          <div>
            <p class="text-center capitalize text-purple-900 px-4 py-2 text-xl font-bold">
              Register
            </p>
            <p class="text-center text-gray-500">Signup to register an accont with us.</p>
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
            <div class="text-center pt-2">
              <span>Don't have an account?</span>
              <router-link :to="{ name: 'Page2In' }">
                <span class="text-purple-900 pl-2 capitalize font-semibold">sign in</span>
              </router-link>
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
