import React from 'react'
import styled from 'styled-components'

const Ice1 = styled.img`
    width : 140px;
    height : 140px;
    margin : 20px;


`
const Ice2 = styled.img`
    width : 140px;
    height : 140px;
    margin: 20px;


`
const Ice3 = styled.img`
    width : 140px;
    height : 140px;
    margin: 20px;


`
const Ice4 = styled.img`
    width : 140px;
    height : 140px;
    margin: 20px;
`

const Ice = styled.div`
    margin: 20px;
`
const Box = styled.div`
    background-color: rgba(146, 187, 230, 0.54);
    border: 0xp solid transparent;
    border-radius: 2em;
<<<<<<< HEAD
=======
    margin-top: -70px;
>>>>>>> 9368e0a0b68279198dfb9292e79560e32d4f2cc4
`


class What extends React.Component {


    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-2" />
                    <div className="col-12">
                        <Box className="mb-2 p-2">
                            <h1>ค่ายนี้มีอะไรบ้าง?</h1>
                            <p>Hello PorlarBear คือ ค่ายที่จะพามาเจาะลึกชีวิตชาวหมีอย่างพวกเรา นอกจากความรู้และประสบการณ์ด้านไอทีที่น้องจะได้รับ</p>
                            <p> น้อง ๆ จะได้มีโอกาสสัมผัสชีวิตของการเป็นนักไอทีอย่างแท้จริง มีร่วมสร้างโปรเจ็คที่ยิ่งใหญ่ไปด้วยกัน</p>
                            <p>ณ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
                            <p>อากาศหนาวแบบนี้เรามาอยู่รวมกันดีมั้ย เอาล่ะ!! เรามาดูกันเลยดีกว่าว่าจะมีหมีชนิดไหนให้น้องๆได้ร่วมทีมบ้าง</p>
                        </Box>
                    </div>
                    <div className="col-2" />
                </div>
                <div class="row">
                    <div class="col-6">
                        <Ice1 img src="static/img/group6.png"></Ice1>
                        <Ice className="my-60">
                            <Ice2 img src="static/img/group5.png" ></Ice2>
                        </Ice>
                    </div>

                    <div class="col-6">
                        <Ice1 img src="static/img/group7.png"></Ice1>
                        <Ice className="my-60">
                            <Ice2 img src="static/img/group2.png" ></Ice2>
                        </Ice>
                    </div>
                </div>
            </div>
        )
    }
}
export default What;
