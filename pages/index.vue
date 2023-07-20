<template>
  <div>
    <client-only>
    <tiptap-editor />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
    import TiptapEditor from '~/components/TiptapEditor.vue'
    definePageMeta({
    layout: "default",
    components: {
        TiptapEditor
    }
    });
  </script>