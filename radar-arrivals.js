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
  border: 1px solid #888;
  border-radius: 5px;
  width: 85%;
  height:100%;
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

<div id='myModal' class = 'modalx' ">
	<div class = 'modal-content' style = 'padding-left:20px;padding-right:20px;'>
		<p id="demo" >This is demo</p>
		<input type="button" value="Save" style="float:right;height:35px;width:80px;">

		<input type="button" id= 'myClose'   onclick = "document.getElementById('myarrivals').style.display = 'none';" value="Cancel" style="float:right;height:35px;margin-right:10px;width:80px;"><br /><br /><br /> 

	</div>
</div> 

`  
	 
var obj, dbParam, xmlhttp, myObj, x, txt = "";  
/*xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
myObj = JSON.parse(this.responseText);
obj = { table: "customers", limit: 20 };*/

//this is the json array
	 
myObj = [
 
 { flight:"252", origin: "SJU", arrive: "18:24" , misc: "8FDX/16PML/-PBY/9FRT/- DOC"},
 { flight:"431", origin: "LAX", arrive: "17:44" , misc: "3.5 FDX/ 19PML / 3.5 PBY / - FRT / - DOC"},
 { flight:"849", origin: "LAX", arrive: "17:39" , misc: "1FDX/36PML/ 4.5 PBY/- FRT/ - DOC"},
  ];
  
myObj2 = [
 
 { route:"HSV13", origin: "HSV", type: "Bulk" , arrive: "12:15",misc: "68FDX/- PML/- PBY/- FRT/- DOC"},
 { route:"MC709", origin: "MCI", type: "CVT" , arrive: "12:30",misc: "5FDX/- PML/- PBY/- FRT/- DOC"}, 
  ];

var txt = "";
txt +=  "<div style='padding-top:15px;background-color:#4D148C;width:100%;height:60px;color:white;font-family:roboto;font-size:38px;font-weight:bold;text-align:center;'>Last Arrivals Details</div><table   style='font-family:roboto;width:100%;text-align:left;padding-left:80px;padding-right:80px'><tr ><th style = 'color:gray;'>Flight #</th><th style = 'color:gray;'>Origin</th><th style = 'color:gray;'>Arriving</th></tr>"
	
	 for (x in myObj) {
       txt += "<tr style = 'font-weight:bold;'>" + "<td>" + myObj[x].flight + "<td>" + myObj[x].origin + "</td>" + "<td>" + myObj[x].arrive + "</td>" + "</tr>"  +
	   
	   "<tr style = 'font-size: 18px;'>" + "<td style = 'padding-left:30px;width:340px;'>" + myObj[x].misc + "</td>" + "</tr>";
    }
   
    txt += "</table>" 
	
	
	
txt +=  "<table   style='font-family:roboto;width:100%;text-align:left;padding-left:80px;padding-right:80px'><tr ><th style = 'color:gray;padding-top:40px;'>Route</th><th style = 'color:gray;padding-top:40px;'>Origin</th><th style = 'color:gray;padding-top:40px;'>Type</th><th style = 'color:gray;padding-top:40px;'>Arriving</th></tr>"
	
	 for (x in myObj2) {
       txt += "<tr style = 'font-weight:bold;'>" + "<td style = 'width:150px;'>" + myObj2[x].route + "<td>" + myObj2[x].origin + "</td>" + "<td>" + myObj2[x].type + "</td>" + "<td>" + myObj2[x].arrive + "</tr>"  +
	   
	   "<tr style = 'font-size: 18px;'>" + "<td style = 'padding-left:30px;width:300px;'>" + myObj2[x].misc + "</td>" + "</tr>";
    }
   
    txt += "</table>" 
	 
class radararrivals extends HTMLElement {
	
	constructor() {
    super();
		//this.attachShadow({mode: 'open'});
		//this.shadowRoot.appendChild(template.content.cloneNode(true));
		//simplified...create the shadow and add content all in one:
		
		const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));
		
		this.shadowRoot.querySelector('#demo').innerHTML = txt;;
		
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
	
	window.customElements.define('radar-arrivals', radararrivals);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE