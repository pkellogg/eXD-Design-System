//UTILITY SCRIPTS FOR DESIGN SYSTEM IDE
//3-27-2018 
//PRK 
//called by the ok button in property sheet.  This also uses the global cc which is the color selected from the picker


//ATTRIBUTES
function elementStyle(fxwidth,fxheight,fxbackcolor,fxzindex,fxopacity,fxsize,fxcolor,fxselelement) { 
//alert("pat");
 
document.getElementById(fxselelement).setAttribute("width", fxwidth);
document.getElementById(fxselelement).setAttribute("height", fxheight);
document.getElementById(fxselelement).setAttribute("c", cc);
document.getElementById(fxselelement).setAttribute("layer", fxzindex);
document.getElementById(fxselelement).setAttribute("trans", fxopacity);
document.getElementById(fxselelement).setAttribute("size", fxsize);   
document.getElementById(fxselelement).setAttribute("textcolor", vv);

}

//TABS	
$( function() {
    $( "#tabs" ).tabs();
  } );

//SELECTIONS
//Called from inline script in each element with a click on the object  
function myFunction(xx) {
 
document.getElementById("trashcan").innerHTML = $(xx).attr('id');
document.getElementById("selecteditem").innerHTML = "<span style='color:white;'>ID:</span>" + " " + $(xx).attr('id');
yy = null;
yy = $(xx).attr('id');
console.log(yy);
jimmy = document.getElementById(yy);
if(yy.length > 15)
{
	if(jimmy.style.border === 'none'){
        jimmy.style.border = "dotted thick red";
		} else {
			jimmy.style.border = "none";  
	    }
}
hhh =  jimmy.innerText;
 
//ddd = document.getElementById(setTitle0);
 
//hhh = ddd.innerHTML;
//console.log(hhh);
//alert(/[A-Z]/.test(str));

uu = document.getElementById('trashcan').innerText;
//document.getElementById(yy).style.border = 'medium dotted green';
}

//called from clicking the ok button in the size property sheet
//yy = selected item coming from myFunction
function setsize(pp , kk){
//$("#fxheaderid").width(tt);
//alert("setsize");
$( '#' + yy ).width(pp);
$( '#' + yy ).height(kk);
oo =  yy;
 
//document.getElementById("fxheaderid").style.border = "none";
document.getElementById(oo).style.border = "none";
 
}
 
(function( $ ) {
    'use strict';
})( jQuery );     //protects the jquery shorthand selector $ namespace from other who use it 

var droptarget  //declares a global variable.  It must be declared outside a function to be global 
var mdlGrid

function buildGrid(){
//$("body").append('<DIV class="content-grid mdl-grid" id="mdlGrid"><div id="stuff8" class="mdl-cell mdl-cell--12-col tom paul"></div><div id="stuff9" class="mdl-cell mdl-cell--6-col tom paul" ></div><div id="stuff10" class="mdl-cell mdl-cell--6-col tom paul"></div><div id="stuff"  class="mdl-cell mdl-cell--5-col tom paul" ></div><div id="stuff2" class="mdl-cell mdl-cell--4-col tom paul"></div><div id="stuff3" class="mdl-cell mdl-cell--3-col tom paul"></div><div id="stuff4" class="mdl-cell mdl-cell--5-col tom paul"></div><div id="stuff5" class="mdl-cell mdl-cell--2-col tom paul"></div><div id="stuff6" class="mdl-cell mdl-cell--2-col tom paul"></div><div id="stuff7" class="mdl-cell mdl-cell--3-col tom paul"></div>');
location.reload();
} 

function grid(){
if($('#gridCheck').prop('checked'))
{
buildGrid();
}
else
{
mdlGrid = $('#mdlGrid').remove();
}

}

function toggleDisplay(divId) {
 $("#"+divId).toggle();
}

//TOOLTIPS
 //$( function() {

     //$( document ).tooltip();

   //} );

/*$( function() {

    $( document ).tooltip({
		items: "img, [data-geo], [title]",
		content: function() {
		var element = $( this );
		if ( element.is( "[data-geo]" ) ) {
			return "<img src='header.png'><br/><div style='font-size:12px;padding:10px;);'>This is a header.  It's a new HTML 5 tag and can be used in any section on the page. While it's most often used at the top of a section, it can be used within the body of a section. Click on the text to add your own title.</div>";
			}
		}
	});
	} );*/
	
//jQUERY MENU
$( function() {

    $( "#menu" ).menu();

  } );
  
var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;

function jsddm_open()
{  jsddm_canceltimer();
   jsddm_close();
   ddmenuitem = $(this).find('ul').css('visibility', 'visible');}

function jsddm_close()
{  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{  closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{  if(closetimer)
   {  window.clearTimeout(closetimer);
      closetimer = null;}}

$(document).ready(function()
{  $('#jsddm > li').bind('mouseover', jsddm_open)
   $('#jsddm > li').bind('mouseout',  jsddm_timer)});

document.onclick = jsddm_close;

$( init );

function init() {
	 
$('#cardIcon').draggable( {
 cursor: 'move',
 helper:cardHelper
  }) 

$('#imageIcon').draggable( {
 cursor: 'move',
 helper:imageHelper
  })
  
$('#divIcon').draggable( {
 cursor: 'move',
 helper:divHelper
  })
  
$('#genericButtonIcon').draggable( {
 cursor: 'move',
 helper:genericButtonHelper
  })
  
$('#headericon').draggable( {
 cursor: 'move',
 helper:headerHelper
  })  
  
$('#buttonicon').draggable( {
 cursor: 'move',
 helper:buttonHelper
  })
  
$('#switchicon').draggable( {
 cursor: 'move',
 helper:mdlSwitchHelper
  })
  
  $('#slidericon').draggable( {
 cursor: 'move',
 helper:mdlSliderHelper
  })
  
$('#paragraphicon').draggable( {
 cursor: 'move',
 helper:paragraphHelper
  })
  
$('#checkboxicon').draggable( {
 cursor: 'move',
 helper:checkboxHelper
  })
  
  $('#radioicon').draggable( {
 cursor: 'move',
 helper:radioHelper
  })
  
  $('#tableicon').draggable( {
 cursor: 'move',
 helper:tableHelper
  })
  
   $('#dropmenuicon').draggable( {
 cursor: 'move',
 helper:dropMenuHelper
  })
  
  $('#navlisticon').draggable( {
	cursor: 'move',
	helper:navlistHelper
	})
  
$('#leaderboardicon').draggable( {
	cursor: 'move',
	helper:navlistHelper
	})
	
$('#listcardicon').draggable( {
	cursor: 'move',
	helper:listcardHelper
	})
	
$('#symcurlocicon').draggable( {
	cursor: 'move',
	helper: symcurlocHelper
	})
	
	$('#tabicon').draggable( {
	cursor: 'move',
	helper: tabHelper
	})
	
//GET ID OF DROP TARGET AND HIGHLIGHT DROPTARGET BORDER IN RED 
 $(function() {
$("body").droppable({
     over: function(event, ui) {
     $('#display').html( 'body' );
     droptarget =  document.getElementById('display').innerHTML;
	 }
});
}); 

//OVER 
$(function() {

$(".mdl-cell").droppable({
     over: function(event, ui) {
	 $('#display').html( this.id ).prepend("#");
     droptarget =  document.getElementById('display').innerHTML;
	 nn = this.id;
	 //alert(nn);
	 //document.getElementById(nn).style.border = "thin red solid";
	 console.log(droptarget);
	  
}
});
});

//OUT 
$(function() {
$(".mdl-cell").droppable({
     out: function(event, ui) {
	 nn = this.id;
	 document.getElementById(nn).style.border = "thin gray solid";
	  
	  
	 }
});
});  
$('body').droppable({drop: handleDropEvent});
}  //init




 
 
 