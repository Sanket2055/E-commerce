import React from"react";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import SHOP_DATA from "./shop.data";
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }   
    render(){
        const {collections} =this.state;

        return(
            collections.map(({id , ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        )
    }
}
export default ShopPage;