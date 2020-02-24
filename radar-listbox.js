(function() {
	
const template = document.createElement('template');
template.innerHTML = `

<style>
 

.highlightrows {
	background-color:white;
	color:black;
	}.

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
 
{icon1: " <image src = 'pencil.png' /> ", content: "This is where the note goes that the user has entrered.  This is where the note goes that the user has entrered. This is where the note goes that the user has entrered." , time : "18:50"},

{icon1: " <image src = 'pencil.png' /> ", content: "This is where the note goes that the user has entrered." , time : "18:50"}, 

{icon1: " <image src = 'pencil.png' /> ", content: "This is where the note goes that the user has entrered." , time : "18:50"},

{icon1: " <image src = 'pencil.png' /> ", content: "This is where the note goes that the user has entrered.  This is where the note goes that the user has entrered. This is where the note goes that the user has entrered." , time : "18:50"},

{icon1: " <image src = 'pencil.png' /> ", content: "This is where the note goes that the user has entrered." , time : "18:50"}, 

{icon1: " <image src = 'pencil.png' /> ", content: "This is where the note goes that the user has entrered." , time : "18:50"}  
]

 var txt = "";
txt += "<div class = 'wrap' style = 'display:grid;grid-template-columns: fl fl fl;margin:auto;padding-top:20px;padding-bottom:20px;'>" 
	
	 for (x in myObj) {
       txt += "<div class = 'listitemicons'  style = 'grid-column:1;border-bottom:solid 1px silver;'>" + myObj[x].icon1 + "<br />" + myObj[x].icon1 + "</div>" + "<div id = 'listitemcontent'  style = 'grid-column:2;border-bottom:solid 1px silver;padding-left:20px;padding-bottom:20px;padding-right:10px;'>" + myObj[x].content + "</div>" + "<div id = 'listitemtime'  style = 'grid-column:3;border-bottom:solid 1px silver;'>" +
	   myObj[x].time + "</div>" ;    
    }
   
    txt += "</div>" 
	
 class radarlistbox extends HTMLElement {
	
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
	
	window.customElements.define('radar-listbox', radarlistbox);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE





 