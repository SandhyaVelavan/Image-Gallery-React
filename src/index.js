import reactDOM from "react-dom/client"
import "../src/style.css"
import App from "./components/app.js"
import { dog_variety } from "./components/gallery.js";
import Gallery from "./components/gallery.js";


let root = reactDOM.createRoot(document.querySelector("#root"));

root.render(
    <div>
    <App></App>
{
    dog_variety.map(function(variety){
        return(
        <Gallery img={variety.img} name= {variety.name}> </Gallery>
        )
    })}
    </div>
)