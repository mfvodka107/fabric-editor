<template>
  <div id="canvas_conainer">
    <div class="gt-toolbar">
      <div id="toolbar-undo" class="gt-button"></div>
      <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-undo">Undo</div>

      <div class="gt-separator"></div>

      <div id="toolbar-shape" class="gt-button gt-dropdown">
        <div class="gt-arrow"></div>
        <div class="gt-submenu gt-noselect gt-noshow">
          <div class="gt-submenu-item" id="toolbar-circle">
            <img src="icons/circle.png" class="gt-submenu-icon">
            Circle
          </div>
          <div class="gt-submenu-item" id="toolbar-rectangle">
            <img src="icons/rectangle.png" class="gt-submenu-icon">
            Rectangle
          </div>
        </div><!-- /toolbar-submenu -->
      </div><!-- /toolbar-shape -->
      <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-shape">Insert Shape</div>
    </div><!-- /toolbar -->
    <div style="position:relative;width:804px;float:left;border: 1px solid #aaa;" id="canvas-wrapper" tabindex="1">
      <canvas id="c" width="800" height="420" ></canvas>
    </div>
  </div>
</template>
<script>
  var canvas = new fabric.Canvas('c');
    canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

        canvas.selectionColor = 'rgba(0,255,0,0.3)';
        canvas.selectionBorderColor = 'red';
        canvas.selectionLineWidth = 5;
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
