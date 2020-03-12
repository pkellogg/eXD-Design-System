(function() {
	
const template = document.createElement('template');
template.innerHTML = `
<div class="fxcomboclass" style="position:relative;">
<fx-dropdownmenu class="fxdropdownmenuclass"  onclick="myFunction(this) style="position:absolute;left:0px;top:0px;" orientation="left" c="orange" textcolor="black"> 
<a  slot="drop-text1" ondblclick="myFunction(this)">item 1</a>
<a  slot="drop-text2" ondblclick="myFunction(this)">item 2</a>
<a  slot="drop-text3" ondblclick="myFunction(this)">item 3</a>
<a  slot="drop-text4" ondblclick="myFunction(this)">item 4</a>
<a  slot="drop-drop-text1" ondblclick="myFunction(this)">item 1</a>
<a  slot="drop-drop-text2" ondblclick="myFunction(this)">item 2</a> 
<a  slot="drop-drop-text3" ondblclick="myFunction(this)">item 3</a> 
</fx-dropdownmenu> 

<fx-checkbox style="position:absolute;left:145px;top:70px;"></fx-checkbox><br />

<fx-radiobutton style="position:absolute;left:145px;top:110px;"></fx-radiobutton>
<fx-primarybutton style="position:absolute;bottom:20px;left:50px;"><span slot="primary-text">EXPLORE OPTIONS</span></fx-primarybutton>
</div>
`;

	class  combo extends HTMLElement {
		static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'width2', 'height2', 'c2', 'layer2', 'trans2']; }
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	let style = document.createElement('style'); 
	shadowRoot.appendChild(style);
    }
	connectedCallback() {
	updateStyleCombo(this);   
	}   
	
	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleCombo(this);
	}
	}//extends
	
	function updateStyleCombo(elem) { 
	console.log(elem);  
	var shadow = elem.shadowRoot;
	var childNodes = shadow.childNodes;
	for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
      childNodes[i].textContent = '.fxcomboclass {' +
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

	window.customElements.define('fx-combo', combo);
})();