(function() {
	
const template = document.createElement('template');
template.innerHTML = `
    <style>

	
.fxbuttonclass {
	position:relative;
    background-color: blue;
    border: none;
    box-shadow: 5px 5px 10px rgb(170 170 170);
    color: #FFFFFF;
    width: 70px;
	height:70px;
    
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    outline: none; 
}
.fxhover {
   
  -ms-transform: scale(2,3); /* IE 9 */
  -webkit-transform: scale(2,3); /* Safari prior 9.0 */
  transform: scale(1.2,1.2); /* Standard syntax */
}
 
</style>

<button class="fxbuttonclass" style="text-align: center;border: none;box-shadow: 5px 5px 10px rgb(170 170 170);padding:0px;margin:0px;">
	
<slot name="button-image"></slot>
<slot name="button-caption"></slot>
 
</button>`;

	class FxImageButton extends HTMLElement {
	static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans','rad', 'cur', 'noimage']; }	
	
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	let style = document.createElement('style'); 
	shadowRoot.appendChild(style);
	
	var selButton =  shadowRoot.querySelector('.fxbuttonclass');
	 selButton.addEventListener("mouseover", expand);
	 selButton.addEventListener("mouseout", defaultstate);	 
	 //selButton.addEventListener("click", function() {
     //alert("Hello World!")}); //click event added by pk
	
	function expand(){
	 selButton.classList.add("fxhover")
	}
	
	function defaultstate(){
	selButton.classList.remove("fxhover")
	}
	
	var person = {
	firstname:"John",
	lastname:"Doe",
	age:50,
	eyecolor:"blue"
	};
	person.age = '90'; 
	console.log(person.age);
	
} //constructor

connectedCallback() {
}   
  
attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) {
			return;  //return stops a functionn in this instance because no change noticed
		}
			console.log(`The attribute ${name} has changed`);  //thus go ahead and update
			
			updateStyleDrop(this);
	}
	
}//extends

function updateStyleDrop(elem) { 
	 
	var shadow = elem.shadowRoot;
	var childNodes = shadow.childNodes;
	
	for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {    
      childNodes[i].textContent = '.fxbuttonclass{' +
						  ' width: ' + elem.getAttribute('width') + 'px;' +     
                          ' height: ' + elem.getAttribute('height') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer') + ';' +  
						  ' opacity: ' + elem.getAttribute('trans') + ';' +
						  ' color: ' + elem.getAttribute('textcolor') + ';' +
						  ' border-radius: ' + elem.getAttribute('rad') + '%;' +
						  ' cursor: ' + elem.getAttribute('cur') + ';' +
						   '}' +
						  '.fxhover{' + 
						   'transform:' + 'scale(1.02,1.02)' + ';' +
						   
					'}'
	}
  }
} 
window.customElements.define('fx-imagebutton', FxImageButton);
})();