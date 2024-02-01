function Gallery(props){ 
    return(
    <div className="box">
        <img alt="dog">{props.img}</img>
        <p>{props.name}</p>
    </div>)
}


let dog_variety =[
    {
        img:`https://source.unsplash.com/250x250/?dog?1`,
        name:"Boston Terrier"
    },
    
    {
        img:`https://source.unsplash.com/250x250/?dog?5`,
        name:"Doberman"
    },

    {
        img:`https://source.unsplash.com/250x250/?dog?10`,
        name:"German Pinscher"
    },

    {
        img:`https://source.unsplash.com/250x250/?dog?3`,
        name:"Miniature Pinscher"
    },

    {
        img:`https://source.unsplash.com/250x250/?dog?11`,
        name:"Basenji"
    },

    {
        img:`https://source.unsplash.com/250x250/?dog?2`,
        name:"Caucasian Shepherd"
    }
]

export default Gallery;
export {dog_variety}