window.addEventListener("OpusAddToCartComplete",(event)=>{
  const product = event.detail?.item;

fbq('track', 'AddToCart',{
// customdata send fbq
  content_name: product?.product_title,
  content_ids: product?.id,
  content_type: 'product',
  value:product?.price ,
})

})
