(function() {
	
	const template = document.createElement('template');
	template.innerHTML = `
    <ul id="dropuiid" class="fxdropdownmenuclass">

	<li><a><slot name="drop-text1"></slot></a></li>
	<li><a><slot name="drop-text2"></slot></a></li>
	<li><a><slot name="drop-text3"></slot></a></li>
	<li class="dropdown"><a href="javascript:void(0)" class="dropbtn"><slot name="drop-text4"></slot></a>
	<div class="dropdown-content">
		<a><slot name="drop-drop-text1"></slot></a>
		<a><slot name="drop-drop-text2"></slot></a>
		<a><slot name="drop-drop-text3"></slot></a>
	</div>
	</li>
	</ul>`;

	class FxDropDownMenu extends HTMLElement {
		static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'width2', 'height2', 'c2', 'layer2', 'trans2']; }
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

	let shadow = elem.shadowRoot;
	let childNodes = shadow.childNodes;
  
	loop1: 
	for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
      childNodes[i].textContent = '.fxdropdownmenuclass{list-style-type: none;background-color: rgb(77,20,140);margin: 0;padding: 0;overflow: hidden;}' + 
	  'li a, .dropbtn {display: inline-block;color: white;text-align: center;padding: 14px 16px;text-decoration: none;}' + 
	  'li a:hover, .dropdown:hover .dropbtn {background-color: red;}' +
      'li.dropdown {display: inline-block;}' +
      '.dropdown-content {display: none;position: absolute;background-color: white;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);z-index: 1;}' +
      '.dropdown-content a {color: black;padding: 12px 16px;text-decoration: none;display:block;text-align:left;}' +'.dropdown-content a:hover {background-color: #f1f1f1}' +
      '.dropdown:hover .dropdown-content {display: block;}'  + 
	  '.fxdropdownmenuclass   {' +
						  ' width: ' + elem.getAttribute('width') + 'px;' +     
                          ' height: ' + elem.getAttribute('height') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer') + ';' +  
						  ' opacity: ' + elem.getAttribute('trans') + ';' +
						  ' color: ' + elem.getAttribute('textcolor') + ';' +
						  ' font-size: ' + elem.getAttribute('size') + ';' + '}' +
			'.fxdropdownmenuclass li {' + ' float: ' + elem.getAttribute('orientation') + ';' + '}' + 
			'.fxdropdownmenuclass li a{' + ' color: ' + elem.getAttribute('textcolor') + ';' + '}'  		  
	}
  }
  
} 
	
	window.customElements.define('fx-dropdownmenu', FxDropDownMenu);
})();