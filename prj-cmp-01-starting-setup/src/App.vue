<template>
  <div>
    <app-header></app-header>
    <card>
      <button-component @set-active="setActive"
        >Stored Resources</button-component
      >
      <button-component @set-active="setActive">Add Resources</button-component>
    </card>
    <card>
      <add-resource v-show="add" @add-data="addItem"></add-resource>
    </card>
    <ul v-show="show">
      <stored-resource
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :link="item.link"
      >
      </stored-resource>
    </ul>
  </div>
</template>

<style>
</style>

<script>
import AddResource from './components/AddResource.vue';
import StoredResource from './components/StoredResource.vue';
export default {
  data() {
    return {
      items: [],
      active: true,
    };
  },
  components: {
    AddResource,
    StoredResource,
  },
  methods: {
    showStored() {
      this.show = !this.show;
    },
    showAdd() {
      this.add = !this.add;
    },
    addItem(title, description, link) {
      const newItem = {
        title,
        description,
        link,
      };

      this.items.push(newItem);
    },
  },
};
</script>