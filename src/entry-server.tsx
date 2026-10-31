import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import React from "react";

// Export the render function that prerender.js will import
export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}

// Dynamic routing exports for prerender script
export { figmaProjects } from "./data/projects";
