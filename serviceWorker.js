export function registerServiceWorker() {
  if ("serviceWorker" in navigator)
    window.addEventListener("load", loadServiceWorker);
}

async function loadServiceWorker() {
  try {
    const registration = await navigator.serviceWorker.register("./serviceWorker.js");

    console.log("Service Worker registered:", registration);
  } catch(error) {
    console.error("Service Worker registration failed:", error);
  }
}

console.log('Loading serviceWorker.js');


// Listen for install event
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});

// Listen for activate event
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

// Listen for fetch events
self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
});
