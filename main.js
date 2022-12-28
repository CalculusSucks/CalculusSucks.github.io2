	    var dragging = false; 
      document.addEventListener("DOMContentLoaded", function () {
        const ele = document.getElementsByClassName("wrapperC")[0];
        ele.style.cursor = "grab";

	 dragging = false;      
	   console.log(dragging)    
        let pos = { left: 0, x: 0 };

        const mouseDownHandler = function (e) {
          ele.style.cursor = "grabbing";
          ele.style.userSelect = "none";

          pos = {
            left: ele.scrollLeft,
            // Get the current mouse position
            x: e.clientX
          };

          document.addEventListener("mousemove", mouseMoveHandler);
          document.addEventListener("mouseup", mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
          // How far the mouse has been moved
          const dx = e.clientX - pos.x;
	  dragging = true;
		 console.log(dragging)
          // Scroll the element
          ele.scrollLeft = pos.left - dx;
        };

        const mouseUpHandler = function () {
          ele.style.cursor = "grab";
          ele.style.removeProperty("user-select");
		
	  setTimeout(function(){dragging = false; console.log(dragging)}, 500);
	  
          document.removeEventListener("mousemove", mouseMoveHandler);
          document.removeEventListener("mouseup", mouseUpHandler);
        };

        // Attach the handler
        ele.addEventListener("mousedown", mouseDownHandler);
      });
