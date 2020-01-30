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

<div class='fxlistclass' style = "position:relative;border:3px #4D148C solid;border-radius: 5px;padding-left:10px;">
<input type='search' class='fxlistclass'  name='q' style = 'height:50px;border:none;' / > 

<img   src='magnify.png' id = 'searchX' style='position:absolute;right: 
4px;top:2px;height:46px;' />
</div>  
`	 
var obj, dbParam, xmlhttp, myObj, x, txt = "";

/*xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
myObj = JSON.parse(this.responseText);
obj = { table: "customers", limit: 20 };*/

//this is the json array
	 
class faarsearch extends HTMLElement {
	
	constructor() {
    super();
	const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));;
	var items = this.shadowRoot.querySelectorAll('#searchX');
		for (var i = 0; i < items.length; i++) {
			items[i].addEventListener('click', function() {
			window.location.assign("01-SearchResults.html")
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
		/*if(name == "c2" && newValue == "orange"){
			document.querySelector('#feedback').innerHTML = "Welcome Fed<span style='color:orange;'>Ex!";
		} 
		
		if(name == "c2" && newValue !== "orange"){
			document.querySelector('#feedback').innerHTML = "You are not FedEx!";
		}*/ 
		 updateStyleSearch(this);
	}	
} //class definition

	function updateStyleSearch(elem) {
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
	
	window.customElements.define('faar-search', faarsearch);   
})(); //IIFE





 