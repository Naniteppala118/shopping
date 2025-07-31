const Collection = (props) => {
    const {title,image1,image2,image3,image4}= props.gentsFashion
    return ( 
        <div className="collectionSection">
            <h2>{title}</h2>
            <div className="menImages">
                <img src={image1}/>
                <img src={image2}/>
                <img src={image3}/>
                <img src={image4}/>
                <img src={image1}/>
                <img src={image2}/>
            </div>
            
        </div>
     );
}
 
export default Collection;