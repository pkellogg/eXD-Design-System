(function() {
	
	const template = document.createElement('template');
	template.innerHTML = `
    <div class="fxmarkupclass">
	<slot name="element-name" ></slot>
	</div>`;

	class FxMarkup extends HTMLElement {
	static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'size', 'textcolor', 'family']; }
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	let style = document.createElement('style'); 
	shadowRoot.appendChild(style);
    }
	connectedCallback() {
	updateStyleDrop(this);   
	}   
	
	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleDrop(this);
	}
	}//extends
	
	function updateStyleDrop(elem) { 
	 
	var shadow = elem.shadowRoot;
	var childNodes = shadow.childNodes;
	for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
      childNodes[i].textContent = '.fxmarkupclass {' +
						  ' width: ' + elem.getAttribute('width') + 'px;' +     
                          ' height: ' + elem.getAttribute('height') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer') + ';' +  
						  ' opacity: ' + elem.getAttribute('trans') + ';' +
						  ' font-size: ' + elem.getAttribute('size') + 'px;' +  
						  ' color: ' + elem.getAttribute('textcolor') + ';' + 
						  ' font-family: ' + elem.getAttribute('family') + ';' + '}'  
						  
						  
	}
  }
} 
	
	window.customElements.define('fx-markup', FxMarkup);
})();