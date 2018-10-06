<template>
	<div class="gt-toolbar">
		<div id="toolbar-backgroundcolor" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-backgroundcolor">Background Color</div>

		<div id="toolbar-strokecolor" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-strokecolor">Stroke Color</div>

		<div id="toolbar-strokewidth" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-strokewidth">Stroke Width</div>

		<div class="gt-separator"></div>

		<div id="toolbar-gradient" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-gradient">Gradient</div>

		<div id="toolbar-shadow" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-shadow">Shadow</div>

		<div id="toolbar-radius" class="gt-button"></div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-radius">Radius</div>

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