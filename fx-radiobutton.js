(function () {

    let template = `
    <style>
        @import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700);
    
   
    /* THEME CODE */
    
    
    .container.green  {
        background-color: #37bc9b;
    }
    .container.green .day-long {
        color: #278b70;
    }
    .container.red   {
        background-color: #bc2751;
    }
    .container.red .day-long {
        color: #922146;
    }
    
    .container.blue .day-long {
        color: #FF6200;
    }
    .container.gold  {
        background-color: #bc9600;
    }
    .container.gold .day-long {
        color: #9a7b00;
    }
    </style>
   
   
    
<input type="radio" class="fxradiobuttonclass" id="fxradio" style="-webkit-transform: scale(2);transform: scale(2);background-color:#007AB7;color:#007AB7;">
<label for="fxradio"    style="font-size:26px;font-family:roboto;padding-left:10px;color:#007AB7;">fx-radiobutton</label>	
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
            var val = "white"; //defaults to green if no theme defined on drop
            if (["white","green", "red", "blue", "gold"].indexOf(theme) > -1) {
                val = theme;
            }
        this.$container.className = "container " + val;
        }
    }
    customElements.define('fx-radiobutton', NewWidget);
})();