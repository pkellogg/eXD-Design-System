(function() {
	
	const template = document.createElement('template');
	template.innerHTML = `
    <style>
.fxtrainclass {
	width:240px;
	height:10px;
	position:relative;
	top:25px;
	left:  90px;
	background-color:var(--fedexpurple);
	color: var(--fedexwhite);
	}
	
.train{
	position:relative;
	top:-10px;
	 
	margin-left:35px;
	width: 40px;
    height:40px;
	display:inline-block;
	color: var(--fedexwhite);
	text-align:center;
	line-height:38px;
	font-weight:bold;
    font-size:12px;
    background-color:var(--fedexpurple);
    border: none;
	padding: 0px;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    border-radius: 50%;
    outline: none;
	z-index:100;
    }
	
.inactive{
	background-color:silver;
	}
</style>
<hr class="fxtrainclass"></hr>
<div class="train" style="margin-left:200px;"><slot name="train-text1">?</slot></div>
<div class="train inactive"><slot name="train-text2">?</slot></div>
<div class="train inactive"><slot name="train-text3">?</slot></div>
<div class="train inactive"><slot name="train-text4">?</slot></div>`;

	class FxTrain extends HTMLElement {
		
	constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
	
	}
	window.customElements.define('fx-train', FxTrain);
})();