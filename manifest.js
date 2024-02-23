export const manifestForPlugin = {
  registerType: "prompt",
  manifest: {
    name: "Hooks time",
    short_name: "Hooks time",
    description: `Explore a treasure trove of custom React hooks on our website, 
    each accompanied by detailed explanations, live code examples, 
    and input/output demonstrations. Copy and download the code effortlessly, 
    and stay tuned as we regularly add new hooks. Enhance your React projects with our comprehensive collection. 
    Download all hooks as a convenient RAR file for seamless integration.`,
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "maskable",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#181818",
    background_color: "#181818",
    display: "standalone",
    scope: "/",
    start_url: "https://main--hooks-time.netlify.app/",
    orientation: "portrait",
  },
};
