import React from 'react'
import './imageList.css'

const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        return <img key={img.id} src={img.urls.small} alt={img.alt_description}/>
    })
    return (
        <div className="image_list">{imgs}</div>
        
    )
}
export default ImageList;