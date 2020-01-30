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

<div class='fxlistclass' style = "position:relative;border:none;height:80px;text-align:center;">
<span style="position:absolute;left:15px;top:10px;color:white;text-align:left;font-weight:bold;">FAAR<br><span style = "font-size:14px;font-weight:normal;">Field analytics and reporting</span></span> 
 
<input type='search' class='fxlistclass'  name='q' style = 'height:55px;width:65%;border:3px #4D148C solid;border-radius:5px;background-color:white;margin-top:13px;color:black;padding-left:20px;' /  >

<span style="font-size:60px;color:black;position:absolute;right:19%;">&#8981;</span> 

</div>  
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
	 
class faarheadersearch extends HTMLElement {
	
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
		const jasonRequest = this.getAttribute('dbRequest');
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
	
	window.customElements.define('faar-headersearch', faarheadersearch);   
})(); //IIFE





 