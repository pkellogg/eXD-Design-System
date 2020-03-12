(function() {
	
const template = document.createElement('template');
template.innerHTML = `
    <style>
.fxbuttonclass {
	background-color:var(--fedexpurple);
	color: var(--fedexwhite);
	height:30px;
	width:100px;
	box-shadow: 0px 5px 5px #888888;
	font-family:roboto;
	font-size: 14px;
	text-align: center;
	 
	z-index:100;
	position:absolute;
	}
	
.button {
    
     
    background-color: red;
    border: none;
    box-shadow: 5px 5px 10px rgb(170 170 170);
    color: #FFFFFF;
     
    width: 70px;
    height:70px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10%;
    outline: none; 
}

.button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 1s
}
</style>

<div class="button fxbuttonclass" style="-webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;text-align: center;border: none;box-shadow: 5px 5px 10px rgb(170 170 170);padding:0px;margin:0px;">
<slot name="button-image"></slot>
 
</div>`;

	class FxButton extends HTMLElement {
	static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans','rad']; }	
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	let style = document.createElement('style'); 
	shadowRoot.appendChild(style);
    }
	
	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleDrop(this);
	}
	
}//extends

function updateStyleDrop(elem) { 
	 
	var shadow = elem.shadowRoot;
	var childNodes = shadow.childNodes;
	
	for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {    
      childNodes[i].textContent = '.button{' +
						  ' width: ' + elem.getAttribute('width') + 'px;' +     
                          ' height: ' + elem.getAttribute('height') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer') + ';' +  
						  ' opacity: ' + elem.getAttribute('trans') + ';' +
						  ' border-radius: ' + elem.getAttribute('rad') + '%;' +
						   '}'  
						  
						  
	}
  }
} 
window.customElements.define('fx-button', FxButton);
})();