import React from 'react'
import styled from 'styled-components'

const Direct = styled.img`
    width: 76px;
    height: 130px;

`

class Where extends React.Component{

    render(){
        return(
            <div className="my-5">
                <h1>ค่ายนี้จัดที่ไหน?</h1> 
                <Direct className="m-5" src="static/img/Vector.png" />
                <img src="static/img/image.png" width="700" height="424"/>
                <p>คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
            </div>
        )
    }
}
export default Where;
