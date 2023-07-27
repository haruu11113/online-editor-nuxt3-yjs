<template>
  <div>
    <WsEditor />
  </div>
</template>

<script lang="ts" setup>
import WsEditor from '~/components/organisms/WsEditor.vue'
definePageMeta({
  layout: 'default',
  components: {
    WsEditor,
  },
})
</script>
