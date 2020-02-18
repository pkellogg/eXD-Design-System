(function() {
	
const template = document.createElement('template');
template.innerHTML = `
<style>
 
.fxutilitybutton {
  width: 165px;
  height:40px;
  background-color: white;
  border: black solid 2px;
  color: black;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  font-size: 14px;
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

<button class="fxutilitybutton">
<span><slot name="primary-text"></slot></span> 
</button>
`;

	class utilitybutton extends HTMLElement {
		
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	
	//let style = document.createElement('style'); 
	//shadowRoot.appendChild(style);
	
	var selButton5 =  shadowRoot.querySelector('.fxutilitybutton');
	 selButton5.addEventListener("mouseover", expand);
	 selButton5.addEventListener("mouseout", defaultstate);	 
	
	function expand(){
	 selButton5.classList.add("fxhover")
	}
	
	function defaultstate(){
	selButton5.classList.remove("fxhover")
	}
	
    }//constructor
	
	
	connectedCallback() {
	updateStyleUtilityButton(this);   
	}   
	
	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleUtilityButton(this);
	}
	}//extends
	
	

	window.customElements.define('fx-utilitybutton', utilitybutton);
})();