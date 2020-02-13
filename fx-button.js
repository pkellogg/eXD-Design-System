(function() {
	
const template = document.createElement('template');
template.innerHTML = `
    <style>
.fxbuttonclass {
	background-color:#4D148C;
	color: white;
	height:60px;
	width:75px;
	//box-shadow: 0px 5px 5px #888888;
	font-family:roboto;
	font-size: 20px;
	text-align: left;
	line-height:30px;
	z-index:100;
	padding:5px;
	cursor:pointer;
	border-radius: 7%;
	 
	}
	
.button {
    
     
    background-color: red;
    border: none;
    box-shadow: 5px 5px 10px rgb(170 170 170);
    color: #FFFFFF;
    padding: 0px;
    width: 70px;
    height:70px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    border-radius: 50%;
    outline: none; 
	cursor: pointer;
}



.button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
</style>

<div class="fxbuttonclass"  >
<slot name="button-image"></slot>
<slot name="buttonpos"></slot>
</div>`;

	class FxButton extends HTMLElement {
		
	constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
	
	}
	window.customElements.define('fx-button', FxButton);
})();