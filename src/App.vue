<template>
  <div id="q-app">
    <Alert ref="Alert"></Alert>
    <router-view />
  </div>
</template>
<script>
import Alert from "./components/Alert";

export default {
  components: { Alert },
  name: "App"
};
</script>
