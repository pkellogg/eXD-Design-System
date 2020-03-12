(function() {
	
const template = document.createElement('template');
template.innerHTML = `
<div class="fxtextbuttonclass" style="border:none;">
<span   slot="drop-text1">item 1</span>
</div>
`;

	class  textbutton extends HTMLElement {
		static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'width2', 'height2', 'c2', 'layer2', 'trans2']; }
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	let style = document.createElement('style'); 
	shadowRoot.appendChild(style);
    }
	connectedCallback() {
	updateStyleTextbutton(this);   
	}   
	
	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleTextbutton(this);
	}
	}//extends
	
	function updateStyleTextbutton(elem) { 
	console.log(elem);  
	var shadow = elem.shadowRoot;
	var childNodes = shadow.childNodes;
	for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
      childNodes[i].textContent = '.fxtextbuttonclass {' +
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

	window.customElements.define('fx-textbutton', textbutton);
})();