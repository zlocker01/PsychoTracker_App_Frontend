// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import './styles/styles.css';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    // code for new app version
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({type: "SKIP_WAITING"});
      // Des-registramos el SW para recargar la página y obtener la nueva versión. Lo cual permite que el navegador descargue lo nuevo y que invalida la cache que tenía previamente.
      window.location.reload();
    }
  },
});
