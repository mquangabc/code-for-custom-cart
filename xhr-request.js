
window.OpusNoATC = true
const originalOpen = XMLHttpRequest.prototype.open;
const originalSend = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
  this._method = method;
  this._url = url;
  return originalOpen.apply(this, arguments);
};

XMLHttpRequest.prototype.send = function(body) {
  const xhr = this;

  // Gắn listener cho sự kiện khi request load xong
  xhr.addEventListener("load", function () {
    if (
      xhr._method === "POST" &&
      xhr._url.includes("/cart/add.js") &&
      xhr.status === 200
    ) {
      try {
        const response = JSON.parse(xhr.responseText);
        myCustomFunction(response); // Gọi custom function khi thành công
      } catch (e) {
        console.warn("Response không phải JSON hợp lệ:", xhr.responseText);
      }
    }
  });

  return originalSend.apply(this, arguments);
};

// Ví dụ custom function
function myCustomFunction(data) {
    window.opusOpen();
  console.log("🛒 Sản phẩm đã được thêm vào giỏ hàng:", data);
  // TODO: Bạn có thể log GA4, Facebook Pixel, hoặc bất kỳ xử lý nào ở đây
}

