<template>
  <div style="width:100%; float:left; position: relative;">
    <div style="width:70%; float:left; position: relative; overflow: auto;">
      <div style="position:relative;width:800px;float:left;border-right: 1px solid #aaa;margin: 15px; background: url(assets/images/graph-image.gif) repeat" id="canvas-wrapper" tabindex="1" v-on:click="canvasClick()">
        <canvas id="c-layout" width="800" height="420" ></canvas>
      </div>
    </div>
    <div style="width:30%; float:left; position: relative;">
      <div style="border: 1px solid #aaa; margin: 15px;padding:10px;" id="monitor">
      </div>
    </div>

  </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
      activeObject : {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    canvasClick: function () {
      this.activeObject = window.wcanvas.getActiveObject();
      if (!this.activeObject) {
        window.editor.set({});
        return;
      }
      window.editor.set(JSON.parse(JSON.stringify(this.activeObject)));
    }
  }
}

</script>

<style>

</style>
