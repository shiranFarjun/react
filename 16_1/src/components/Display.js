import React from 'react';


const Display = (props) => {
    const imagesResults = props.data.map((element) => {
        return (
            <div key={element.id} style={{ margin: '8px', width: '300px', padding: '30px', textAlign: 'center', borderRadius: '30px', border: '3px solid #98a28b' }} >
                <h3>{element.title}</h3>
                <h5>price: {element.price}</h5>
                <img src={element.imageUrl} style={{ width: '250px' }}></img>
            </div>
        );
    });
    console.log(imagesResults)
    return (
        <div className="image" >
            {imagesResults}
        </div>
    );
}

export default Display;
