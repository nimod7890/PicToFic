import { createRoot } from "react-dom/client";
import App from "./app/App";
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
