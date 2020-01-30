(function() {
	
const template = document.createElement('template');


template.innerHTML = `

<style>
:root {
--row-bg-color:#00cc00;
}

.fxtableclass {font-family: roboto;}

.bg{
background-color:#ff0000 !important;
}

.mystyle {
background-color:var(--row-bg-color);
}

th {
	color:white;
} 

.highlightrows {background-color:white;color:black;}

.highlightrowsblue {background-color:slateblue;color:white;}
</style>


	 
	 <p id="demo">This is demo</p>` 
	 
var jasonRequest, xhttp, myObj, x, txt = "";
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
myObj = JSON.parse(this.responseText);
   }
};
xhttp.open("GET", " + jasonRequest + ", true);
xhttp.send();
	 
myObj = [{alphaid: "OLVK", numericid: "N/A" , address: "1790 Kirby Parkway<br />Memphis, TN 38138", director: "Patrick Elam<br />(901)224-3974"}];

var txt = "";
txt += "<table class='fxtableclass' style='text-align:center;border-collapse:collapse;font-family:roboto;position:absolute; top:300px;'>"

 
	
	txt += "<tr style='height:50px;'>" + "<th width = '100' align = 'left'>" + "Alpha ID" + "</th>" + "<th width = '100' align = 'left'>" + "Numeric ID" + "</th>" + "<th width = '180' align = 'left'>" + "Address" + "</th>" + "</tr>";
	
	for (x in myObj) {
       txt += "<tr class='highlightRows' style='height:80px;'>" + 
	   "<td align = 'left'>" + myObj[x].alphaid + "</td>" + 
	   "<td align = 'left'>" + myObj[x].numericid + "</td>" + 
	   "<td align = 'left'>" + myObj[x].address + "</td>" + 
	    "</tr>";}
   
    txt += "</table>" 
 
class faarstationtable extends HTMLElement {
	
	constructor() {
    super();
		//this.attachShadow({mode: 'open'});
		//this.shadowRoot.appendChild(template.content.cloneNode(true));
		//simplified...create the shadow and add content all in one:
		
		const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));
		
		//Remember..attachShadow just creates an EMPTY shadow-root.  You must append the shadow tree content nodes. 
		this.shadowRoot.querySelector('#demo').innerHTML = txt;;
		
		var items = this.shadowRoot.querySelectorAll('.highlightRows');
			for (var i = 0; i < items.length; i++) {
				 items[i].addEventListener('click', function() {
					//alert("Hello World!"); 
					$(this).toggleClass('highlightrows');
                    $(this).toggleClass('highlightrowsblue');
				});	 					
			};
	}
	
	connectedCallback() {
		const jasonRequest = this.getAttribute('dbRequest'); //php db request
		//this.shadowRoot.querySelector('#primarybutton').innerHTML = mycaption;
		//alert(whattodo);
	updateStylePrimaryButton(this);   
	}   
	
	disconnectedCallback() {
	}
	
	static get observedAttributes() {return ['xpos', 'ypos', 'width', 'c', 'layer', 'trans', 'size', 'textcolor', 'family', 'c2', 'textcolor2', 'trans2', 'size2', 'dosomething' ]; }	
	
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
				childNodes[i].textContent = '.fxtableclass {' +
				    ' left: '             + elem.getAttribute('xpos') + 'px;' +
					' top: '              + elem.getAttribute('ypos') + 'px;' +
					' width: '            + elem.getAttribute('width') + 'px;' +     
                    ' background-color: ' + elem.getAttribute('c') + ';' +  
					' z-index: '          + elem.getAttribute('layer') + ';' +  
					' opacity: '          + elem.getAttribute('trans') + ';' +				  
                    ' font-size: '        + elem.getAttribute('size') + 'px;' + 
                    ' color: '            + elem.getAttribute('textcolor') + ';' + 
					' font-family: '      + elem.getAttribute('family') + ';' + '}' +
					'th {' +
				    ' background-color: ' + elem.getAttribute('c2') + ';' +  
				    ' color: '            + elem.getAttribute('textcolor2') + ';' +  
				    ' opacity: '          + elem.getAttribute('trans2') + ';' + 
					' font-size: '        + elem.getAttribute('size2') + 'px;' + 
					'}' 
					
			}
		}  
	}  
	
	window.customElements.define('faar-stationtable', faarstationtable);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE