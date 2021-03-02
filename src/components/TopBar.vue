<template>
  <div class="">
    <div class="flex pt-4 justify-center">
      <div class="bg-white rounded-full shadow-lg p-1.5">
        <router-link v-for="nav in navs" :key="nav.index" :to="{ name: nav.route }">
          <button
            @click="active = nav.id"
            class="px-3 py-1 focus:outline-none"
            :class="
              active === nav.id
                ? 'bg-gray-500 text-white font-semi-bold rounded-full'
                : ''
            "
          >
            {{ nav.title }}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      navs: [
        { title: "Page 1", route: "Page1In", id: 1 },
        { title: "Page 2", route: "Page2In", id: 2 },
        { title: "Page 3", route: "Page3In", id: 3 },
        { title: "Page 4", route: "Page4In", id: 4 },
        { title: "Page 5", route: "Page5In", id: 5 },
      ],
    };
  },
};
</script>

<style></style>
