 (function () {

    let template = `
    <style>
        @import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700);
		
		div {color:white;}
    
    </style>
   
   
   <div contenteditable="true" style="width:300px;height:200px;background-color:slateblue;position:relative;">This is a sample web component in the shadow dom</div>
 `;

     class NewWidget extends HTMLElement {

        connectedCallback() {
            this.createShadowRoot().innerHTML = template;
            this.$container = this.shadowRoot.querySelector('.container');
            this.updateTheme(this.getAttribute('theme'));
        }
         
        attachedCallback() {}
         
        attributeChangedCallback(attrName, oldVal, newVal) {
            switch (attrName) {
                case "theme":
                    this.updateTheme(newVal);
                    break;
                }
        }
        
        updateTheme(theme) {
            var val = "green"; //defaults to green if no theme defined on drop
            if (["green", "red", "blue", "gold"].indexOf(theme) > -1) {
                val = theme;
            }
        this.$container.className = "container " + val;
        }
    }
    customElements.define('fx-div', NewWidget);
})();