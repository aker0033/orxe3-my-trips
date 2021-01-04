import {LitElement, html, property} from 'lit-element';

export class LitTerms extends LitElement {
  [x:string]:any;
  @property()phoneNumber = '1-800-675-8899';

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
          .terms-container {
          background-color: rgb(10, 72, 110);
          width: 100%;
          min-height: 100px;
          max-height: 300px;
          height: auto;
          border-style: ridge;
          border-width: thin;
          }
          .terms-text{
            text-align:center;
            color: white;
          }
          .terms-row{
            text-align: center;
          }
          .terms-link{
            color: white;
          }
      </style>
        <div class="table">
          <div class="terms-row">
            <ul>
              <li>Cancelation Policy</li>
              <div>Cancelation allowed within 36 hours of booking. Contact agent at ${this.phoneNumber} </div>
              <li>3rd party content</li>
              <div>Travel details displayed on our site comes from 3rd party content providers and may not reflect cxLoyaltys privacy policy</div>
              <li>Personal data</li>
              <div>cxLoyalty doesn't share your information with 3rd parties</div>
            </ul>
          </div>
        </div>
    `;
  }

}
customElements.define('lit-terms', LitTerms);
