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

const What1 = styled.h1`
    color : white;
    font-size: 50px;
    

`

class What extends React.Component{

    render(){
        return(
            <div>
                <What1><h1>ค่ายนี้มีอะไรบ้าง?</h1></What1>
            <p>Hello PorlarBear คือ ค่ายที่จะพามาเจาะลึกชีวิตชาวหมีอย่างพวกเรา นอกจากความรู้และประสบการณ์ด้านไอทีที่น้องจะได้รับ น้อง ๆ จะได้มีโอกาสสัมผัสชีวิตของการเป็นนักไอทีอย่างแท้จริง มีร่วมสร้างโปรเจ็คที่ยิ่งใหญ่ไปด้วยกัน ณ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
สวัสดีหมีขั้วโลกตัวน้อย อากาศหนาวแบบนี้เรามาอยู่รวมกันดีมั้ย เอาล่ะ!! เรามาดูกันเลยดีกว่าว่าจะมีหมีชนิดไหนให้น้องๆได้ร่วมทีมบ้าง</p>
            
                
            <a href="#" class="alert-link">
                <Ice1 img src="static/img/group6.png"></Ice1>
            </a>
                
            <a href="#" class="alert-link">
                <Ice2 img src="static/img/group7.png" ></Ice2>
            </a>
                
            <a href="#" class="alert-link">
                <Ice3 img src="static/img/group5.png"></Ice3>
            </a>
                
            <a href="#" class="alert-link">
                <Ice4 img src="static/img/group2.png" ></Ice4>
            </a>
                                
<p>ทีนี้น้องๆก็รู้แล้วใช่มั้ยว่าอยากเป็นหมีอะไร อย่าลืมสมัครกันเข้ามาแล้วเราจะร่วมตะลุยความหนาวไปด้วยกัน!!</p>
            </div>
        )
    }
}
export default What;
