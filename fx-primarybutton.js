(function() {
	
const template = document.createElement('template');
template.innerHTML = `
<style>
.fxprimarybutton {
  width: 244px;
  height:60px;
  background-color: #FF6200;
  border: none;
  color: white;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  font-size: 22px;
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

<button class="fxprimarybutton">
<span id="primarybutton" onclick="myFunction(this)"></span> 
</button>
`;

	class primarybutton extends HTMLElement {
		
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	
	//let style = document.createElement('style'); 
	//shadowRoot.appendChild(style);
	
	var selButton =  shadowRoot.querySelector('.fxprimarybutton');
	 selButton.addEventListener("mouseover", expand);
	 selButton.addEventListener("mouseout", defaultstate);	 
	 selButton.addEventListener("click", function() {
     alert("Hello World!")}); //click event added by pk
	
	function expand(){
	 selButton.classList.add("fxhover")
	}
	
	function defaultstate(){
	selButton.classList.remove("fxhover")
	}
	
    }//constructor
	
	connectedCallback() {
		const mycaption = this.getAttribute('caption');
		this.shadowRoot.querySelector('#primarybutton').innerHTML = mycaption;
	updateStylePrimaryButton(this);   
	}   
	 
	attributeChangedCallback(name, oldValue, newValue) {
	updateStylePrimaryButton(this);
	}
	}//extends
	window.customElements.define('fx-primarybutton', primarybutton);
})();