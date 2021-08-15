import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './preview-collection.styles.scss'
const CollectionPreview=({title , items})=>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter(( item ,id)=>id<4).map(({id, ...otherprops})=>(
                        <CollectionItem key={id} {...otherprops}/>
                    ))
                }

            </div>
        </div>



 
        )}
        export default CollectionPreview;