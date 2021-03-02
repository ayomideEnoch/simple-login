<template>
  <div class="flex w-full">
    <div class="w-full h-screen justify-left">
      <div class="flex">
        <img src="../../assets/logo.png" alt="logo" width="25px" height="30px" />
        <header class="capitalize text-purple-900 text-sm font-bold">Company Logo</header>
      </div>
      <div class="mt-3">
        <p class="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eaque
          numquam sequi! Natus nostrum laborum sit fugiat facere enim sunt omnis cum,
          veritatis aspernatur exercitationem mollitia nemo ipsum, laudantium molestiae.
        </p>
      </div>
    </div>
    <section class="w-1/3">
      <div class="flex w-full h-screen justify-center items-center bg-white">
        <div class="">aaaa</div>
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
