import React from 'react'
import Card from "./card";

const listCard = ({data}) => {
    // console.log(data);
    return (
        <div 
        style={{
            width: "100%",
            display: "flex",
            flexWrap: "noWrap",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
            <Card pData={data}/>
        </div>
    )
}

export default listCard

