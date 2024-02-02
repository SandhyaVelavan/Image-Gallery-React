import reactDOM from "react-dom/client"
import "../src/style.css"
import App from "./components/app.js"

let root = reactDOM.createRoot(document.querySelector("#root"));

root.render(
    <App></App>
)