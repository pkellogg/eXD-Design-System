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
	line-height:30px;
	z-index:100;
	position:absolute;
	}
	
.button {
    
    position: absolute;
    background-color: red;
    border: none;
    box-shadow: 5px 5px 10px rgb(170 170 170);
    color: #FFFFFF;
    padding: 0px;
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
    transition: 0s
}
</style>

<div class="button fxbuttonclass" style="-webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;text-align: center;border: none;box-shadow: 5px 5px 10px rgb(170 170 170);position:absolute;">
<slot name="button-image"></slot>
<slot name="buttonpos"></slot>
</div>`;

	class FxButton extends HTMLElement {
	static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'size', 'textcolor', 'family', 'rad']; }	
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
						  ' font-size: ' + elem.getAttribute('size') + 'px;' +  
						  ' color: ' + elem.getAttribute('textcolor') + ';' + 
						  ' font-family: ' + elem.getAttribute('family') + ';' +
						  ' border-radius: ' + elem.getAttribute('rad') + '%' + ';' + '}'  
						  
						  
	}
  }
} 
window.customElements.define('fx-button', FxButton);
})();