window.OpusNoATC = true;
window.OpusApiCompareAtPrice = ["url"];

(function (ns, fetch) {
  ns.fetch = function() {
    const response = fetch.apply(this, arguments);
    response.then(res => {
      if (`${window.location.origin}/cart/add.js`
      	.includes(res.url)) {
        	if(typeof window.opusOpen === "function") window.opusOpen();
      }
    });
    return response
  }
}(window, window.fetch))