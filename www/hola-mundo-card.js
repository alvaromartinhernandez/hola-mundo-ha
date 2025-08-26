class HolaMundoCard extends HTMLElement {
  setConfig(config) {
    this.config = config;
  }

  getCardSize() {
    return 1;
  }

  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = this.config.title || '¡Hola Mundo!';
      this.content = document.createElement('div');
      this.content.style.padding = '16px';
      this.content.innerHTML = `
        <h2>${this.config.message || '¡Bienvenido a Home Assistant!'}</h2>
        <p>Esta es tu primera tarjeta personalizada 🎉</p>
      `;
      card.appendChild(this.content);
      this.appendChild(card);
    }
  }

  static getStubConfig() {
    return {
      title: "Mi Tarjeta Personalizada",
      message: "¡Hola desde mi primera integración!"
    };
  }
}

customElements.define('hola-mundo-card', HolaMundoCard);

console.log('Hola Mundo Card loaded successfully!');