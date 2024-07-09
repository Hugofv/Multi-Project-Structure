import { LitElement, html, css } from 'lit-element';
import styles from './../../styles/menu-item-styles.scss';
import '../tag';

class MenuItem extends LitElement {
  static properties = {
    available: { type: Boolean },
    name: { type: String },
    description: { type: String },
    price: { type: String },
    popularFlag: { type: String },
    image: { type: String },
    tags: { type: Array },
  };

  static styles = css`
    ${styles}
  `;

  constructor() {
    super();
    this.label = 'Click Me';
  }

  handleClick() {
    this.dispatchEvent(new Event('button-click'));
  }

  render() {
    return html`<div
      class="menu-item ${this.available ? '' : 'menu-item--unavailable'}"
    >
      <div class="menu-item__content">
        <div class="menu-item__header">
          <h3 class="menu-item__name">${this.name}</h3>
          ${this.description
            ? html`<div class="menu-item__description">
                ${this.description}
              </div>`
            : ''}
        </div>
        <div class="menu-item__additional">
          ${this.available
            ? html`<span class="menu-item__price"> ${this.price} </span>`
            : html`<span>icon</span>`}
          ${this.popularFlag ? `<span>icon tag</span>` : ''}
        </div>
      </div>
      ${this.image
        ? html`<div class="menu-item__image">
            <img src="${this.image}" alt="${this.name}" />
          </div>`
        : ''}
      ${this.tags?.length > 0
        ? html`<div class="menu-item__tags">
            ${this.tags.map(
              (tag) => html`<custom-tag key="${tag}" type="label" label="${tag}" />`
            )}
          </div>`
        : null}
    </div>`;
  }
}

customElements.define('menu-item', MenuItem);
