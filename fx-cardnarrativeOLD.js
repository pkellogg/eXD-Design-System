(function() {
const template = document.createElement('template');
	template.innerHTML = `
	<style>
	.fxcardnarrativeclass {
		width:320px;
		height:480px;
		border:none;
		background-color: white;
		font-family:roboto;
		position:relative;
		
		font-family:roboto;
		font-size:18px;
	}
	
	#headlinetext {
	position:absolute;
	left:40px;  
	top:120px;
	font-size:22px;
	font-family:roboto;
	font-weight:bold;
	text-align:center; 
	}
		
	#narrativetext {
	position:absolute;
	top:320px;
	left:40px; 
	font-size:18px;
	font-weight: normal; 
	font-family: roboto;
	text-align: left;
	}
	
	</style>
	
	 
	<div class="fxcardnarrativeclass" style="position:relative;left:100px;top:50px;"> 
		
		<div><slot name="card-image2"><img src="insertplaceholder.jpg"   style="width:320px;height:200px;" /></slot></div>
		
		<span id="headlinetext"><slot  name="headline" >SLOT<br />span: id = headlinetext<br />
		 slot:  name="headline"</slot></span>
		
		<span id="narrativetext"><slot name="narrative">SLOT<br />span: id = narrativetext<br />
		 slot:  name="narrative"</slot></span>
		
	</div>
	
	
	<span style="position:absolute;top:460px;left:145px;"><slot="secondary"><fx-basicsecondarybutton ><slot = "secondarytext">EXPLORE</slot></<fx-basicsecondarybutton></slot></span>
	
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