class BottleWhiskey extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  set whiskey(whiskey) {
    this.innerHTML = `
      <img src="${whiskey.img ? whiskey.img : ''}">
    `;
  }
}
