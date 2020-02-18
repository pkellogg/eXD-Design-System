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
	<div class = 'modal-content'>
		<p id="demo">This is demo</p>
		<input type="button" value="Save" style="float:right;height:35px;width:80px;">

		<input type="button" id= 'myClose'   onclick = "document.getElementById('myflights').style.display = 'none';" value="Cancel" style="float:right;height:35px;margin-right:10px;width:80px;"><br /><br /><br /> 

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
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  }, 
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  },
 
 {show: "<input   type='checkbox' style = 'width:30px;height:30px;' id='vehicle1' name='vehicle1' value='Bike'>",flight:"721", market: "SJU", tail: "858",gate: "383",depart: "20:05"  }
  
 ];

var txt = "";
txt +=  "<div style='padding-top:15px;background-color:#4D148C;width:100%;height:60px;color:white;font-family:roboto;font-size:38px;font-weight:bold;text-align:center;'>Flights Shown</div><table   style='font-family:roboto;width:100%;text-align:center;'><tr><th>Show</th><th>Flight #</th><th>Market</th><th>Tail #</th><th>Gate #</th><th>Departure</th></tr>"
	
	 for (x in myObj) {
       txt += "<tr>" + "<td>" + myObj[x].show + "</td>" + "<td>" + myObj[x].flight + "</td>" + "<td>" + myObj[x].market + "</td>" + "<td>" + myObj[x].tail + "</td>" + "<td>" + myObj[x].gate + "</td>" + "<td>" + myObj[x].depart + "</td>" + "</tr>";
    }
   
    txt += "</table>" 
	 
class radarflights extends HTMLElement {
	
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
	
	window.customElements.define('radar-flights', radarflights);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE