<template>
  <div>
    <div class="gt-toolbar">

      <div id="toolbar-undo" class="gt-button"></div>
      <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-undo">Undo</div>

      <div id="toolbar-redo" class="gt-button"></div>
      <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-redo">Redo</div>

      <div class="gt-separator"></div>

      <div id="toolbar-text" class="gt-button"></div>
      <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-text">Insert Text</div>

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

      <div id="toolbar-new-image" class="gt-button" style="background-image: url(icons/new-image.png);"></div>
      <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-new-image">Insert Image</div>

      <div class="gt-separator"></div>

      <div v-show="objectSelected">
        <div id="toolbar-arrange" class="gt-button gt-dropdown" >
          <span class="gt-title">Arrange</span>
          <div class="gt-arrow"></div>

          <div class="gt-submenu gt-noselect gt-noshow">
            <div class="gt-submenu-item" id="toolbar-send-backward">
              <img src="icons/send-backward.png" class="gt-submenu-icon">
              Send Backward
            </div>
            <div class="gt-submenu-item" id="toolbar-bring-forward">
              <img src="icons/bring-forward.png" class="gt-submenu-icon">
              Bring Forward
            </div>
          </div><!-- /toolbar-submenu -->
        </div>

        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-arrange">Arrange Objects</div>

        <div class="gt-separator"></div>

        <div id="toolbar-movement" class="gt-button gt-dropdown" style="background-image: url(icons/movement.png);">
          <div class="gt-arrow"></div>

          <div class="gt-submenu gt-noselect gt-noshow">
            <div class="gt-submenu-item" id="toolbar-lockmovement">
              Lock Movement
            </div>
            <div class="gt-submenu-item" id="toolbar-verticalmovement" action="lock">
              Lock Vertical Movement
            </div>
            <div class="gt-submenu-item" id="toolbar-horizonalmovement" action="lock">
              Lock Horizonal Movement
            </div>
          </div><!-- /toolbar-submenu -->
        </div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-movement">Object Movement</div>

        <div id="toolbar-scaling" class="gt-button gt-dropdown" style="background-image: url(icons/scaling.png);">
          <div class="gt-arrow"></div>

          <div class="gt-submenu gt-noselect gt-noshow">
            <div class="gt-submenu-item" id="toolbar-lockscaling">
              Lock Scaling
            </div>
            <div class="gt-submenu-item" id="toolbar-verticalscaling">
              Lock Vertical Scaling
            </div>
            <div class="gt-submenu-item" id="toolbar-horizonalscaling">
              Lock Horizonal Scaling
            </div>
            
            <div class="gt-submenu-item" id="toolbar-scaletoresize">
              Scale to Resize
            </div>
          </div><!-- /toolbar-submenu -->
        </div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-scaling">Object scaling</div>

        <div id="toolbar-rotation" class="gt-button gt-dropdown" style="background-image: url(icons/rotation.png);">
          <div class="gt-arrow"></div>

          <div class="gt-submenu gt-noselect gt-noshow">
            <div class="gt-submenu-item" id="toolbar-lockrotation">
              Lock Rotation
            </div>
            <div class="gt-submenu-item" id="toolbar-lockrotation-flip" action="lock">
              Lock Rotation Flip
            </div>
          </div><!-- /toolbar-submenu -->
        </div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-rotation">Rotation</div>

        <div class="gt-separator"></div>

        <div id="toolbar-fill-color" class="gt-button gt-dropdown">
          <div class="gt-arrow"></div>
          <div class="gt-submenu gt-noshow">
            <input type="text" id="color-picker"/>
          </div>
        </div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-fill-color">Fill Color</div>

        <div id="toolbar-backgroundcolor" class="gt-button gt-dropdown" style="background-image: url(icons/background-color.png);">
          <div class="gt-arrow"></div>
          <div class="gt-submenu gt-noshow">
            <input type="text" id="background-color-picker"/>
          </div>
        </div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-backgroundcolor">Background Color</div>

        <div id="toolbar-border" class="gt-button gt-dropdown" style="background-image: url(icons/border.png);">
          <div class="gt-arrow"></div>

          <div class="gt-submenu gt-noselect gt-noshow">
            <div class="gt-submenu-item" id="toolbar-strokecolor">
              <img src="icons/fill-color.png" class="gt-submenu-icon">
              Color
            </div>
            <div class="gt-submenu-item" id="toolbar-strokewidth">
              <img src="icons/Stroke-width.png" class="gt-submenu-icon">
              Width
            </div>
          </div><!-- /toolbar-submenu -->
        </div><!-- /toolbar-border -->
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-border">Stroke</div>

        <div class="gt-separator"></div>

        <div id="toolbar-gradient" class="gt-button" style="background-image: url(icons/gradient.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-gradient">Gradient</div>

        <div id="toolbar-shadow" class="gt-button" style="background-image: url(icons/shadow.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-shadow">Shadow</div>

        <div id="toolbar-radius" class="gt-button" style="background-image: url(icons/radius.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-radius">Radius</div>

        <div class="gt-separator"></div>

        <div id="toolbar-newdata" class="gt-button" style="background-image: url(icons/data-new.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-newdata">Add Data to Object</div>

        <div id="toolbar-editdata" class="gt-button" style="background-image: url(icons/data-edit.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-editdata">Edit Data in Object</div>

        <div id="toolbar-deletedata" class="gt-button" style="background-image: url(icons/data-delete.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-deletedata">Delete data in Object</div>
        <div class="gt-separator"></div>
      </div>

  
      <div id="toolbar-effects" class="gt-button gt-dropdown">
        <div class="gt-arrow"></div>

        <div class="gt-submenu gt-noselect gt-noshow gt-no-auto-close">

          <p>You can put anything <br/> you want in here.</p>

        </div>

      </div>
      <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-effects">Effects</div>

    </div><!-- /toolbar common object -->

    <div class="gt-toolbar">
      <div v-show="textObject">
        <div id="toolbar-font-size" class="gt-button gt-input gt-dropdown" style="width: 80px;">
          <img src="icons/text-size.png" class="gt-submenu-icon" style="float: left; margin: 6px 0 0 0;">
          <input type="text" id="font-size" maxlength="3" value="12" class="gt-text-input gt-title gt-autoupdate" style="float: none;">
          <div class="gt-arrow"></div>

          <div class="gt-submenu gt-noselect gt-scrolling gt-noshow">
            <div class="gt-submenu-item">
              <span>10</span>
            </div>
            <div class="gt-submenu-item gt-default">
              <span>12</span>
            </div>
            <div class="gt-submenu-item">
              <span>14</span>
            </div>
          </div><!-- /toolbar-submenu -->

        </div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-font-size">Font Size</div>

        <div class="gt-separator"></div>

        <div id="toolbar-font-family" class="gt-button gt-dropdown gt-noselect">
          <span class="gt-title gt-autoupdate" id="current-font"></span>
          <div class="gt-arrow"></div>

          <div class="gt-submenu gt-noselect gt-scrolling gt-noshow">
            <div class="gt-submenu-item">
              <span>Tahoma</span>
            </div>
            <div class="gt-submenu-item gt-default">
              <span>Arial</span>
            </div>
          </div><!-- /toolbar-submenu -->

        </div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-font-family">Font</div>

        <div class="gt-separator"></div>

        <div id="toolbar-fontcolor" class="gt-button" style="background-image: url(icons/text-color.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-fontcolor">Font Color</div>

        <div id="toolbar-bold" class="gt-button"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-bold">Bold</div>

        <div id="toolbar-italics" class="gt-button"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-italics">Italics</div>

        <div id="toolbar-underline" class="gt-button"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-underline">Underline</div>

        <div id="toolbar-strikethrough" class="gt-button" style="background-image: url(icons/text-strikethrough.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-strikethrough">Strikethrough</div>

        <div id="toolbar-charspacing" class="gt-button" style="background-image: url(icons/char-spacing.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-charspacing">Letter spacing</div>

        <div id="toolbar-lineheight" class="gt-button" style="background-image: url(icons/lineheight.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-lineheight">Line height</div>

        <div class="gt-separator"></div>

        <div id="toolbar-alignleft" class="gt-button" style="background-image: url(icons/align-left.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignleft">Text-align Left</div>

        <div id="toolbar-aligncenter" class="gt-button" style="background-image: url(icons/align-center.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-aligncenter">Text-align Center</div>

        <div id="toolbar-alignright" class="gt-button" style="background-image: url(icons/align-right.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignright">Text-align Right</div>

        <div id="toolbar-alignjustify" class="gt-button" style="background-image: url(icons/align-justify.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignjustify">Text-align Justify</div>

        <div class="gt-separator"></div>

        <div id="toolbar-aligntop" class="gt-button" style="background-image: url(icons/vertical-top.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-aligntop">Text-align Top</div>

        <div id="toolbar-alignmiddle" class="gt-button" style="background-image: url(icons/vertical-middle.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignmiddle">Text-align Middle</div>

        <div id="toolbar-alignbottom" class="gt-button" style="background-image: url(icons/vertical-bottom.png);"></div>
        <div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignbottom">Text-align Bottom</div>
      </div><!-- tool for textbox -->

      <div v-show="imageObject">
        
      </div><!-- tool for image -->

    </div><!-- /toolbar for specific object -->


    <div style="width:100%; float:left; position: relative;">
      <div style="width:70%; float:left; position: relative; overflow: auto;">
        <div style="position:relative;width:800px;float:left;border-right: 1px solid #aaa;margin: 15px; background: url(assets/images/graph-image.gif) repeat" id="canvas-wrapper" tabindex="1" v-on:click="canvasClick()">
          <canvas id="c-layout" width="800" height="420" ></canvas>
        </div>
      </div>
      <div style="width:30%; float:left; position: relative;">
        <div style="border: 1px solid #aaa; margin: 15px;padding:10px;" id="data" v-show="dataEdit">
        </div>
        <div id="monitor">
        </div>
      </div>

    </div><!-- layout canvas : canvas-wrapper -->
    

  </div>

</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      consoleJSON: window.consoleJSON,
      consoleJSON: window.fabricJSON,
      objectSelected: false,
      textObject: false,
      imageObject: false,

      dataEdit: false,
      activeObject : {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    canvasClick: function () {
      //console.log(Gtoolbar);
      this.activeObject = window.wcanvas.getActiveObject();
      this.textObject = false;
      this.imageObject = false;
      if (!this.activeObject) {
        window.editor.set({});
        this.objectSelected = false;
        
        return;
      }
      this.objectSelected = true;
      if (this.activeObject.type == 'textbox') this.textObject = true;
      if (this.activeObject.type == 'image') this.imageObject = true;

      window.editor.set(JSON.parse(JSON.stringify(this.activeObject)));
    }
  }
}

</script>

<style>

</style>
