import Gallery from "./gallery"
import { dog_variety } from "./gallery"

function Container(){
    return(
    <div className="container">
        {
                dog_variety.map(function(variety){
                    return(
                    <Gallery pic={variety.pic} name= {variety.name}> </Gallery>
                    )
                })
            }
    </div>
    

)}

export default Container