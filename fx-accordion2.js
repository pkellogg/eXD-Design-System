//immediately invoked function
(function() {
	
const template = document.createElement('template');
template.innerHTML = `<style>
.accordion {
  background-color: white;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 400px;
  border-bottom:1px #e7e7e7 solid;
  border-top:1px #e7e7e7 solid;
  border-left:none;
  border-right:none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: .5s;
}

.panel {
  padding: 0px 20px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  width:400px;
  transition: max-height .5s ease-out;
  font-family:roboto;
  font-size:12px;
}

.accordion:after {
  content: '\02795'; /* Unicode character for "plus" sign (+) */
  font-size: 6px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796"; /* Unicode character for "minus" sign (-) */
}
</style>

<h2 style="font-family:roboto;font-size:16px;font-weight:300;">Your shipping questions answered</h2>
 
<button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 3</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
	
	
	
//this is the new code from the example	
/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}*/
	
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