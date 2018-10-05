import Vue from 'vue'
import App from './App.vue'
import Gtoolbar from './Gtoolbar.vue'
import CommonObjectTool from './CommonObjectTool.vue'

new Vue({
	el: '#app',
	render: h => h(App)
});

new Vue({
	el: '#gtoolbar',
	render: h => h(Gtoolbar)
});

new Vue({
	el: '#commonTool',
	render: h => h(CommonObjectTool)
});
var canvas = new fabric.Canvas('c-layout');
canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

canvas.selectionColor = 'rgba(0,255,0,0.2)';
canvas.selectionBorderColor = 'red';
canvas.selectionLineWidth = 1;



$(function() {
	console.log('loading Gtoolbar');
	/* --- sample event handlers for toolbar buttons --- */
	registerButton($('#toolbar-text'), function() {
		var newtext = new fabric.Textbox('new textbox', {
			fontSize: 20,
			left: getRandomInt(0, 100),
			top: getRandomInt(0, 100),
			fontFamily: 'helvetica',
			angle: 0,
			fill: '#000000',
			scaleX: 1,
			scaleY: 1,
			fontWeight: '',
			originX: 'left',
			width: 300,
			hasRotatingPoint: true,
			centerTransform: true,
		});

		canvas.add(newtext);
	});
	registerButton($('#toolbar-new-image'), function() {
		fabric.Image.fromURL('https://via.placeholder.com/100?text=data+image', function (img) {

			img.set({
				left: 0,
				top: 0,
				width: 100,
				height: 100
			})
			.scale(1)
			.setCoords();

			canvas.add(img);
			
		});
	});
	registerButton($("#toolbar-undo"), function() {
            // pressed undo
        });

	registerButton($("#toolbar-circle"), function() {
            // insert circle
        });

	registerToggleButton($("#toolbar-bold"), function() {
            // set strong font weight
        }, function() {
            // set normal font weight
        });

	$("#toggle-bold").click(function() {
		toggle($("#toolbar-bold"), true);
	});

	/* --- programmatically adding items to a dropdown --- */
	var button = $("#toolbar-font-family");
	for (i = 0; i < 10; i++) {
		insertSubmenuItem(button, $("<div class='gt-submenu-item'><span>Monospace</span></div>"));
	}

	/* --- color picker --- */
	$("#color-picker").colpick({
		colorScheme:'dark',
		onChange:function(hsb,hex,rgb,el,bySetColor) {
			$(el).val('#'+hex);
		},
		onSubmit:function(hsb,hex,rgb,el,bySetColor) {
			$(el).val('#'+hex);
			$(el).colpickHide();
		}
	});

});