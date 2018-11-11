import React from 'react'
import styled from 'styled-components'

const Direct = styled.img`
    width: 76px;
    height: 130px;

`

<<<<<<< HEAD
=======
const Map = styled.img`
    width:500px;
    height: 300px;

`

const Ms = styled.p`
    font-size:40px;

`
const Pp = styled.img`
    width: 200px;
    height: 150px;

`





>>>>>>> 8a52acb493c3bdf3a72f6198ab6c85c1b4858890
class Where extends React.Component{

    render(){
        return(
            <div className="my-5">
                <h1>ค่ายนี้จัดที่ไหน?</h1> 
                <Direct className="m-5" src="static/img/Vector.png" />
<<<<<<< HEAD
                <img src="static/img/image.png" width="700" height="424"/>
                <p>คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
=======
                <br></br><Map src="static/img/image.png" width="913" height="637"/>
                <Ms>คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</Ms>
                <Pp src="static/img/Passport.png"/>

>>>>>>> 8a52acb493c3bdf3a72f6198ab6c85c1b4858890
            </div>
        )
    }
}
export default Where;
