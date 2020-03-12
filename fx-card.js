(function() {
	
	const template = document.createElement('template');
	template.innerHTML = `
<div class="fxcardclass">  
<slot name="element-name" ></slot>
<slot name="element-name2"></slot> 
<slot name="button-slot"></slot>
<slot name="element-name3"></slot>
<slot name="element-name4"></slot>
<slot name="card-image2"></slot>
<slot name="fab"></slot>
 
</div>`;

	class FxCard extends HTMLElement {
	static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'size', 'textcolor']; }
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	let style = document.createElement('style'); 
	shadowRoot.appendChild(style);
    }
	connectedCallback() {
	updateStyleCard(this);   
	}   
	
	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleCard(this);
	}
	}//extends
	
	function updateStyleCard(elem) {  

  let shadow = elem.shadowRoot;
  let childNodes = shadow.childNodes;
  
  loop1: 
  for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
      childNodes[i].textContent = '.fxcardclass {' +
						  ' width: ' + elem.getAttribute('width') + 'px;' +     
                          ' height: ' + elem.getAttribute('height') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer') + ';' +  
						  ' opacity: ' + elem.getAttribute('trans') + ';' + 
						  ' font-size: ' + elem.getAttribute('size') + ';' +
						  ' color: ' + elem.getAttribute('textcolor') + ';' + '}'
	}
  }
} 
	
	window.customElements.define('fx-card', FxCard);
})();