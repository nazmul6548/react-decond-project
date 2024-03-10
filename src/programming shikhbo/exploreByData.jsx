
// import React from 'react'

// const styles = {
//     // display : "flex",
//     textAlign : "center",
//     justifyContent : "center",
//     backgroundColor : "gray",
//     width : "400px",
//     padding : "20px",
//     margin : "10px auto",
  
// }
// const Explorebydata = (props) => {
//     console.log(props.name);
//    return (
//     <div style={styles}>
// <h1>explor by data</h1>
// <h3>name: {props.name}</h3>
// <h4>Age: {props.age}</h4>
//     </div>
//    )
// }
// export default Explorebydata;

import React from 'react'
import './explorebydata.css'

const ExploreByData = () => {
  return (
    <div className='navcontainer'>
        {/* <h1>amar desh Bangladesh</h1> */}
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SKILL</a>
        <a href="#">CONTACT</a>
    </div>
  )
}

export default ExploreByData;