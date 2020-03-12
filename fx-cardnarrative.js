(function() {
const template = document.createElement('template');
	template.innerHTML = `
	<style>
	.fxcardnarrativeclass {
		width:320px;
		height:450px;
		border:none;
		background-color: white;
		font-family:roboto;
		position:relative;
		text-align:center;
		font-family:roboto;
		font-size:18px;
	}
	
	#headlinetext {
	position:absolute;
	left:80px;
	top:210px;
	font-size:22px;
	font-family:roboto;
	font-weight:bold;
	 
	}
		
	#narrativetext {
	position:absolute;
	top:250px;
	left:10px;
	font-size:20px;
	font-weight: normal; 
	font-family: roboto;
	}
	
	
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
  position:absolute;
  top:400px;
  left: 50px;
   
}

.fxhover {
  -ms-transform: scale(2,3); /* IE 9 */
  -webkit-transform: scale(2,3); /* Safari prior 9.0 */
  transform: scale(1.02,1.02); /* Standard syntax */
}
</style>

<div class="fxcardnarrativeclass" style="position:relative;"> 
		
		<div id="imageplaceholder" style="width:320px;height:200px;"><slot name="card-image2"><img src="insertplaceholder.jpg"    /><br />card-image2</slot></div>
		
		<span id="headlinetext"><slot  name="headline" >HEADLINE</slot></span>
		
		<span id="narrativetext"><slot  name="narrative">narrative</slot></span>
		
		<button class="fxbasicsecondarybutton" ondblclick="myFunction(this)">
<slot name="caption">CAPTION</slot> 
</button>
		
	</div>`
	
	class FxCardNarrative extends HTMLElement {
	 
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	let style = document.createElement('style'); 
	shadowRoot.appendChild(style);
    }
	connectedCallback() {
	}   
	}//extends
	
	window.customElements.define('fx-cardnarrative', FxCardNarrative);
})();