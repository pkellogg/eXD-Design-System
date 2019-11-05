(function() {
	
	const template = document.createElement('template');
	template.innerHTML = `
    <div class="fximageclass" >
	<slot name="card-image"></slot>
	</div>`;

	class FxImage extends HTMLElement {
		
	constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
	
	}
	window.customElements.define('fx-image', FxImage);
})();