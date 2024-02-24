if (navigator.serviceWorker) {
  navigator.serviceWorker.ready.then(reg => {
    // console.log(reg);

    self.addEventListener("install", (e) => {
      console.log('Installed', e);
    })
  })
}


// // Listen for install event
// self.addEventListener("install", (event) => {
//   console.log("Service worker installed");
// });

// // Listen for activate event
// self.addEventListener("activate", (event) => {
//   console.log("Service worker activated");
// });

// // Listen for fetch events
// self.addEventListener("fetch", (event) => {
//   console.log("Fetching:", event.request.url);
// });