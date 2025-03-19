window.addEventListener('OpusCartChange', (event)=>{
    console.log(event);
      const data = event.detail;
    const sectionCustom = document.querySelector('#opus-price-ct-container');
  if(sectionCustom){
    sectionCustom.remove()
  }
    const stringOpus = window.localStorage.getItem('opusCartV2');
   const ObjectPrice = JSON.parse(stringOpus);
    let discountCompare = 0;
      const listItemDetail = data.items;
      for(const item of listItemDetail){
      const listKeys = Object.keys(ObjectPrice);
  if(listKeys.includes(`${item.id}`)){
    const ogPrice = ObjectPrice[`${item.id}`]?.compareAtPrice || 0;
    
    if(ogPrice){
      const flPrice = item.final_price;
    const lastPrice = ogPrice - flPrice;
      console.log(ogPrice, )
  
    discountCompare= discountCompare+ (lastPrice*item.quantity);
      
    }
    
  }
  
  console.log(discountCompare);
  }
    
    const checkoutBtn = document.querySelector(".cd-checkout-section-container");
         checkoutBtn.insertAdjacentHTML(
              "beforebegin",
              `<div id="opus-price-ct-container" style="width: 100%; display: flex; flex-direction: column; font-size: 1.3em; padding-top: 5px; ">
                  ${discountCompare ? `
                  <div style="display: flex; justify-content: space-between; align-items: center; border-radius: 4px;">
                      <span style="color: #4caf50; font-weight: bold; cursor: pointer;">
                      Descuento Aplicado
                      </span>
                      <span style="color: #4caf50; font-weight: bold; cursor: pointer;"> -${window.OpusConvertMoney(discountCompare)}</span>
                  </div>
                  ` : ""}
                  
                  <div style="width: 100%; display: flex; padding-top: 1px; justify-content: space-between; font-weight: bold; gap: 10px; margin: auto;">
                      <span style="flex-shrink: 0; align-items: center;">
                      <strong>Subtotal:</strong>
                      </span>
                      
                      <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
                      <span>${data.money}</span>
                      </div>
                  </div>
              </div>`
          );
  
  });
  