import { createRoot } from "react-dom/client";
import App from "./App";
import momentSetting from "./app/libraries/moment";

function main(afterRender: () => void) {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw Error("#root not found");
  }

  const root = createRoot(rootElement);

  root.render(<App />);
  afterRender();
}

main(() => {
  momentSetting();
});
