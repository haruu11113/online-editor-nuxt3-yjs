<template>
  <div class="page is-error">
    <h1>{{ error.statusCode }}</h1>
    <h2 style="color: blue">エラーが発生しました</h2>
  </div>
</template>

<script>
export default {
  layout: "default",
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
