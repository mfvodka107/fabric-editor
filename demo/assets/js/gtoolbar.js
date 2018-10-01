  $(function() {
    console.log('loading Gtoolbar');
    /* --- sample event handlers for toolbar buttons --- */
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