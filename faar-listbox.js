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
 
 {lastname: "Senior Manager Group 1", firstname: "Ryan Adams" , greaterthansign: "&#xfe65;", city: "ryan.adams@fedex.com", state: "(555)123-4567", },
 
 {lastname: "Senior Manager Group 2", firstname: "Ryan Adams" , greaterthansign: "&#xfe65;", city: "name@fedex.com", state: "(555)123-4567" }
 
 /*{pic: " 'location.png' ", lastname: "Cambridge", firstname: "MA (#2837)" , city: "Managed by:", state: "Tran.", startdate:"Phong"},
 
 {pic: " 'manager.jpg' ", lastname: "Castalano", firstname: "Jose" , city: "Indianapolis,", state: "IN", startdate: "May 2011"}*/
 ];

var txt = "";
txt += "<UL class='fxlistclass' style='list-style: none;height:300px;position:relative;padding:0px;font-family:roboto;border-left:solid 1px silver;border-right:solid 1px silver;box-shadow: 5px 0px   11px 0px   silver;'>" 
	
	 for (x in myObj) {
       txt += "<li class = 'highlightrows' style='height:100px;text-decoration: none;list-style: none;border-top:solid 1px silver;border-bottom:solid 1px silver;position:relative;cursor:pointer;'>" + "<span style = 'position:absolute;top:20px;margin-left:20px;'>" + "<span style = 'font-weight:bold;'>" + myObj[x].lastname + "</span>" +   "<br /><span style = 'margin-left:5px;'>" + myObj[x].firstname + "</span>"  + "<span style = 'margin-left:165px;font-weight:bold;'>" +  myObj[x].greaterthansign + "</span>" + "</br>" + "<span >" + myObj[x].city + "</span>" + "<br /><span style = 'margin-left:5px;'>" +  myObj[x].state + "</span>"     + "</li>" ;
    }
   
    txt += "</UL>" 
 
class faarlistbox extends HTMLElement {
	
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
	
	window.customElements.define('faar-listbox', faarlistbox);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE





 