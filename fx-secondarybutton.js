(function() {
	
const template = document.createElement('template');
template.innerHTML = `
<style>
 

.fxsecondarybutton {
  width: 244px;
  height:60px;
  background-color: white;
  
  color: #FF6200;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  font-size: 19px;
  font-family: roboto;
  font-weight: bold;
  letter-spacing: 1.0px;
  cursor: pointer;
  zIndex:100;

}


.fxhover {
   
  -ms-transform: scale(2,3); /* IE 9 */
  -webkit-transform: scale(2,3); /* Safari prior 9.0 */
  transform: scale(1.02,1.02); /* Standard syntax */
}
</style>

<button class="fxsecondarybutton">
<span><slot name="primary-text2"></slot></span> 
</button>
`;

	class secondarybutton extends HTMLElement {
		
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	
	//let style = document.createElement('style'); 
	//shadowRoot.appendChild(style);
	
	var selButton2 =  shadowRoot.querySelector('.fxsecondarybutton');
	 selButton2.addEventListener("mouseover", expand);
	 selButton2.addEventListener("mouseout", defaultstate);	 
	
	function expand(){
	 selButton2.classList.add("fxhover")
	}
	
	function defaultstate(){
	selButton2.classList.remove("fxhover")
	}
	
    }//constructor
	
	
	connectedCallback() {
	updateStyleSecondaryButton(this);   
	}   
	
	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleSecondaryButton(this);
	}
	}//extends
	
	

	window.customElements.define('fx-secondarybutton', secondarybutton);
})();