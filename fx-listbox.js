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
 
 {pic: " 'manager.jpg' " , lastname: "Calabrese,", firstname: "Christopher" , city: "Cambridge", state: "MA", startdate: "Aug 2017"},
 
 {pic: " 'manager.jpg' ", lastname: "Calabrese", firstname: "Micheal" , city: "Jamaica,", state: "NY", startdate: "Nov 2009"},
 
 {pic: " 'location.png' ", lastname: "Cambridge", firstname: "MA (#2837)" , city: "Managed by:", state: "Tran.", startdate:"Phong"},
 
 {pic: " 'manager.jpg' ", lastname: "Castalano", firstname: "Jose" , city: "Indianapolis,", state: "IN", startdate: "May 2011"}
 ];

var txt = "";
txt += "<UL class='fxlistclass' style='list-style: none;position:relative;padding:0px;font-family:roboto;width:800px;border: 3px #4D148C solid;border-radius: 5px;'><li style='text-decoration: none;border:none;cursor:pointer;'><input type='search' name='q' style = 'height:50px;width:800px;background-color:white;border-bottom:1px #4D148C solid;border-top:none;border-left:none;border-right:none;padding-left:10px;font-size:18px;font-family:roboto;'></input><img src='magnify.png' style='position:absolute;right: 0px;top: 0px;height:48px;'/></li>"
	
	 for (x in myObj) {
       txt += "<li class = 'highlightrows' style='text-decoration: none;list-style: none;border:none;position:relative;margin-bottom:30px;margin-top:20px;cursor:pointer;margin-left:30px;'>" + "<image src=" + myObj[x].pic + "style = 'height:70px;width:60px;' />"  + "<span style = 'position:absolute;top:20px;margin-left:20px;'>" + "<span style = 'font-weight:bold;'>" + myObj[x].lastname + "</span>" + "<span style = 'margin-left:5px;font-weight:bold;'>" +myObj[x].firstname + "</span>"  + "</br>" + "<span >" + myObj[x].city + "</span>" + "<span style = 'margin-left:5px;'>" +  myObj[x].state + "</span>" + "<span style = 'margin-left:5px;'>" +  myObj[x].startdate + "</span>" + "</span>" + "</li>" ;
    }
   
    txt += "</UL>" 
 
class Fxlistbox extends HTMLElement {
	
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
	
	window.customElements.define('fx-listbox', Fxlistbox);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE





 