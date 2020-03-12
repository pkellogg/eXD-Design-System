(function() {
	  
	 
	  
	const template = document.createElement('template');
	template.innerHTML = `
	
	
	 
	 
    <ul id="dropuiid" class="fxdropdownmenuclass" >
	<!--<li style="display:block;font-size:26px;font-weight:bold;padding-right:50px;"><span style="color:white;">Fed</span><span style="color:orange;">Ex</span></li>-->

	<li id="item1" style="display:block;" class="dropdown"><a id="linkone" href="" class="dropbtn"><slot name="drop-text1"></slot></a> 
	<!--<div class="dropdown-content">
		 <a id="linkoneA" href=""><slot name="drop-drop-text1"></slot></a>
		 <a id="linkoneB" href=""><slot name="drop-drop-text2"></slot></a>
		 <a id="linkoneC" href=""><slot name="drop-drop-text3"></slot></a>
	 </div>--> 
	</li>
	
	<li id="item2" style="display:block;" class="dropdown"><a id="linktwo" href="" class="dropbtn"><slot name="drop-text2"></slot></a> 
	<!--<div class="dropdown-content">
		<a id="linktwoA"><slot name="drop-drop-text4"></slot></a>
		<a id="linktwoB"><slot name="drop-drop-text5"></slot></a>
		<a id="linktwoC"><slot name="drop-drop-text6"></slot></a>
	</div>-->
	</li>
	
	<li id="item3" style="display:block;" class="dropdown"><a id="linkthree" href="" class="dropbtn"><slot name="drop-text3"></slot></a> 
	<!--<div class="dropdown-content">
		<a id="linkthreeA"><slot name="drop-drop-text7"></slot></a>
		<a id="linkthreeB"><slot name="drop-drop-text8"></slot></a>
		<a id="linkthreeC"><slot name="drop-drop-text9"></slot></a>
	</div>-->
	</li>
	
	<li id="item4" style="display:block;" class="dropdown"><a id="linkfour" href="" class="dropbtn"><slot name="drop-text4"></slot></a> 
	<!--<div class="dropdown-content">
		<a id="linkfourA"><slot name="drop-drop-text10"></slot></a>
		<a id="linkfourB"><slot name="drop-drop-text11"></slot></a>
		<a id="linkfourC"><slot name="drop-drop-text12"></slot></a>
	</div>-->
	</li>
	
	<li id="item5" style="display:block;" class="dropdown"><a id="linkfive" href="" class="dropbtn"><slot name="drop-text5"></slot></a> 
	<!--<div class="dropdown-content">
		<a id="linkfiveA"><slot name="drop-drop-text13"></slot></a>
		<a id="linkfiveB"><slot name="drop-drop-text14"></slot></a>
		<a id="linkfiveC"><slot name="drop-drop-text15"></slot></a>
	</div>-->
	</li>
	
	<li id="item6" style="display:block;" class="dropdown"><a id="linksix" href="" class="dropbtn"><slot name="drop-text6"></slot></a> 
	<!--<div class="dropdown-content">
		<a id="linksixA"><slot name="drop-drop-text16"></slot></a>
		<a id="linksixB"><slot name="drop-drop-text17"></slot></a>
		<a id="linksixC"><slot name="drop-drop-text18"></slot></a>
	</div>-->
	</li>
	
	<li id="item7" style="display:block;" class="dropdown"><a id="linkseven" href="" class="dropbtn"><slot name="drop-text7"></slot></a> 
	<!--<div class="dropdown-content">
		<a id="linksevenA"><slot name="drop-drop-text19"></slot></a>
		<a id="linksevenB"><slot name="drop-drop-text20"></slot></a>
		<a id="linksevenC"><slot name="drop-drop-text21"></slot></a>
	</div>
	</li>-->
	</ul>`;

	class FxDropDownMenu extends HTMLElement {
		static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans','orientation', 'textcolor', 'size' ];}
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	let style = document.createElement('style'); 
	shadowRoot.appendChild(style);
    }
	
	connectedCallback() {
	 const linkone = this.getAttribute('link1');
	 this.shadowRoot.querySelector('#linkone').href = linkone
		
		const linkoneA = this.getAttribute('link1A');
		this.shadowRoot.querySelector('#linkoneA').href = linkoneA
		
		const linkoneB = this.getAttribute('link1B');
		this.shadowRoot.querySelector('#linkoneB').href = linkoneB
		
		const linkoneC = this.getAttribute('link1C');
		this.shadowRoot.querySelector('#linkoneC').href = linkoneC
	 
	 const linktwo = this.getAttribute('link2');
	 this.shadowRoot.querySelector('#linktwo').href = linktwo
	 
		const linktwoA = this.getAttribute('link2A');
		this.shadowRoot.querySelector('#linktwoA').href = linktwoA
		
		const linktwoB = this.getAttribute('link2B');
		this.shadowRoot.querySelector('#linktwoB').href = linktwoB
		
		const linktwoC = this.getAttribute('link2C');
		this.shadowRoot.querySelector('#linktwoC').href = linktwoC
	 
	 const linkthree = this.getAttribute('link3');
	 this.shadowRoot.querySelector('#linkthree').href = linkthree
	 
		const linkthreeA = this.getAttribute('link3A');
		this.shadowRoot.querySelector('#linkthreeA').href = linkthreeA
		
		const linkthreeB = this.getAttribute('link3B');
		this.shadowRoot.querySelector('#linkthreeB').href = linkthreeB
		
		const linkthreeC = this.getAttribute('link3C');
		this.shadowRoot.querySelector('#linkthreeC').href = linkthreeC
	 
	 const linkfour = this.getAttribute('link4');
	 this.shadowRoot.querySelector('#linkfour').href = linkfour
	 
		const linkfourA = this.getAttribute('link4A');
		this.shadowRoot.querySelector('#linkfourA').href = linkfourA
		
		const linkfourB = this.getAttribute('link4B');
		this.shadowRoot.querySelector('#linkfourB').href = linkfourB
		
		const linkfourC = this.getAttribute('link4C');
		this.shadowRoot.querySelector('#linkfourC').href = linkfourC
	 
	 const linkfive = this.getAttribute('link5');
	 this.shadowRoot.querySelector('#linkfive').href = linkfive
	 
		const linkfiveA = this.getAttribute('link5A');
		this.shadowRoot.querySelector('#linkfiveA').href = linkfiveA
		
		const linkfiveB = this.getAttribute('link5B');
		this.shadowRoot.querySelector('#linkfiveB').href = linkfiveB
		
		const linkfiveC = this.getAttribute('link5C');
		this.shadowRoot.querySelector('#linkfiveC').href = linkfiveC
	 
	 const linksix = this.getAttribute('link6');
	 this.shadowRoot.querySelector('#linksix').href = linksix
	 
		const linksixA = this.getAttribute('link6A');
		this.shadowRoot.querySelector('#linksixA').href = linksixA
		
		const linksixB = this.getAttribute('link6B');
		this.shadowRoot.querySelector('#linksixB').href = linksixB
		
		const linksixC = this.getAttribute('link6C');
		this.shadowRoot.querySelector('#linksixC').href = linksixC
	 
	 const linkseven = this.getAttribute('link7');
	 this.shadowRoot.querySelector('#linkseven').href = linkseven
	 
		const linksevenA = this.getAttribute('link7A');
		this.shadowRoot.querySelector('#linksevenA').href = linksevenA
		
		const linksevenB = this.getAttribute('link7B');
		this.shadowRoot.querySelector('#linksevenB').href = linksevenB
		
		const linksevenC = this.getAttribute('link7C');			
		this.shadowRoot.querySelector('#linksevenC').href = linksevenC
	 
	 updateStyleDrop(this);
    } 

	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleDrop(this);
	}
	
	get firsttieritems() {
     return this.getAttribute('firsttieritems') ;
	 var pat = firsttieritems();
	}
 
    set value(newValue) {
      this.setAttribute('firsttieritems', newValue);
    }
	}//extends
	
	 
	 
	function updateStyleDrop(elem) {  

	let shadow = elem.shadowRoot;
	let childNodes = shadow.childNodes;
  
	loop1: 
	for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
      childNodes[i].textContent = '.fxdropdownmenuclass{list-style-type: none;background-color: #4D148C;margin: 0;padding: 0;overflow: hidden;}' + 
	  
	  'li {padding-left:10px;padding-right:10px;line-height:70px;cursor:p;}' +  //important-for verticasl center height = line-height
	  
	  'li a, .dropbtn {display: inline-block;color: white;text-align: center;text-decoration: none;font-family: roboto;}' +    
	  
	  'li a:hover, .dropdown:hover .dropbtn {text-decoration: underline;cursor:pointer;}' +
	  
      'li.dropdown {display: inline-block;}' +
	  
      '.dropdown-content {display:none;position: absolute;background-color: white;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);z-index: 1;width:150px; }' + //this is the div
	  
      '.dropdown-content a {color: black;padding:10px;text-decoration: none;display:block;text-align:left;border-bottom:solid thin silver;height:30px;line-height:30px;}' +  //this sets the height for the drop down a tags inside the div
	  
	  '.dropdown-content a:hover {background-color: #f1f1f1}' +
	  
      '.dropdown:hover .dropdown-content {display: block;}'  + 

	  '.fxdropdownmenuclass   {' +
						  ' width: ' + elem.getAttribute('width') + 'px;' +     
                          ' height: ' + elem.getAttribute('height') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer') + ';' +  
						  ' color: ' + elem.getAttribute('textcolor') + ';' +
						  ' opacity: ' + elem.getAttribute('trans') + ';' + '}' + 
			'.fxdropdownmenuclass li {' + ' float: ' + elem.getAttribute('orientation') + ';' + '}' + 
			'.fxdropdownmenuclass li {' + 'color: ' + elem.getAttribute('textcolor') + ';' + 
								          'font-size: ' + elem.getAttribute('size') + 'px;' +
										  'text-decoration:none;' +
										  '}'  		  
	}
  }
} 
	
	window.customElements.define('fx-dropdownmenu', FxDropDownMenu);
})();