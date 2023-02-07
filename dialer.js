document.addEventListener('DOMContentLoaded',function() {
  console.log("dialer page loaded");

  window.addEventListener("message", function(event) {
    try {
      let message = JSON.parse(event.data);

      if (message) {
        if (message.type === "clickToDial") {
          console.log("click-to-dial executed...");
        } else {
          console.log("no message available");
        }
      }
    } catch {
      console.error("Unable to parse JSON payload");
    }
  });

});
