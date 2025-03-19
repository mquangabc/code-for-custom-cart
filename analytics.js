function trackShopifyAnalytics(inputData) {
    if (!inputData || !window.ShopifyAnalytics?.lib?.track) return;
    const product = inputData || {};
    window.ShopifyAnalytics.lib.track("Added Product", product, undefined, undefined, {
      addApiSource: 'add-fetch',
      shopifyEmitted: true
    });
  }
  const dataAnalytic = {
    productId: "8849493786789",
    variantId: "45038758297765",
    name: "Heart Cardigan",
    brand: "Test-Upsells01",
    url: "/products/heart-cardigan",
    type: "",
    variant: "Bronze / 2XS / VietNam",
    price: 335,
    currency: 'USD',
    quantity: 1,
    cartToken: "Z2NwLXVzLWVhc3QxOjAxSlBLSDZGMllYODFHM05QNzAxS05CV1k0?key=97d5dce12fe7a861dc4a2584cb872006"
  }
  trackShopifyAnalytics(dataAnalytic);