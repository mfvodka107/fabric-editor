import Vue from 'vue'

var canvasLayout = new Vue({
	el: '#app',
	data: {

		consoleJSON: consoleJSON,
		fabricJSON: fabricJSON,
		objectSelected: false,
		textObject: false,
		imageObject: false,

		hasData: false,
		dataType: '',
		argument: 'random',
		curGender: 'male',
		items: [],
		
		hasBackgroundImage: false,
		activeObject : {},
		msg: 'Welcome to Your Vue.js App',

		movement: {
			lockMovementX: false,
			lockMovementY: false
		}, 
		scaleToResize: true,
		scale: {
			lockScalingX: false,
			lockScalingY: false
		},
		prop: {
			originY: 'top',
			opacity: 1,
			fill: '#000000',
			backgroundColor: '',
			stroke: null,
			strokeWidth: 0,
			shadow: null
		},
		textbox : {
			fontSize: 20,
			fontWeight: '',
			fontFamily: 'helvetica',
			fontStyle: 'normal',
			underline: false,
			overline: false,
			linethrough: false,
			textAlign: 'left',
			textBackgroundColor: '',
			charSpacing: 0,
			lineHeight: 1.16
		},
		image: {
			src: '',

		}
	},
	methods: {
		changeGender: function(val) {
			this.curGender = val;
		},
		addItem: function() {
			var contentText = '';
			if (this.activeObject.type == 'textbox') {
				contentText = 'Data Text';
			}
			if (this.activeObject.type == 'image') {
				contentText = 'Image URL';
			}

			if (this.argument == 'random') {
				this.items.push({type:'' , content: contentText});
			}

			if (this.argument == 'gender') {
				this.items.push({type: this.curGender , content: contentText});
			}
			this.changeItem();
		},
		changeItem: function() {
			var data = this.activeObject.data;
			if (data.arg != this.argument) {
				this.items = [];
			}
			data.arg = this.argument;
			if (this.activeObject.type == 'textbox') {
				data.text = this.items;
			}
			if (this.activeObject.type == 'image') {
				data.image = this.items;
			}
			setAttr('data' , data , this.activeObject);
		},
		deleteItem: function(ind) {
			delete this.items[ind];
			this.changeItem();
		},

	}

});

// json editor js created
var options = {
	/*onEditable: function (node) {
		switch (node.field) {
			default:
			return {
				field: false,
				value: true
			};
		}
	},*/
	onChangeText: function (json) {

		var activeObject = canvas.getActiveObject();
		activeObject = JSON.parse(JSON.stringify(activeObject));
		json = JSON.parse(json);
		for (var key in activeObject) {
			if (json.hasOwnProperty(key) && activeObject[key] != json[key]) {
				console.log("Change ["+key+"] to value :"+json[key])
				canvas.getActiveObject().set(key, json[key]).setCoords();
				setAttr(key , json[key] , canvas.getActiveObject());
			} else {
				if (!(json.hasOwnProperty(key))) {
					delete canvas.getActiveObject()[key];
				}
			}
		}
		canvas.renderAll();
		saveJson();
	}
};
var container = document.getElementById("monitor");
var editor = new JSONEditor(container , options);

// canvas fabric js created
var canvas = new fabric.Canvas('c-layout');
canvas.selectionColor = 'rgba(0,255,0,0.2)';
canvas.selectionBorderColor = 'red';
canvas.selectionLineWidth = 1;
fabric.Object.prototype.objectCaching = false;

var viewportLeft = 0,
viewportTop = 0,
mouseLeft,
mouseTop,
_drawSelection = canvas._drawSelection,
isDown = false;

var mods = 0;
canvas.counter = 0;
var newleft = 0;

var copiedObject,
copiedObjects = new Array();

// use util js to change structure of object
canvas.on('object:selected', function (opt) {
	var target = opt.target;
	if (target._cacheCanvas) {

	}
	
})

canvas.on(  'object:modified', onObjectModified,
	'object:added', function () {
		canvas.counter++;
		updateModifications(true);

	});

canvas.on('object:scaling', function(e) {
	var toResize = canvasLayout.scaleToResize;
	console.log("Object Scaling . %cScale to Resize : " + canvasLayout.scaleToResize , "color :red" );
	if (toResize) {
		if (e.target.type === 'group') {
			var groupScaleX = e.target.scaleX;
			var groupScaleY = e.target.scaleY;
			e.target.resizeToScale();
			e.target._objects.forEach(function(object) {
				object.resizeToScale(groupScaleX, groupScaleY, true);
			});
		} else {
			e.target.resizeToScale();
		}
		editor.set(JSON.parse(JSON.stringify(canvas.getActiveObject())));
	}

});

fabric.Canvas.prototype.preserveObjectStacking = true;

fabric.Object.prototype.resizeToScale = function(scaleX, scaleY, belongsToGroup) {
	var objectScaleX = scaleX || this.scaleX;
	var objectScaleY = scaleY || this.scaleY;
	switch (this.type) {
		case 'ellipse':
		this.rx = parseInt(this.rx * objectScaleX);
		this.ry = parseInt(this.ry * objectScaleY);
		this.width = this.rx * 2;
		this.height = this.ry * 2;
		this.scaleX = 1;
		this.scaleY = 1;
		if (belongsToGroup) {
			this.left *= objectScaleX;
			this.top *= objectScaleY;
		}
		break;

		default:
		this.width = parseInt(this.width * objectScaleX);
		this.height = parseInt(this.height * objectScaleY);
		this.scaleX = 1;
		this.scaleY = 1;
		if (belongsToGroup) {
			this.left *= objectScaleX;
			this.top *= objectScaleY;
		}
		break;
	}

	canvas.renderAll();

};
var STEP = 1;

var Direction = {
	LEFT: 0,
	UP: 1,
	RIGHT: 2,
	DOWN: 3
};
fabric.util.addListener(document.getElementById('canvas-wrapper'), 'click', function (options) {
	console.log("%cCanvas clicked", "color: yellow; font-style: italic;");
	var activeObject = canvas.getActiveObject();
	canvasLayout.textObject = false;
	canvasLayout.imageObject = false;
	canvasLayout.hasData = false;
	canvasLayout.objectSelected = false;
	if (!activeObject) {
		editor.set({});
		return;
	}

	if ('data' in activeObject && activeObject.data && activeObject.data.arg != null) {
		console.log("%cActive Object has data", "color: #4b8eff; font-style: Bold;");
		canvasLayout.hasData = true;
		canvasLayout.argument = activeObject.data.arg;
	}

	canvasLayout.activeObject = activeObject;
	canvasLayout.objectSelected = true;
	
	if (activeObject.type == 'textbox') {
		canvasLayout.textObject = true;
		canvasLayout.dataType = 'data-text';
		if ('data' in activeObject && activeObject.data) {
			canvasLayout.items = activeObject.data.text;
		}
	}

	if (activeObject.type == 'image') {
		canvasLayout.imageObject = true;
		canvasLayout.dataType = 'data-image';
		if ('data' in activeObject && activeObject.data) {
			canvasLayout.items = activeObject.data.image;
		}
	}

	for (var key in canvasLayout.prop) {
		canvasLayout.prop[key] = activeObject[key];
	}
	for (var key in canvasLayout[activeObject.type]) {
		canvasLayout.prop[key] = activeObject[key];
	}
	editor.set(JSON.parse(JSON.stringify(activeObject)));
});

fabric.util.addListener(document.getElementById('canvas-wrapper'), 'keydown', function (options) {

	options.preventDefault();
	var activeObject = canvas.getActiveObject();
	if (activeObject) {
		STEP = ($("#step-key").val() > 0) ? parseInt($("#step-key").val()) : 1;
		var key = options.which || options.keyCode;
		if (key === 37) {
			moveSelected(Direction.LEFT);
		} else if (key === 38) {
			moveSelected(Direction.UP);
		} else if (key === 39) {
			moveSelected(Direction.RIGHT);
		} else if (key === 40) {
			moveSelected(Direction.DOWN);
		} else if (key === 46) {
			var activeObjects = canvas.getActiveObjects();
			canvas.discardActiveObject()
			if (activeObjects.length) {
				canvas.remove.apply(canvas, activeObjects);
			}
		}
	}

	if (key == 90 && options.ctrlKey) {
		console.log('Ctrl + z pressed.');
		undo();
	}
	if (key == 89 && options.ctrlKey) {
		console.log('Ctrl + y pressed.');
		redo();
	}

	if (key == 67 && options.ctrlKey) {
		console.log('Ctrl + c pressed.');
		copy();
	}
	if (key == 86 && options.ctrlKey) {
		console.log('Ctrl + v pressed.');
		paste();
		onObjectModified();
	}


});

function moveSelected(direction) {
	var activeObject = canvas.getActiveObject();

	if (activeObject) {
		onObjectModified();
		switch (direction) {
			case Direction.LEFT:

			activeObject.left -= STEP;
			break;
			case Direction.UP:
			activeObject.top -= STEP;
			break;
			case Direction.RIGHT:
			activeObject.left += STEP;
			break;
			case Direction.DOWN:
			activeObject.top += STEP;
			break;
		}
		activeObject.setCoords();
		canvas.renderAll();

	} else {
		console.log('no object selected');
	}

}

function getActiveStyle(styleName, object) {
    object = object || canvas.getActiveObject();
    if (!object) return '';

    return (object.getSelectionStyles && object.isEditing) ?
    (object.getSelectionStyles()[styleName] || '') :
    (object[styleName] || '');
};

function setActiveStyle(styleName, value, object) {
    //console.log(object);
    object = object || canvas.getActiveObject();
    if (!object) return;

    if (object.setSelectionStyles && object.isEditing) {
        var style = {};
        style[styleName] = value;
        object.setSelectionStyles(style);
        object.setCoords();
    } else {
        object.set(styleName, value);
    }

    object.setCoords();
    canvas.requestRenderAll();
};

function getActiveProp(name) {
    var object = canvas.getActiveObject();
    if (!object) return '';

    return object[name] || '';
}

function setActiveProp(name, value) {
    var object = canvas.getActiveObject();
    if (!object) return;
    object.set(name, value).setCoords();
    canvas.renderAll();
    setAttr(name , value , object);
}

function setAttr(name, value, ob) {
	ob.toObject = (function (toObject) {
		return function () {
			return fabric.util.object.extend(toObject.call(this), {
				[name]: value
			});
		};
	})(ob.toObject);
}

function renderVieportBorders() {
	var ctx = canvas.getContext();
	ctx.save();
	ctx.fillStyle = 'rgba(0,0,0,0.1)';
	ctx.fillRect(
		canvas.viewportTransform[4],
		canvas.viewportTransform[5],
		canvas.getWidth() * canvas.getZoom(),
		canvas.getHeight() * canvas.getZoom());
	ctx.setLineDash([5, 5]);
	ctx.strokeRect(
		canvas.viewportTransform[4],
		canvas.viewportTransform[5],
		canvas.getWidth() * canvas.getZoom(),
		canvas.getHeight() * canvas.getZoom());
	ctx.restore();
}

function saveJson() {
	canvas.toJSON(['selectable' , 'evented' , 'data' , 'isbackground']);

	consoleJSON = JSON.stringify(canvas);
	fabricJSON = JSON.parse(consoleJSON);

}
function loadJson(json) {
	canvas.loadFromJSON(json, function () {

		canvas.renderAll();
		for (var i = fabricJSON.objects.length - 1; i >= 0; i--) {
			if ('data' in fabricJSON.objects[i]) {
				setAttr('data', fabricJSON.objects[i].data, canvas.getObjects()[i]);
			}
			if ('isbackground' in fabricJSON.objects[i]) {
				setAttr('isbackground', true, canvas.getObjects()[i]);
				setAttr('selectable', false, canvas.getObjects()[i]);
				setAttr('evented', false, canvas.getObjects()[i]);
			}
		}
	});
}
function onObjectModified() {
	console.log('Object changed');

	updateModifications(true);
	saveJson();
};

function updateModifications(savehistory) {
	if (savehistory === true) {
		console.log('save history')
		canvas.toJSON(['selectable' , 'evented' , 'data' , 'isbackground']);
		var myjson = JSON.stringify(canvas);
		state.push(myjson);
	}
}
function undo() {
	if (mods < state.length) {
		loadJson(state[state.length - 1 - mods - 1]);
		mods += 1;
	}
}
function redo() {
	if (mods > 0) {
		canvas.clear().renderAll();
		loadJson(state[state.length - 1 - mods + 1]);
		mods -= 1;
	}
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function delete_cookie(name) {
	setCookie(name, "", -1);
}

function copy(){
	copiedObjects = new Array();
	if(canvas.getActiveObjects()){
        //console.log(canvas.getActiveGroup().getObjects());
        canvas.getActiveObjects().forEach(function(o){
        	var object = fabric.util.object.clone(o);
        	copiedObjects.push(object);
        });             
    }
    else if(canvas.getActiveObject()){
    	var object = fabric.util.object.clone(canvas.getActiveObject());
    	copiedObject = object;
    	copiedObjects = new Array();

    }
}

function paste(){
	if(copiedObjects.length > 0){
		for(var i in copiedObjects){
			copiedObjects[i]=fabric.util.object.clone(copiedObjects[i]);

			copiedObjects[i].set("top", copiedObjects[i].top+100);
			copiedObjects[i].set("left", copiedObjects[i].left+100);

			canvas.add(copiedObjects[i]);
			canvas.item(canvas.size() - 1).hasControls = true;
		}                
	}
	else if(copiedObject){
		copiedObject= fabric.util.object.clone(copiedObject);
		copiedObject.set("top", 150);
		copiedObject.set("left", 150);
		canvas.add(copiedObject);
		canvas.item(canvas.size() - 1).hasControls = true;
	}
	canvas.renderAll();  
}

function setActiveProp(name, value) {
	var object = canvas.getActiveObject();
	if (!object) return;
	object.set(name, value).setCoords();
	canvas.renderAll();
}

function addImage(imageName , data = {arg:"random",filter:"",image:[{type:"",content:"url-image"}]} ) {
	var coord = getRandomLeftTop();

	var image = new Image();
	var canvas1 = document.getElementById("myCanvas");
	var ctx = canvas1.getContext("2d");
	ctx.font = "30px Arial";
	var imgText = imageName.split(' ');
	console.log(imgText);
	for (var i = 0; i < imgText.length; i++) {
		var dis = 40 + 30*i;
		ctx.fillText(imgText[i],10,dis);
	}

	image.src = canvas1.toDataURL();

	var img = new fabric.Image(image, {
		left: 0,
		top: 0,
		width: 100,
		height: 100,
		backgroundColor: '#' + getRandomColor(),
		data: data,
	}).scale(1).setCoords();
	img.toObject = (function (toObject) {
		return function () {
			return fabric.util.object.extend(toObject.call(this), {
				data: this.data
			});
		};
	})(img.toObject);
	canvas.add(img);
	canvas.setActiveObject(img);
	ctx.clearRect(0, 0, canvas1.width, canvas1.height);
	setActiveProp('transparentCorners', true);
}

// register and create function for gtoolbar button
$(function() {
	$(".jsoneditor-tree").css({"max-height":"400px"})
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
	registerButton($('#toolbar-datatext'), function() {
		var dataText = new fabric.Textbox('data textbox', {
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
			data: {
				arg: 'random',
				text: [{
					type: '',
					content: 'Data text'
				}]
			}
		});
		this.data = dataText.data;
		dataText.toObject = (function (toObject) {
			return function () {
				return fabric.util.object.extend(toObject.call(this), {
					data: dataText.data
				});
			};
		})(dataText.toObject);
		canvas.add(dataText);
		canvas.setActiveObject(dataText);
	});
	registerButton($('#toolbar-new-image'), function() {
		fabric.Image.fromURL('https://via.placeholder.com/100?text=image', function (img) {
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
	registerButton($('#toolbar-dataimage'), function(event) {
		addImage('Data image')
	});

	registerButton($('#profile-image'), function() {
		var data = {arg: "profile",filter: ""};
        addImage('Avatar' , data);
	});

	registerButton($("#toolbar-undo"), function() {
		undo();
	});
	registerButton($("#toolbar-redo"), function() {
		redo();
	});

	registerButton($("#toolbar-circle"), function() {
            // insert circle
        });

	// common tool
	registerButton($("#toolbar-send-backward"), function() {
		var activeObject = canvas.getActiveObject();
		if (activeObject) {
			canvas.sendBackwards(activeObject);
		}
	});

	registerButton($("#toolbar-bring-forward"), function() {
		var activeObject = canvas.getActiveObject();
		if (activeObject) {
			canvas.bringForward(activeObject);
		}
	});

	// movement
	registerToggleButton($("#toolbar-lockmovement"), function() {
		setActiveProp('lockMovementX', true);
		setActiveProp('lockMovementY', true);
	}, function() {
		setActiveProp('lockMovementX', false);
		setActiveProp('lockMovementY', false);
	});

	registerToggleButton($("#toolbar-verticalmovement"), function() {
		setActiveProp('lockMovementX', true);
	}, function() {
		setActiveProp('lockMovementX', false);
	});

	registerToggleButton($("#toolbar-horizonalmovement"), function() {
		setActiveProp('lockMovementY', true);
	}, function() {
		setActiveProp('lockMovementY', false);
	});
	

	// scaling
	registerToggleButton($("#toolbar-verticalscaling"), function() {
		setActiveProp('lockScalingX', true);
	}, function() {
		setActiveProp('lockScalingX', false);
	});
	registerToggleButton($("#toolbar-horizonalscaling"), function() {
		setActiveProp('lockScalingY', true);
	}, function() {
		setActiveProp('lockScalingY', false);
	});
	registerToggleButton($("#toolbar-scaletoresize"), function() {
		console.log("Change scaleToResize to true");
		canvasLayout.scaleToResize = true;
	}, function() {
		console.log("Change scaleToResize to false");
		canvasLayout.scaleToRezise = false;
		console.log(canvasLayout.scaleToRezise)
	});


	registerToggleButton($("#toolbar-lockrotation"), function() {
		setActiveProp('lockRotation', true);
	}, function() {
		setActiveProp('lockRotation', false);
	});

	registerToggleButton($("#toolbar-lockrotation-flip"), function() {
		setActiveProp('lockScalingFlip', true);
	}, function() {
		setActiveProp('lockScalingFlip', false);
	});

	// data object
	registerButton($("#toolbar-newdata"), function() {
		var activeObject = canvas.getActiveObject();
		if ('data' in activeObject) {
			alert('object already have data');
		} else {
			if (activeObject.type == 'textbox') {
				var data = {
					arg: 'random',
					text: [{
						type: '',
						content: 'Data text'
					}]
				};
			}
			if (activeObject.type == 'image') {
				var data = {
					arg: "random",
					filter: "",
					image: [{
						type: "",
						content: "url-image"
					}] 
				};
			}
			canvasLayout.hasData = true;
			setAttr('data' , data , activeObject);
			editor.set(JSON.parse(JSON.stringify(activeObject)));
		}
	});
	/*registerButton($("#toolbar-editdata"), function() {

	});*/
	registerButton($("#toolbar-deletedata"), function() {
		delete canvas.getActiveObject()['data'];
		canvas.renderAll();
		saveJson();
		canvasLayout.hasData = false;
		editor.set(JSON.parse(JSON.stringify(activeObject)));
	});

	/* --- color picker --- */
	$("#color-picker").colpick({
		colorScheme:'dark',
		onChange:function(hsb,hex,rgb,el,bySetColor) {
			$(el).val('#'+hex);
			setActiveProp('fill', '#'+hex);
		},
		onSubmit:function(hsb,hex,rgb,el,bySetColor) {
			$(el).val('#'+hex);
			$(el).colpickHide();
			setActiveProp('fill', '#'+hex);
		}
	});
	$("#background-color-picker").colpick({
		colorScheme:'dark',
		onChange:function(hsb,hex,rgb,el,bySetColor) {
			$(el).val('#'+hex);
			setActiveProp('backgroundColor', '#'+hex);
		},
		onSubmit:function(hsb,hex,rgb,el,bySetColor) {
			$(el).val('#'+hex);
			$(el).colpickHide();
			setActiveProp('backgroundColor', '#'+hex);
		}
	});

	// end common tool
	// textbox editor tool
	registerToggleButton($("#toolbar-bold"), function() {
            setActiveStyle('fontWeight' , 'bold');
        }, function() {
            setActiveStyle('fontWeight' , '');
        });

	registerToggleButton($("#toolbar-italics"), function() {
            
        }, function() {
            
        });
	registerToggleButton($("#toolbar-underline"), function() {
            
        }, function() {
            
        });
	registerToggleButton($("#toolbar-strikethrough"), function() {
            
        }, function() {
            
        });
	registerToggleButton($("#toolbar-alignleft"), function() {
            
        }, function() {
            
        });
	$(document).on('change', '.range-style', function(event) {
		event.preventDefault();
		/* Act on the event */
		canvasLayout.textbox[$(this).attr('prop')] = $(this).val();
		setActiveStyle($(this).attr('prop') , $(this).val());
	});
	// end textbox editor tool

});

(function(global) {

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function pad(str, length) {
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  var getRandomInt = fabric.util.getRandomInt;
  function getRandomColor() {
    return (
      pad(getRandomInt(0, 255).toString(16), 2) +
      pad(getRandomInt(0, 255).toString(16), 2) +
      pad(getRandomInt(0, 255).toString(16), 2)
    );
  }

  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomLeftTop() {
    var offset = 50;
    return {
      left: fabric.util.getRandomInt(0 + offset, 700 - offset),
      top: fabric.util.getRandomInt(0 + offset, 500 - offset)
    };
  }

  var supportsInputOfType = function(type) {
    return function() {
      var el = document.createElement('input');
      try {
        el.type = type;
      }
      catch(err) { }
      return el.type === type;
    };
  };

  var supportsSlider = supportsInputOfType('range'),
      supportsColorpicker = supportsInputOfType('color');

  global.getRandomNum = getRandomNum;
  global.getRandomInt = getRandomInt;
  global.getRandomColor = getRandomColor;
  global.getRandomLeftTop = getRandomLeftTop;
  global.supportsSlider = supportsSlider;
  global.supportsColorpicker = supportsColorpicker;
  global.capitalize = capitalize;

})(this);
