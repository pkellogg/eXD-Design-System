(function() {
	
const template = document.createElement('template');
template.innerHTML = `
<style>
 
 .fxbasicsecondarybutton {
  width: 210px;
  height:50px;
  background-color: white;
  border: #007AB7 solid 2px;
  color: #007AB7;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom:3px;
  text-align: center;
  font-size: 16px;
  font-family: roboto;
  font-weight: bold;
  letter-spacing: 1.0px;
  cursor: pointer;
  zIndex:100;
  border-radius:35px;
   
}

.fxhover {
  -ms-transform: scale(2,3); /* IE 9 */
  -webkit-transform: scale(2,3); /* Safari prior 9.0 */
  transform: scale(1.02,1.02); /* Standard syntax */
}
</style>

<button class="fxbasicsecondarybutton" ondblclick="myFunction(this)">
<slot name="secondarytext">EXPLORE</slot> 
</button>
`;

	class basicsecondarybutton extends HTMLElement {
		
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	
	//let style = document.createElement('style'); 
	//shadowRoot.appendChild(style);
	
	var selButton3 =  shadowRoot.querySelector('.fxbasicsecondarybutton');
	 selButton3.addEventListener("mouseover", expand);
	 selButton3.addEventListener("mouseout", defaultstate);	 
	
	function expand(){
	 selButton3.classList.add("fxhover")
	}
	
	function defaultstate(){
	selButton3.classList.remove("fxhover")
	}
	
    }//constructor
	
	
	connectedCallback() {
	updateStyleBasicSecondaryButton(this);   
	}   
	
	attributeChangedCallback(name, oldValue, newValue) {
	updateStyleBasicSecondaryButton(this);
	}
	}//extends
	
	

	window.customElements.define('fx-basicsecondarybutton', basicsecondarybutton);
})();