   <script>
      // Lưu lại hàm fetch gốc
const originalFetch = window.fetch;

// Ghi đè fetch
window.fetch = async (...args) => {
  const [resource, config] = args;

  // 📌 Truy cập thông tin yêu cầu
  const method = config?.method || 'GET';
  const headers = config?.headers || {};
  const body = config?.body;

  // Gọi fetch gốc
  const response = await originalFetch(resource, config);

  // 📌 Truy cập phản hồi
  const clonedResponse = response.clone();
  const responseData = await clonedResponse.text();

  if(resource?.includes('cart/add')){
    const data =  JSON.parse(responseData);
     console.log('📥 Phản hồi API:', {
    url: resource,
    status: response.status,
    data:data,
  });
    if(data?.items[0]?.handle){
      const id = data?.items[0]?.id;
      fetch(`/products/${data?.items[0]?.handle}.js`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    const findVariant = data?.variants.find(i => i.id === id);
      console.log('Success:', findVariant, id);
    if(findVariant){
     
      window.OpusSetCompareAtPrice(id?.toString(), {
        rate: window?.Shopify?.currency?.rate,
        compareAtPrice: findVariant.compare_at_price,
      })
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });


      
    }
    
  }
 

  return response;
};
    </script>



       
// another way 
(function (ns, fetch) {
  ns.fetch = function() {
    const response = fetch.apply(this, arguments);
    response.then(res => {
      const url = new URL(res.url);
      if (res.url.includes(`/cart/add`)) {
        window?.opusOpen();
      }
    });
    return response
  }
}(window, window.fetch))
