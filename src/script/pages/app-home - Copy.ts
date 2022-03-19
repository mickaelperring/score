import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {








  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css`

    h1 {
      text-align: center;
      font-family: 'Bowlby One SC', cursive;
    }


    html, body {
      background: #2b2b2b;
      margin: 0;
      font-family: 'Roboto Mono', ;
      font-family: 'Paytone One', sans-serif;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 800;
      line-height: 0.8;
    }



    #elem {
      background: green;
    }
    #elem:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }

    #s:-webkit-full-screen {
      width: 100%;
      height: 100%;
      background: red;
      font-size: 3000%;
    }

    #c1:-webkit-full-screen {
      background: blue;
    }

    #c1{
      background: blue;
      text-align: end;
    }

    #c2  {
      background: green;
      text-align: start;
    }


    text-align: start;


    #elem2 {
      background: red;
    }
    .row {
      display: flex;
    }

    .column {
      flex: 50%;
    }
}


    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');


        // Give the browser a chance to paint
        await new Promise((r) => setTimeout(r, 2000));
        const elem = this.shadowRoot.getElementById("elem");
        const s = this.shadowRoot.getElementById("s");
        const button = this.shadowRoot.getElementById("button");

        button.addEventListener('click', () => {
          if (s.webkitRequestFullScreen) {
            s.webkitRequestFullScreen();
          }
        });



  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`

      <div>


      <div class="row" id = "s">
      <div class="column" id = "c1">A</div>
      <div class="column"id = "c2">B</div>
    </div>
    <button id="button" type="button">Full Screen</button>



      </div>
      <pwa-install>Install PWA Starter</pwa-install>
    `;
  }
}
