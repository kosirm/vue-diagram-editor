<template>
  <div id="editor">
    <router-link to="/">Home</router-link>
    <DiagramEditor v-model="graph"/>
  </div>
</template>

<script>
import { DiagramEditor } from "diagram-vue";
export default {
  name: "HelloWorld",
  components: {
    DiagramEditor
  },
  // ljudi ovo je predobro
  data() {
    return {
      graph: {
        width: 800,
        height: 600,
        background: "#f0f0f0",
        nodes: [],
        links: []
      }
    };
  }
};
</script>
<style scoped>
#editor {
}
</style>
