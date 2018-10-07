<template>
	<div class="gt-toolbar">
		

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

	</div><!-- /toolbar -->
</template>

<script>
export default {
	name: 'commonTool',
	data () {
		return {
			msg: 'rendering commonTool for object'
		}
	}
}
</script>