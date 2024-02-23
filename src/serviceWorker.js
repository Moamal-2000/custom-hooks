export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) return;
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

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
