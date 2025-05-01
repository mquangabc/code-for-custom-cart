window.OpusNoATC = true;
window?.OpusSetByVariantCompareAtPrice?.();

(function (ns, fetch) {
  ns.fetch = function() {
    const response = fetch.apply(this, arguments);
    response.then(res => {
      if (res.url.includes(`cart/add`) && res.ok) {
        	if(typeof window.opusOpen === "function") window.opusOpen();
      }
    });
    return response
  }
}(window, window.fetch))
