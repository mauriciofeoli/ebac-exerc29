describe('Fluxo de compra no iOS', () => {
  it('valida o acesso do cliente', () => {
    const loginButton = $('~login-button');
    const emailInput = $('~email-input');
    const passwordInput = $('~password-input');

    emailInput.setValue('usuario@teste.com');
    passwordInput.setValue('senha123');
    loginButton.click();

    const homeTitle = $('~home-title');
    expect(homeTitle).toBeDisplayed();
  });

  it('navega pelo catalogo de produtos', () => {
    const browseTab = $('~browse-tab');
    browseTab.click();

    const browseTitle = $('~browse-title');
    expect(browseTitle).toBeDisplayed();
  });

  it('adiciona um produto ao carrinho', () => {
    const productItem = $('~product-1');
    productItem.click();

    const addToCartButton = $('~add-to-cart-button');
    addToCartButton.click();

    const cartBadge = $('~cart-badge');
    expect(cartBadge).toHaveText('1');
  });

  it('conclui o pedido pelo pagamento', () => {
    const cartTab = $('~cart-tab');
    cartTab.click();

    const checkoutButton = $('~checkout-button');
    checkoutButton.click();

    const paymentMethod = $('~payment-method');
    paymentMethod.click();

    const payNowButton = $('~pay-now-button');
    payNowButton.click();

    const orderConfirmation = $('~order-confirmation');
    expect(orderConfirmation).toBeDisplayed();
  });
});
