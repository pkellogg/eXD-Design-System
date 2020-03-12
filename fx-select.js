(function() {
class fxselect extends HTMLSelectElement {
		  
connectedCallback() {
	this.addEventListener("click", function(){alert('hi pat');}); 
    } 
}
customElements.define('fx-select', fxselect, {extends: 'select'});
})();