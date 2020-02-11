(function() {
const template = document.createElement('template');

template.innerHTML = `
    <style>
#myProgress {
  width: 100%;
  background-color: #8e7cc3;
}

#myBar {
  width: 70%;
  height: 30px;
  background-color: #4D148C;
}
</style>
 
<div id="myProgress">
  <div id="myBar"></div>
</div>

<!--<br>
<button onclick="move()">Click Me</button>--> 
  `;

class progress extends HTMLElement {
    constructor() {
      super();
	  this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
	  }

    connectedCallback() {
      var i = 0;
		function move() {
			
			if (i == 0) {
				i = 1;
				var elem = this.shadowRoot.querySelector('#myBar');
				
				var width = 1;
				var id = setInterval(frame, 10);
				
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
		} else {
			width++;
			elem.style.width = width + "%";
      }
    }
  }
}
}
    
attributeChangedCallback(name, oldValue, newValue) {
    }

}
window.customElements.define('fx-progress', progress);
})(); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 

 
