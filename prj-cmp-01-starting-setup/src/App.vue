<template>
  <div>
    <app-header></app-header>
    <card>
      <button-component
        @set-active="showAddResource"
        :class="add ? 'primary' : 'secondary'"
        >Add Resources</button-component
      >
      <button-component
        @set-active="showStoredResource"
        :class="stored ? 'primary' : 'secondary'"
      >
        Stored Resources
      </button-component>
    </card>
    <card :class="add ? 'active' : 'hidden'">
      <add-resource v-show="add" @add-data="addItem"></add-resource>
    </card>
    <ul :class="stored ? 'active' : 'hidden'">
      <li v-for="item in items" :key="item.title">
        <card>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <a :href="item.link">{{ item.link }}</a>
        </card>
      </li>
    </ul>
  </div>
</template>

<style>
.active {
  display: block;
}

.hidden {
  display: none;
}

.secondary {
  background-color: plum;
}

.primary {
  background-color: purple;
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>

<script>
import AddResource from './components/AddResource.vue';
// import StoredResource from './components/StoredResource.vue';
export default {
  data() {
    return {
      items: [],
      add: true,
      stored: false,
    };
  },
  components: {
    AddResource,
    // StoredResource,
  },
  methods: {
    showStoredResource() {
      this.add = false;
      this.stored = true;
    },
    showAddResource() {
      this.stored = false;
      this.add = true;
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