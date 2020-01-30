(function() {
	
const template = document.createElement('template');
template.innerHTML = `

<style>
 

.highlightrows {
	background-color:white;
	color:black;
	}

.highlightrowsblue {
	background-color:slateblue;
	color:white;
	}
</style>

 

<p id="demo">This is demo</p>
<p id="demo2" style="position:absolute;left:270px;top:65px;">This is demo2</p>
` 

var jasonRequest, xhttp, myObj, x, txt = "";
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
myObj = JSON.parse(this.responseText);
   }
};
xhttp.open("GET", " + jasonRequest + ", true);
xhttp.send();
 
myObj = [
        {pic: "faar-region.html", xxx: "OLVVK - Southeast"},
		{pic: "faar-district.html", xxx: "OLVWK - Delta"},
		{pic: "faar-station.html", xxx: "OLVA"},
		{pic: "faar-region.html", xxx: "WESVK-AGFS Western"},
		{pic: "faar-region.html", xxx: "RECVK - Brazil"},
		{pic: "faar-region.html", xxx: "CANVK - Canada"},
		{pic: "faar-region.html", xxx: "EURVK - France"},
		{pic: "faar-region.html", xxx: "EWRVK - Northeast"},
		{pic: "faar-region.html", xxx: "PACVK - South Pacific"},
		];

var txt = "";
txt += "<UL class='fxlistclass' style='list-style: none;position:relative;padding:0px;font-family:roboto;width:800px;'>"
	
	 for (x in myObj) {
       txt += "<li class = 'highlightrows' style='text-decoration: none;list-style: none;border:none;position:relative;cursor:pointer;'>" + "<a href = " + myObj[x].pic + ">" + myObj[x].xxx + "</a>"   + "</li>"}
       txt += "</UL>" 
 
class faarsimplelistbox extends HTMLElement {
	
	constructor() {
    super();
		//this.attachShadow({mode: 'open'});
		//this.shadowRoot.appendChild(template.content.cloneNode(true));
		//simplified...create the shadow and add content all in one:
		
		const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));;
		
		//Remember..attachShadow just creates an EMPTY shadow-root.  You must append the shadow tree content nodes. 
		this.shadowRoot.querySelector('#demo').innerHTML = txt; 
		this.shadowRoot.querySelector('#demo2').innerHTML = txt;;
		
		var items = this.shadowRoot.querySelectorAll('.highlightrows');
			for (var i = 0; i < items.length; i++) {
				 items[i].addEventListener('click', function() {
					 
					//alert("Hello World!"); 
					 //this .innerhtml = "hi pat";
					 //window.location.assign("01-EmployeeDetails.html")
                     this .shadowRoot.classList.toggle('highlightrowsblue');
				});	 					
			};
	}
	
	connectedCallback() {
	const jasonRequest = this.getAttribute('dbRequest'); //the db php request
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
	
	window.customElements.define('faar-simplelistbox', faarsimplelistbox);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE





 