(function () {

    let template = `
    <style>
        @import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700);
    .container {
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 0 5px #dadada;
        position: relative;
         
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 22px
        color: white;
        margin: 10px 0;
       
    }
    .container .left {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 30%;
        color: #FFF;
        border-radius: 5px 0 0 5px;
        text-align: center;
        padding: 18px 0 0 0;
    }
    .container .left .month {
        line-height: 20px;
        font-weight: 300;
    }
    .container .left .day {
        font-size: 40px
    }
    .container .right {
        margin-left: 30%;
        padding: 10px 10px 10px 15px;
        color: #333;
    }
    .container .right .day-long {
        font-weight: 300;
        font-size: 18px;
        line-height: 35px;
    }
    .container .right .time {
        font-weight: bold;
        font-size: 35px;
        line-height: 40px;
    }
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
    .container.blue {
        background-color: #356dbc;
    }
    .container.blue .day-long {
        color: #2d5ea3;
    }
    .container.gold  {
        background-color: #bc9600;
    }
    .container.gold .day-long {
        color: #9a7b00;
    }
    </style>
   
   
   <form  onclick="$(this).focus();" style="position:relative;fontsize:22px;">
<input type="radio" class="fxradiobuttonclass" id="fxradio" style=" -ms-transform: scale(2); /* IE 9 */
    -webkit-transform: scale(2); /* Chrome, Safari, Opera */
    transform: scale(2);">
<label for="fxradio" class="container"   style="font-size:22px;font-family:roboto;">fx-radiobutton</label>	
</form> 
   
   
   
   
   
   
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
    customElements.define('fx-buttons', NewWidget);
})();