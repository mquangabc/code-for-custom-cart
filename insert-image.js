window.addEventListener ('OpusCartChange', (event) => {

    if (!document.querySelector('.opus-extra-image')) {
    
    document.querySelector('#opus-checkout-btn'). insertAdjacentHTML(
    
    "afterend",`
    
    <div class="opus-extra-image" style="width: 100%; display: flex; justify-content: center; margin-top: 10px; gap: 4px;">
    
    <img src="https://cdn.shopify.com/s/files/1/0809/7975/5201/files/checked.png" alt="Extra Image" style="max-width: 16px; height: 16px;"><div>ELIGIBLE FOR FREE SHIPPING </div> </div>
    
    `) ;
    }})