import React from "react";

export const ImageSlider =({image})=>{
    console.log(image)
    return (
        <div>
            <img src={image.src} alt={image.title} style={{width:"500px",height:"350px"}}/>
        </div>
    )
}