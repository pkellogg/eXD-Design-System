//immediately invoked function
(function() {
	
const template = document.createElement('template');
template.innerHTML = `<button class="accordion" id="butone" style="style="border-bottom:solid 2px silver;">
<span><slot name="section-text1"></slot></span>  
</button>
<div  class="panel" id="panelone"> 
<p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text1"></slot></p>
</div>

<button class="accordion" id="buttwo" style="border-bottom:solid 2px silver;">
<span><slot name="section-text2"></slot></span> 
</button>
<div class="panel" id="paneltwo">
   <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text2"></slot></p> 
</div>

<button class="accordion" id="butthree" style="border-bottom:solid 2px silver;">
<span><slot name="section-text3"></slot></span> 
</button>
<div class="panel" id="panelthree" >
  <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text3"></slot></p>
</div> `;	
	
	class FxAccordion extends HTMLElement {

	static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'width2', 'height2', 'c2', 'layer2', 'trans2']; }

	constructor() {
	super();
	let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	  
	let style = document.createElement('style');  //adding in custom attributes
	shadowRoot.appendChild(style);

	var selButton =  shadowRoot.querySelectorAll('.accordion'); //important to use ALL otherwise returns only the 1st!
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
						  ' max-height: ' + ' 0' + ';' + 
						  ' overflow: ' + ' hidden' + ';' +  '}' +
						  '.accordion {' +
						  ' width: ' + elem.getAttribute('width2') + 'px;' +     
                          ' height: ' + elem.getAttribute('height2') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c2') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer2') + ';' +  
						  ' opacity: ' + elem.getAttribute('trans2') + ';' + 
						   '}' 
			}
		}
	} 
	
	
	window.customElements.define('fx-accordion', FxAccordion);	
})(); //end immediately invoked function