<template>
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

		<div id="toolbar-arrange" class="gt-button gt-dropdown gt-noselect">
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

		</div><!-- /toolbar-arrange -->
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-arrange">Arrange Objects</div>

		<div class="gt-separator"></div>

		<div id="toolbar-font-size" class="gt-button gt-input gt-dropdown">
			<input type="text" id="font-size" maxlength="3" class="gt-text-input gt-title gt-autoupdate">
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

		<div id="toolbar-fontcolor" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-fontcolor">Font Color</div>

		<div id="toolbar-bold" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-bold">Bold</div>

		<div id="toolbar-italics" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-italics">Italics</div>

		<div id="toolbar-underline" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-underline">Underline</div>

		<div id="toolbar-strikethrough" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-strikethrough">Strikethrough</div>

		<div id="toolbar-charspacing" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-charspacing">Letter spacing</div>

		<div id="toolbar-lineheight" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-lineheight">Line height</div>

		<div class="gt-separator"></div>

		<div id="toolbar-alignleft" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignleft">Text-align Left</div>

		<div id="toolbar-aligncenter" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-aligncenter">Text-align Center</div>

		<div id="toolbar-alignright" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignright">Text-align Right</div>

		<div id="toolbar-alignjustify" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignjustify">Text-align Justify</div>

		<div class="gt-separator"></div>

		<div id="toolbar-aligntop" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-aligntop">Text-align Top</div>

		<div id="toolbar-alignmiddle" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignmiddle">Text-align Middle</div>

		<div id="toolbar-alignbottom" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-alignbottom">Text-align Bottom</div>

		<div class="gt-separator"></div>

		<div id="toolbar-fill-color" class="gt-button gt-dropdown">
			<div class="gt-arrow"></div>
			<div class="gt-submenu gt-noshow">
				<input type='text' id="color-picker"/>
			</div>
		</div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-fill-color">Fill Color</div>

		<div id="toolbar-effects" class="gt-button gt-dropdown">
			<div class="gt-arrow"></div>

			<div class="gt-submenu gt-noselect gt-noshow gt-no-auto-close">

				<p>You can put anything <br/> you want in here.</p>

			</div>

		</div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-effects">Effects</div>

	</div><!-- /toolbar -->
</template>

<script>
export default {
	name: 'gtoolbar',
	data () {
		return {
			msg: 'rendering gtoolbar main'
		}
	}
}
</script>