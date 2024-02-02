let dog_variety =[
    {
        pic:"https://source.unsplash.com/250x250/?dog?1",
        name:"Boston Terrier"
    },
    
    {
        pic:`https://source.unsplash.com/250x250/?dog?5`,
        name:"Doberman"
    },

    {
        pic:`https://source.unsplash.com/250x250/?dog?10`,
        name:"German Pinscher"
    },

    {
        pic:`https://source.unsplash.com/250x250/?dog?3`,
        name:"Miniature Pinscher"
    },

    {
        pic:`https://source.unsplash.com/250x250/?dog?11`,
        name:"Basenji"
    },

    {
        pic:`https://source.unsplash.com/250x250/?dog?2`,
        name:"Caucasian Shepherd"
    },
    {
        pic:`https://source.unsplash.com/250x250/?dog?11`,
        name:"Basenji"
    },

    {
        pic:`https://source.unsplash.com/250x250/?dog?2`,
        name:"Caucasian Shepherd"
    }
]

function Gallery(props){ 
    return(
    <div className="box">
        <img src={props.pic} alt="dog"></img>
        <p>{props.name}</p>
    </div>)
}


export default Gallery;
export {dog_variety}