//immediately invoked function
(function() {
	
const template = document.createElement('template');
template.innerHTML = `<style>
.panel {
  padding: 0px 5px;
  font-family:roboto;
  } 
  
.highlightrows {background-color:red;color:black;}

.highlightrowsblue {background-color:slateblue;color:white;}
</style>

<div class="panel" id="panelone"  style = "padding-left: 30px;padding-top:20px;padding-bottom:20px;">
 <span style="margin-right:20px;cursor:pointer;" class='highlightrows'><slot name="list-image"></slot>&nbsp;&nbsp;&nbsp;<slot name="list-text"></slot></span> 
</div>`;	
	
	class FxListItem extends HTMLElement {

	static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'size', 'textcolor','width2', 'height2', 'c2', 'layer2', 'trans2', 'size2', 'textcolor2' ]; }

	constructor() {
	super();
	let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	  
	let style = document.createElement('style');  //adding in custom attributes
	shadowRoot.appendChild(style);
	
	var items = this.shadowRoot.querySelectorAll('.highlightrows');
			for (var i = 0; i < items.length; i++) {
				 items[i].addEventListener('click', function() {	
					  alert("Hello World!"); 
					$(this).toggleClass('highlightrows');
                    $(this).toggleClass('highlightrowsblue');
				});	 					
			};
	
	/*var selPanel =  shadowRoot.querySelector('.panel');
	 selPanel.addEventListener("mouseover", expand);
	 selPanel.addEventListener("mouseout", defaultstate);	 
	 selButton.addEventListener("click", function() {
     alert("Hello World!")});*/ //click event added by pk
	
	} //constructor 

	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleList(this);
	}

	} //extends
	
	function updateStyleList(elem) {  
 
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
						  ' font-size: '  + elem.getAttribute('size') + 'px;' + 
						  ' color: '      + elem.getAttribute('textcolor') + ';' + 
						  ' font-family: ' + 'roboto' + ';' +  '}'  
			}
		}
	} 
	
	 
	window.customElements.define('fx-listitem', FxListItem);	
})(); //end immediately invoked function