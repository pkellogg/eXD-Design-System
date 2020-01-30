(function() {
	
const template = document.createElement('template');
template.innerHTML = `<style>
body {font-family: Arial, Helvetica, sans-serif;}

 
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 250px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

 
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 50%;
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
</style>

<div id='myModal' class = 'modal'>
<div class = 'modal-content'>
    
<p style="font-size:22px;font-weight:bold;">Add Senior Manager Reporting Group</p>

<form action="/action_page.php">

Title<br />  
<input type="search" name="title" value="Type a title" style="height:40px;width:96%;border-radius:5px;font-size:14px;padding-left:20px;"><br><br />

Senior Manager<br />
<input type="search" name="title" value="Search people by name or employee ID..." style="height:40px;width:96%;border-radius:5px;font-size:14px;padding-left:20px;"><br><br />

<input type="button" value="Save" style="float:right;height:35px;width:80px;">

<input type="button" id= 'myClose'   value="Cancel" style="float:right;height:35px;margin-right:10px;width:80px;"><br /><br /><br /> 

</form> 
  
<span id= 'myClose' class = "close">&times;</span>
  
  </div>
</div>` 
	 
var obj, dbParam, xmlhttp, myObj, x, txt = "";
var jasonRequest, xhttp, myObj, x, txt = "";
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
myObj = JSON.parse(this.responseText);
   }
};
xhttp.open("GET", " + jasonRequest + ", true);
xhttp.send();
	 
class faaraddseniormanager extends HTMLElement {
	
	constructor() {
    super();
		//this.attachShadow({mode: 'open'});
		//this.shadowRoot.appendChild(template.content.cloneNode(true));
		//simplified...create the shadow and add content all in one:
		
		const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));;
		
		//Remember..attachShadow just creates an EMPTY shadow-root.  You must append the shadow tree content nodes. 
		 
		
		var items = this.shadowRoot.querySelectorAll('.highlightrows');
			for (var i = 0; i < items.length; i++) {
				 items[i].addEventListener('click', function() {
					 
					//alert("Hello World!"); 
					 //this .innerhtml = "hi pat";
					 window.location.assign("01-EmployeeDetails.html")
                     this .shadowRoot.classList.toggle('highlightrowsblue');
				});	 					
			};
	}
	
	connectedCallback() {
		const jasonRequest = this.getAttribute('dbRequest');
		//this.shadowRoot.querySelector('#primarybutton').innerHTML = mycaption;
		//alert(whattodo);
		
		// Get the modal
var modal = this.shadowRoot.querySelector("#myModal");

// Get the button that opens the modal
var btn = document.querySelector("#myBtn"); //the button is in light dom all the rest are shadow

// Get the <span> element that closes the modal
var span = this.shadowRoot.querySelector("#myClose");

// When the user clicks the button, open the modal 
btn.onclick = function() { 
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
	updateStylePrimaryButton(this);   
	}   
	
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

	function rowHigh() {
		  //alert("pat");
		//var items  = this.shadowRoot.querySelectorAll('tr.highlightrows');
		//this.shadowRoot.querySelector('#joe').style.backgroundColor = 'blue';	
	}

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
	
	window.customElements.define('faar-addseniormanager', faaraddseniormanager);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE