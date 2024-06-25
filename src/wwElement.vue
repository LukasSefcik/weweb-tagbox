<template>
  <div class="dx-field">
    <div class="dx-field-label">Add custom items</div>
    <div class="dx-field-value">
      <DxTagBox
          :items="content.data"
          :accept-custom-value="true"
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
    };
  },
  props: {
    content: {type: Object, required: true},
  },
  emits: ["trigger-event"],
  computed: {},
  methods: {
    onCustomItemCreating(e) {
      const newValue = e.text;
      console.log('onCustomItemCreating', newValue);
      this.$emit("trigger-event", {
        name: "onCustomItemCreating",
        event: e,
        newValue,
      });
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
