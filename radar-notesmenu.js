(function() {
	
const template = document.createElement('template');
template.innerHTML = ` 

<style>
body {font-family: Arial, Helvetica, sans-serif;}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  width:720px;
height:550px;  
  font-family:roboto;
  border:thin solid silver;
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

<div id='myModal' class = 'modalx'>
	<div class = 'modal-content'>
	
		<span style = "color:gray;">Save an Entry to My Notes/Log<br /><br />
		
		
		 <image src = 'description-42px.svg' 'height = 42px width =  42px />&nbsp;&nbsp;&nbsp;&nbsp;<span>Type Text Note</span><br /><br />
		 
		 <image src = 'volume_down-42px.svg' height = 42px width =  42px />&nbsp;&nbsp;&nbsp;&nbsp;<span>Record Voice Memo</span><br /><br />
		 
		 <image src = 'local_see-42px.svg' 'height = 42px width =  42px />&nbsp;&nbsp;&nbsp;&nbsp;<span>Take A Photograph</span><br /><br />
		 
		 <image src = 'videocam-42px.svg' 'height = 42px width =  42px />&nbsp;&nbsp;&nbsp;&nbsp;<span> Record A video</span> 
		 
		  <hr>
		  
		  <image src = 'videocam-42px.svg' 'height = 42px width =  42px />&nbsp;&nbsp;&nbsp;&nbsp;<span style = "color:#4D148C;" onclick = "document.getElementById('myflights').style.display = 'none';document.getElementById('showmenu').style.display = 'block';cursor:pointer;"> Send or Save an Entry</span> 
		 
		  
		 
		

	</div>
</div>`  
	 
 
class notesmenu extends HTMLElement {
	
	constructor() {
    super();
		//this.attachShadow({mode: 'open'});
		//this.shadowRoot.appendChild(template.content.cloneNode(true));
		//simplified...create the shadow and add content all in one:
		
		const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));
		
		 
		
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
	
	window.customElements.define('radar-notesmenu', notesmenu);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE