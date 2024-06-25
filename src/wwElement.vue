<template>
  <div class="dx-field">
    <div class="dx-field-label">Add custom items</div>
    <div class="dx-field-value">
      <DxTagBox
          :items="dataSource"
          :accept-custom-value="true"
          display-expr="text"
          @customItemCreating="onCustomItemCreating"
      />
    </div>
  </div>
</template>

<script>
import "./dx.fluent.dx-light-theme.css";

import DxTagBox from 'devextreme-vue/tag-box';
import {DxTooltip} from 'devextreme-vue/tooltip';

export default {
  components: {
    DxTagBox,
    DxTooltip,
  },
  data() {
    return {
      dataSource: this.content?.data ? [...this.content.data] : []
    };
  },
  props: {
    content: {type: Object, required: true},
  },
  emits: ["trigger-event"],
  computed: {},
  methods: {
    onCustomItemCreating(e) {
      console.log('onCustomItemCreating', e.text);

      if (!e.text) {
        e.customItem = null;
        return;
      }

      const {component, text} = e;
      const currentItems = component.option('items');
      const trimmedText = text.trim();

      const newItem = this.createNewItem(currentItems, trimmedText);
      this.addItemToDataSource(currentItems, newItem, component);

      e.customItem = newItem;
      this.$emit("trigger-event", {
        name: "onCustomItemCreating",
        event: e
      });
    },
    createNewItem(currentItems, text) {
      const newId = currentItems.length > 0 ? currentItems.at(-1).id + 1 : 1;
      return {
        id: newId,
        text: text,
      };
    },
    addItemToDataSource(currentItems, newItem, component) {
      const itemInDataSource = currentItems.find((item) => item.text === newItem.text);
      if (!itemInDataSource) {
        currentItems.push(newItem);
        component.option('items', currentItems);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
