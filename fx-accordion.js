//immediately invoked function
(function() {
	
const template = document.createElement('template');
template.innerHTML = `<style>
.header {
   
  color: #444;
  cursor: pointer;
  padding: 5px;
  border-top:1px solid silver;
  text-align: left;
  outline: none;
  font-size: 22px;
  transition: .5s;
  width: 300px;
  font-family:roboto;
  }

.panel {
  padding: 0px 5px;
  max-height:0 ;
  overflow: hidden;
  transition: max-height .5s ease-out;
  font-family:roboto;
  font-size:20px;
  width:300px;
 } 
 
</style>

<h2 style="font-family:roboto;font-size:28px;font-weight:300;">Your shipping questions answered</h2>

<div style = "background-color:tan;overflow-y:scroll;max-height:500px;">

<div class="header">
<span><slot name="section-text 1">section-text 1</slot></span> 
</div>
<div class="panel" id="panelone">
   <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text 1">accordion-text 1</slot></p> 
</div>

<div class="header">
<span><slot name="section-text 2">section-text 2</slot></span> 
</div>
<div class="panel" id="paneltwo">
   <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text 2">accordion-text 2</slot></p> 
</div>

<div class="header">
<span><slot name="section-text 3">section-text 3</slot></span> 
</div>
<div class="panel" id="panelthree">
  <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text 3">accordion-text 3</slot></p>
</div>

</div>`;	
	
	class FxAccordion extends HTMLElement {

	static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'size', 'textcolor','width2', 'height2', 'c2', 'layer2', 'trans2', 'size2', 'textcolor2' ]; }

	constructor() {
	super();
	let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	  
	let style = document.createElement('style');  //adding in custom attributes
	shadowRoot.appendChild(style);

	var selButton =  shadowRoot.querySelectorAll('.header'); //important to use ALL otherwise returns only the 1st!
	var selPanel = shadowRoot.querySelectorAll('.panel');
 
	//behavior code
	var i;
  
	for (i = 0; i < selButton.length; i++) {
	selButton[i].addEventListener("click", function() {
   
    this.classList.toggle("active");
	
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){ 
      panel.style.maxHeight = null;

    } else {
		 
      panel.style.maxHeight = panel.scrollHeight + "px";
	    
    } 
	});
	}
	} //constructor 

	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleAccordion(this);
	}

	} //extends
	
	function updateStyleAccordion(elem) {  
 
	let shadow = elem.shadowRoot;
	let childNodes = shadow.childNodes;
  
	loop1: 
	for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
	 
      childNodes[i].textContent = '.panel {' +
						  ' width: ' + elem.getAttribute('width') + 'px;' +     
                          ' height: ' + elem.getAttribute('height') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer') + ';' +  
						  ' opacity: ' + elem.getAttribute('trans') + ';' + 
						  ' font-size: '  + elem.getAttribute('size') + 'px;' + 
						  ' color: '      + elem.getAttribute('textcolor') + ';' + 
						  ' max-height: ' + ' 0' + ';' + 
						  ' font-family: ' + 'roboto' + ';' +
						  ' overflow: ' + ' hidden' + ';' +  '}' +
						  '.header {' +
						  ' width: ' + elem.getAttribute('width2') + 'px;' +     
                          ' height: ' + elem.getAttribute('height2') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c2') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer2') + ';' +  
						  ' opacity: ' + elem.getAttribute('trans2') + ';' +
						  ' font-family: ' + 'roboto' + ';' +
						  ' border-top: ' + '1px solid silver' + ';' +
						  ' font-size: ' + elem.getAttribute('size2') + 'px;' +
						  ' color: '     + elem.getAttribute('textcolor2') + ';' + 
						   '}' 
			}
		}
	} 
	
	 
	window.customElements.define('fx-accordion', FxAccordion);	
})(); //end immediately invoked function