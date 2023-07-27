<template>
  <textarea :value="text" @input="onEdit"></textarea>
  <div v-html="output"></div>
</template>

<script>
// const text: Ref<string> = useState('counter', () => '')
// const output: Ref<string> = useState('counter', () => '')
// const onEdit = (e) => {
//   output.value = marked(e.target.value);
// }
import { marked } from "marked"
export default {
  data() {
    return {
      output: "",
      text: "",
    }
  },
  methods: {
    onEdit(e) {
      // this.output = marked(e.target.value);
      this.output = marked(e.target.value)
      this.text = e.target.value
    },
  },
}
</script>
