class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const msg = message.toLowerCase().trim();

    if (!msg || msg.length === 0) {
      return this.actionProvider.handleUnknown();
    }

    const keywordMatch = (keywords) =>
      keywords.some((kw) => msg.includes(kw));

    const patterns = [
      {
        keywords: ["hello", "hi", "hey", "greetings", "howdy", "yo", "sup", "what's up", "what's good", "how's it going", "how are you", "how do you do", "how's everything", "how's life", "how's your day", "how's your day going", "how's your week", "how's your week going", "how's your month", "how's your month going", "how's your year", "how's your year going", "how's your day been", "how's your week been", "how's your month been", "how's your year been"], 
        action: () => this.actionProvider.greet(),
      },
      {
        keywords: ["help", "assist", "support", "how do i"],
        action: () => this.actionProvider.handleHelp(),
      },
      {
        keywords: ["thank you", "thanks", "appreciate", "grateful", "thankful", "thx", "ty", "cheers", "much appreciated", "many thanks", "thanks a lot", "thanks so much", "thank you very much", "thank you so much", "thank you kindly", "thank you for your help", "thank you for your assistance", "thank you for your support", "thank you for your time", "thank you for your consideration", "thank you for your understanding", "thank you for your cooperation", "thank you for your feedback", "thank you for your response", "thank you for your message", "thank you for your inquiry", "thank you for your interest", "thank you for your attention"],
        action: () => this.actionProvider.handleThanks(),
      },
      {
        keywords: [
          "product",
          "item",
          "catalog",
          "available",
          "what do you sell",
          "show me products",
          "show me items",
          "show me the catalog",
          "show me the products",
          "show me the items",
          "show me the collection",

        ],
        action: () => this.actionProvider.handleProductInquiry(),
      },
      {
        keywords: ["shipping", "delivery", "how long", "arrive", "ship"],
        action: () => this.actionProvider.handleShippingInfo(),
      },
      {
        keywords: ["payment", "pay", "checkout", "momo", "card", "credit", "debit", "payment method", "payment options", "payment types", "payment methods", "payment options available", "payment types available", "payment methods accepted", "payment options accepted", "payment types accepted"],
        action: () => this.actionProvider.handlePaymentInfo(),
      },
      {
        keywords: ["order status", "track", "order id", "my order"],
        action: () => this.actionProvider.handleOrderStatus(),
      },
      {
        keywords: ["home", "main page", "homepage"],
        action: () => this.actionProvider.handleHomeTab(),
      },
      {
        keywords: ["products", "shop", "browse", "items"],
        action: () => this.actionProvider.handleProductsTab(),
      },
      {
        keywords: ["about", "company", "who are you", "your story", "your mission", "your vision", "your values", "your team", "your history", "your background", "your experience", "your expertise", "your qualifications", "your credentials", "your achievements", "your accomplishments"],
        action: () => this.actionProvider.handleAboutTab(),
      },
      {
        keywords: ["contact", "customer service", "reach", "get in touch", "support", "help", "contact us", "contact information", "contact details", "customer support", "customer service", "customer care", "customer assistance", "customer help", "customer inquiries", "customer questions", "customer feedback", "customer complaints"],
        action: () => this.actionProvider.handleContactTab(),
      },
      {
        keywords: ["tabs", "sections", "pages", "menu", "navigation", "where can i go"],
        action: () => this.actionProvider.handleNavigationHelp(),
      },
    ];

    // Run through pattern matches
    for (const pattern of patterns) {
      if (keywordMatch(pattern.keywords)) {
        return pattern.action();
      }
    }

    // If no matches found
    return this.actionProvider.handleUnknown();
  }
}

export default MessageParser;
