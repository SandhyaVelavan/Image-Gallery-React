import Container from "./container"
import Gallery from "./gallery"
import {dog_variety} from "./gallery"

function App(){
    return(
    <div>
        <Container></Container>
        <Gallery></Gallery>
        <dog_variety></dog_variety>
    </div>)
}

export default App
export {dog_variety}