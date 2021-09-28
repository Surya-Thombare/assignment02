import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { playersAction } from "../redux/actions/playersAction";
import Card from "../components/card";
import ListCard from "../components/listCard";

function MainPage(props) {
    // console.log("hi",props.data.playersData.playerList);
    
    const Data = props.data.playersData.playerList

    console.log("mainPage",Data);
    useEffect(() => {
        props.playersAction()
    },[]);

    return (
        <div 
        style={{
            width: "100%",
            display: "flex",
          }}
          >
              
                  <Card  pData={Data}/>
            
            
        </div>
    )
}

const mapStateToProps = (storeState) => {
    return {
      data : storeState.PlayersState
    };
  };

export default connect(mapStateToProps, { playersAction }, )(MainPage);
