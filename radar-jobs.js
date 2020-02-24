(function() {
	
const template = document.createElement('template');
template.innerHTML = ` 

<style>


.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 85%;
  height:400px;
  font-family:roboto;
}

 
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
						  #gallery { float: left; width: 65%; min-height: 12em; }
						  .gallery.custom-state-active { background: #eee; }
						  .gallery li { float: left; width: 96px; padding: 0.4em; margin: 0 0.4em 0.4em 0; text-align: center; }
						  .gallery li h5 { margin: 0 0 0.4em; cursor: move; }
						  .gallery li a { float: right; }
						  .gallery li a.ui-icon-zoomin { float: left; }
						  .gallery li img { width: 100%; cursor: move; }
						 
						  #load { float: right;   min-height: 12em; padding: 1%; }
						  #load h4 { line-height: 16px; margin: 0 0 0.4em; }
						  #load h4 .ui-icon { float: left; }
						  #load .gallery h5 { display: none; }
						  
						  #gate { float: right;   min-height: 12em; padding: 1%; }
						  #gate h4 { line-height: 16px; margin: 0 0 0.4em; }
						  #gate h4 .ui-icon { float: left; }
						  #gate .gallery h5 { display: none; }
						  
						  #slide { float: right;   min-height: 12em; padding: 1%; }
						  #slide h4 { line-height: 16px; margin: 0 0 0.4em; }
						  #slide h4 .ui-icon { float: left; }
						  #slide .gallery h5 { display: none; }
						  
						  #drivers { float: right;   min-height: 12em; padding: 1%; }
						  #drivers h4 { line-height: 16px; margin: 0 0 0.4em; }
						  #drivers h4 .ui-icon { float: left; }
						  #drivers .gallery h5 { display: none; }
						  </style>
						  
						  
<div id='myModal'>
	<div class = 'modal-content'>
	
	 <p id="demo">This is demo</p>
	<div class="ui-widget ui-helper-clearfix">
						 
		<ul id="gallery" class="gallery ui-helper-reset ui-helper-clearfix"> 
			<li style = "width:400px;font-weight:bold;text-shadow:none;">Unassigned</li>
						  
			<li class="ui-widget-content ui-corner-tr  droppableShape ">
				<h5 >Anthony</h5>
					<img src="personA.png" alt="Anthony" width="96" height="72" />
						<a href="link/to/trash/script/when/we/have/js/off" title="Delete this image" class="ui-icon ui-icon-trash">Delete image</a> 
			</li>
	    </ul>
		
		<input type="button" value="Save" style="float:right;height:35px;width:80px;">
		<input type="button" id= 'myClose'   onclick = "document.getElementById('myjobs').style.display = 'none';" value="Cancel" style="float:right;height:35px;margin-right:10px;width:80px;"><br /><br /><br />
	</div> 
	
	
	
	
		 
	</div>
</div>` 

						
class radarjobs extends HTMLElement {
	
	constructor() {
    super();
		 const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));
		}
	
	connectedCallback() {
		//const jasonRequest = this.getAttribute('dbRequest');
		//this.shadowRoot.querySelector('#primarybutton').innerHTML = mycaption;
		//alert(whattodo);
		
		// Get the modal
var modal = this.shadowRoot.querySelector("#shown");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
 
  
// Get the <span> element that closes the modal
var span = document.getElementById("myFlights");

// When the user clicks on <span> (x), close the modal
 span.onclick = function() {
	 
   modalx.style.display = "none";
 }

// When the user clicks the button, open the modal 
btn.onclick = function() { 
 alert("open");
  modalx.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalx.style.display = "none";
  }
}
	updateStylePrimaryButton(this); 




// There's the gallery and the trash
							var $gallery = $( "#gallery" ),
							  $load = $( "#load" );
							  $gate = $( "#gate" );
							  $slide = $( "#slide" );
							  $drivers = $( "#drivers" );
							 
							 // Let the gallery items be draggable
							$( "li", $gallery ).draggable({
							  cancel: "a.ui-icon", // clicking an icon won't initiate dragging
							  revert: "invalid", // when not dropped, the item will revert back to its initial position
							  containment: "document",
							  helper: "clone",
							  cursor: "move"
							});
							
							// Let load be droppable, accepting the gallery items
							$load.droppable({
							accept: "#gallery > li",
							drop: function( event, ui ) {
							deleteImageLoad( ui.draggable );
							  }
							});
						 
							// Let gate be droppable, accepting the gallery items
							$gate.droppable({
							accept: "#gallery > li",
							drop: function( event, ui ) {
							deleteImage( ui.draggable );
							  }
							});
							
							//Let slide be droppable, accepting the gallery items
							$slide.droppable({
							accept: "#gallery > li",
							drop: function( event, ui ) {
							deleteImageSlide( ui.draggable );
							  }
							});
							
							//Let drivers be droppable, accepting the gallery items
							$drivers.droppable({
							accept: "#gallery > li",
							drop: function( event, ui ) {
							deleteImageDrivers( ui.draggable );
							  }
							});
							
			                // Let the gallery be droppable as well, accepting items from gate
							$gallery.droppable({
							  accept: ".droppableShape",
							  drop: function( event, ui ) {
							  recycleImage( ui.draggable );
							  }
							});
							
							// Image deletion function load
							var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
							function deleteImageLoad( $item ) {
							  $item.fadeOut(function() {
								var $list = $( "ul", $load ).length ?
								  $( "ul", $load ) :
								  $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $load );
						 
								$item.find( "a.ui-icon-trash" ).remove();
								$item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
								  $item
									.animate({ width: "48px" })
									.find( "img" )
									  .animate({ height: "36px" });
								});
							  });
							}    
							
							// Image deletion function gate
							var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
							function deleteImage( $item ) {
							  $item.fadeOut(function() {
								var $list = $( "ul", $gate ).length ?
								  $( "ul", $gate ) :
								  $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $gate );
						 
								$item.find( "a.ui-icon-trash" ).remove();
								$item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
								  $item
									.animate({ width: "48px" })
									.find( "img" )
									  .animate({ height: "36px" });
								});
							  });
							}
							
							// Image deletion function slide
							var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
							function deleteImageSlide( $item ) {
							  $item.fadeOut(function() {
								var $list = $( "ul", $slide ).length ?
								  $( "ul", $slide ) :
								  $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $slide );
						 
								$item.find( "a.ui-icon-trash" ).remove();
								$item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
								  $item
									.animate({ width: "48px" })
									.find( "img" )
									  .animate({ height: "36px" });
								});
							  });
							}
							
							// Image deletion function drivers
							var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
							function deleteImageDrivers( $item ) {
							  $item.fadeOut(function() {
								var $list = $( "ul", $drivers ).length ?
								  $( "ul", $drivers ) :
								  $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $drivers );
						 
								$item.find( "a.ui-icon-trash" ).remove();
								$item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
								  $item
									.animate({ width: "48px" })
									.find( "img" )
									  .animate({ height: "36px" });
								});
							  });
							}
							
							// Image recycle function
							var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
							function recycleImage( $item ) {
							  $item.fadeOut(function() {
								$item
								  .find( "a.ui-icon-refresh" )
									.remove()
								  .end()
								  .css( "width", "96px")
								  .append( trash_icon )
								  .find( "img" )
									.css( "height", "72px" )
								  .end()
								  .appendTo( $gallery )
								  .fadeIn();
							  });
							}
						 
							// Image preview function, demonstrating the ui.dialog used as a modal window
							function viewLargerImage( $link ) {
							  var src = $link.attr( "href" ),
								title = $link.siblings( "img" ).attr( "alt" ),
								$modal = $( "img[src$='" + src + "']" );
						 
							  if ( $modal.length ) {
								$modal.dialog( "open" );
							  } else {
								var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
								  .attr( "src", src ).appendTo( "body" );
								setTimeout(function() {
								  img.dialog({
									title: title,
									width: 400,
									modal: true
								  });
								}, 1 );
							  }
							}
						 
							// Resolve the icons behavior with event delegation
							$( "ul.gallery > li" ).on( "click", function( event ) {
							  var $item = $( this ),
								$target = $( event.target );
						 
							  if ( $target.is( "a.ui-icon-trash" ) ) {
								deleteImage( $item );
							  } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
								viewLargerImage( $target );
							  } else if ( $target.is( "a.ui-icon-refresh" ) ) {
								recycleImage( $item );
							  }
						 
							  return false;
							});	
	}  //end connectedCallback 
	
	
	
	
	disconnectedCallback() {
	}
	
	static get observedAttributes() {return ['xpos', 'ypos', 'width', 'c', 'layer', 'trans', 'size', 'textcolor', 'family']; }	
	
	attributeChangedCallback(name, oldValue, newValue) {
		if(name == "c2" && newValue == "orange"){
			document.querySelector('#feedback').innerHTML = "Welcome Fed<span style='color:orange;'>Ex!";
		} 
		
		if(name == "c2" && newValue !== "orange"){
			document.querySelector('#feedback').innerHTML = "You are not FedEx!";
		} 
		 updateStyleTable(this);
	}	
} //class definition

	 

	function updateStyleTable(elem) {
		var shadow = elem.shadowRoot;
		var childNodes = shadow.childNodes;
		
                                                      //var childNodes = elem.childNodes;
		for(var i = 0; i < childNodes.length; i++) 	{
			if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
				childNodes[i].textContent = '.fxlistclass {' +
				    ' left: '             + elem.getAttribute('xpos') + 'px;' +
					' top: '              + elem.getAttribute('ypos') + 'px;' +
					' width: '            + elem.getAttribute('width') + 'px;' +     
                    ' background-color: ' + elem.getAttribute('c') + ';' +  
					' z-index: '          + elem.getAttribute('layer') + ';' +  
					' opacity: '          + elem.getAttribute('trans') + ';' +				  
                    ' font-size: '        + elem.getAttribute('size') + 'px;' + 
                    ' color: '            + elem.getAttribute('textcolor') + ';' + 
					' font-family: '      + elem.getAttribute('family') + ';' + '}'  
					
			}
		}  
	}  
	
	window.customElements.define('radar-jobs', radarjobs);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE




 
 
						  
				 
						     
						 
							
						 
						 
						 
						 