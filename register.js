"use strict";

async function register() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "service-worker.js"
      );

      console.log("registered", registration);
    } catch (e) {
      console.log("failed to register", e);
    }
  }
}

window.addEventListener("load", register);
