(function() {
	
const template = document.createElement('template');
template.innerHTML = `
    <style>
.fxbuttonclass {
	background-color:var(--fedexpurple);
	color: var(--fedexwhite);
	height:30px;
	width:100px;
	box-shadow: 0px 5px 5px #888888;
	font-family:roboto;
	font-size: 14px;
	text-align: center;
	line-height:30px;
	z-index:100;
	position:absolute;
	}
	
.button {
    
    position: absolute;
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
}

.button:after {
    content: "";
    background: gray;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -10px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
</style>

<div class="button" style="position:absolute;">
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