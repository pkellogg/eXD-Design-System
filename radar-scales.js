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

 

<p id="demo">This is demo</p>` 
	 
var obj, dbParam, xmlhttp, myObj, x, txt = "";
/*xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
myObj = JSON.parse(this.responseText);
obj = { table: "customers", limit: 20 };*/

//this is the json array
	 
myObj = [
 
 {scaleid: "S18-R3-SD01"},
 {scaleid: "S18-R3-SD02"},
 {scaleid: "S18-R3-SD03"},
 {scaleid: "S18-R3-SD04"},
 {scaleid: "S18-R3-SD05"},
 {scaleid: "S18-R3-SD06"}
 ];

var txt = "";
txt +=  "<div style='padding-top:15px;background-color:#4D148C;width:768px;height:60px;color:white;font-family:roboto;font-size:38px;font-weight:bold;text-align:center;'>Daily Scale Inspection</div><UL class='fxlistclass' style='list-style: none;position:relative;padding:0px;font-family:roboto;width:768px; '><li style='text-decoration: none;border:none;cursor:pointer;'>"
	
	 for (x in myObj) {
       txt += "<li class = 'highlightrows' style='text-decoration: none;list-style: none;border:none;position:relative;margin-bottom:30px;margin-top:20px;margin-left:30px;'>" + "<span style = 'font-weight:bold;font-size:32px;'>" + myObj[x].scaleid + "<button style = 'margin-left:20px;width:120px;height:30px;background-color: #4D148C;color:white;border-radius:7px;font-size:16px;'>Add Remarks</button>" + "</span>" +"<br /><label for = 'sticker'>Sticker</label><input type = 'checkbox' name = 'sticker' style= 'height:20px;width:20px;'><span style= 'margin-left:60px;'>ULD No. (or) Asset No. / Type</span><span style = 'margin-left:40px;'>Known lbs</span><label for = 'limits' style = 'margin-left:60px;'>Within Limits?</label><input type = 'checkbox' name = 'limits' style= 'height:20px;width:20px;'>" + "</li>" ;
    }
   
    txt += "</UL>" 
 
class radarscales extends HTMLElement {
	
	constructor() {
    super();
		//this.attachShadow({mode: 'open'});
		//this.shadowRoot.appendChild(template.content.cloneNode(true));
		//simplified...create the shadow and add content all in one:
		
		const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));;
		
		//Remember..attachShadow just creates an EMPTY shadow-root.  You must append the shadow tree content nodes. 
		this.shadowRoot.querySelector('#demo').innerHTML = txt;;
		
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
		const whattodo = this.getAttribute('dosomething');
		//this.shadowRoot.querySelector('#primarybutton').innerHTML = mycaption;
		//alert(whattodo);
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
	
	window.customElements.define('radar-scales', radarscales);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE





 