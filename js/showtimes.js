/**
 * Sycamore Showtimes component.
 * Handles loading of showtimes component.
 *
 */
(function ($, Drupal) {
  Drupal.behaviors.showtimes = {
    attach: function (context, settings) {

      var assetspath = String($('#syca_embedNticketsContainer').data('assetspath'));
      console.log("showtimes assetspath", assetspath);
      
      var scriptTag_sycaconst = document.createElement('script');
      scriptTag_sycaconst.setAttribute("type", "text/javascript");
      scriptTag_sycaconst.setAttribute("src", assetspath + "assets/js/sycaconst.js");
      scriptTag_sycaconst.setAttribute("defer", "defer");
      (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag_sycaconst);
    },
  };
})(jQuery, Drupal);
