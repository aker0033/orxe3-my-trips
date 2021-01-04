import { RouterModule, Router, RouterLink } from '@angular/router';
import {LitElement, html, property} from 'lit-element';

class LitFooter extends LitElement {


  [x:string]:any;
  @property()footerText = 'ORXe My Trips';

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
          .footer-container {
          background-color: rgb(10, 72, 110);
          width: 100%;
          min-height: 100px;
          max-height: 300px;
          height: auto;
          border-style: ridge;
          border-width: thin;
          }
          .footer-text{
            text-align:center;
            color: white;
          }
          .footer-row{
            text-align: center;
          }
          .footer-link{
            color: white;
          }
      </style>
      <footer class="footer-container">
        <h4 class="footer-text"> ${this.footer}</h4>
        <div class="table">
          <div class="footer-row">
            <a class="footer-link" href="/contact">Contact Us</a>
          </div>
          <br>
          <div class="footer-row">
            <a class="footer-link" href="/faq">FAQ</a>
          </div>
          <br>
          <div class="footer-row">
            <a class="footer-link" href="/terms">Terms and conditions</a>
           </div>
        </div>
      </footer>
    `;
  }

}
customElements.define('lit-footer', LitFooter);
