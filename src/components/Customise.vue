<template>
  <section>
    <router-link to="/">Home</router-link>
    <Diagram
      :width="2000"
      :height="1000"
      :fluid="false"
      scale="1"
      background="#fafafa"
      :nodes="nodes"
      :links="links"
      :editable="editable"
      :labels="{
        edit: 'Edit',
        remove: 'Remove',
        link: 'Link',
        select: 'Select'
      }"
      @editNode="editNode"
      @editLink="editLink"
      @nodeChanged="nodeChanged"
      @linkChanged="linkChanged"
    ></Diagram>
  </section>
</template>
<script>
import Diagram from "diagram-vue";
import data from "../data.json";
export default {
  name: "Customise",
  components: {
    Diagram
  },
  data() {
    return {
      editable: true,
      nodes: data.nodes,
      links: data.links
    };
  },
  methods: {
    editNode(item) {},
    editLink(item) {},
    nodeChanged(obj) {
      this.nodes = obj.nodes;
    },
    linkChanged(obj) {
      this.links = obj.links;
    }
  }
};
</script>
