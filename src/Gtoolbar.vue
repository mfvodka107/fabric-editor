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

		<div id="toolbar-arrange" class="gt-button gt-dropdown">
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
				<input type='text' id="color-picker"/>
			</div>
		</div>
		<div class="mdl-tooltip mdl-tooltip--large gt-noselect" for="toolbar-fill-color">Fill Color</div>

		<div id="toolbar-backgroundcolor" class="gt-button" style="background-image: url(icons/background-color.png);"></div>
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