class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessage(message) {
    const msg = this.createChatBotMessage(message);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  }

  greet() {
    this.addMessage("👋 Hi there! How can I help you today?");
  }

  handleHelp() {
    this.addMessage(
      "🆘 I can assist you with products, shipping, payments, orders, or guide you to the right section of the site."
    );
  }

  handleThanks() {
    this.addMessage("😊 You're very welcome! If you have more questions, I'm here to help.");
  }

  handleProductInquiry() {
    this.addMessage(
      "🛍️ To explore what we offer, head over to the *Products* tab where all available items are listed."
    );
  }

  handleShippingInfo() {
    this.addMessage(
      "🚚 Shipping typically takes between 2 to 5 business days, depending on your location."
    );
  }

  handlePaymentInfo() {
    this.addMessage(
      "💳 We accept both card payments and mobile money (MoMo). You can proceed with payment from the cart section."
    );
  }

  handleOrderStatus() {
    this.addMessage(
      "📦 To track your order, please provide your order ID and I’ll help you with the status."
    );
  }

  handleHomeTab() {
    this.addMessage(
      "🏠 You can visit the *Home* tab to see featured products and general highlights."
    );
  }

  handleProductsTab() {
    this.addMessage(
      "🛒 Head over to the *Products* tab to browse everything we have in store."
    );
  }

  handleAboutTab() {
    this.addMessage(
      "ℹ️ If you're curious about us, check out the *About* tab to learn our story."
    );
  }

  handleContactTab() {
    this.addMessage(
      "📞 Need to reach us? You’ll find support options in the *Contact* tab."
    );
  }

  handleNavigationHelp() {
    this.addMessage(
      `📁 Here's what you can check out on the site:
- 🏠 *Home*: Overview and featured items
- 🛍️ *Products*: See what we sell
- ℹ️ *About*: Learn who we are
- 📞 *Contact*: Reach our support team`
    );
  }

  handleUnknown() {
    this.addMessage(
      "🤔 I’m not quite sure what you meant. You can ask me about your order, payment, or where to find something!"
    );
  }
}

export default ActionProvider;
