<template>
  <div class="flex">
    <section class="w-full h-screen items-center justify-left px-10 py-2">
      <div class="flex">
        <img src="../../assets/logo.png" alt="logo" width="95px" height="30px" />
        <header class="capitalize text-purple-900 text-sm font-bold">Company Logo</header>
      </div>
      <div class="mt-3 justify-center items-center bg-gray-200 h-screen">
        <p class="text-center px-4 py-2 bg-purple-900 text-white font-light text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eaque
          numquam sequi! Natus nostrum laborum sit fugiat facere enim sunt omnis cum,
          veritatis aspernatur exercitationem mollitia nemo ipsum, laudantium molestiae.
        </p>
      </div>
    </section>
    <section class="w-1/3">
      <div class="flex w-full h-screen justify-center items-center bg-white">
        <div class="text-purple-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius adipisci error
          tempore facere esse neque eaque qui ut possimus id ipsa soluta in odit,
          cupiditate tenetur mollitia omnis voluptates? Suscipit!
        </div>
      </div>
    </section>
    <section class="w-2/3">
      <div class="flex w-full h-screen justify-center items-center bg-white">
        <div class="">
          <div>
            <p class="text-center capitalize text-purple-900 px-4 py-2 text-xl font-bold">
              log in
            </p>
            <p class="text-center text-gray-500">
              Enter your email and password to log in to our dashboard.
            </p>
          </div>
          <div class="p-5">
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
                sign in
              </button>
            </div>
            <div class="text-center pt-2">
              <span>Don't have an account?</span>
              <router-link :to="{ name: 'Page1Up' }">
                <span class="text-purple-900 pl-2 capitalize font-semibold">sign up</span>
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
