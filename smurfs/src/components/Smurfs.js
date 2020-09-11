import React, {useEffect} from 'react'
import { connect } from "react-redux";




const Smurfs = ({datas}) => {
    
  
   

    return (
        <div>
            {
                datas.map((data) => (
                    <div>
                        <p>{data.name}</p>
                        <p>{data.age}</p>
                        <p>{data.height}</p>
                    </div>
                ))
            }
        </div>
            
    )
}

function mapStateToProps(state) {
    return {
        datas:state.datas
    }
}

export default connect(mapStateToProps,{})(Smurfs)