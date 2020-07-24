<template>
  <q-page class="Home">
    <div class="row">
      <div class="col-12">
        <div class="page-header-left q-ma-sm q-mb-md q-mt-md">
          <label class="page-name">{{ $route.name }}</label>
        </div>
      </div>
    </div>
    <q-card class="q-ml-sm q-mr-sm">
      <q-card-section class="card-main q-pa-none">
        <router-view />
      </q-card-section>
    </q-card>
    <!-- <img
                  alt="Quasar logo"
                  src="~assets/quasar-logo-full.svg"
                > -->
  </q-page>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="stylus">
.card-main{
  height: calc(100vh - 125px)
}
</style>
