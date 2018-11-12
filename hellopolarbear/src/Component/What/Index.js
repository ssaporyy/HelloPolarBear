import React from 'react'
import styled from 'styled-components'

const Ice1 = styled.img`
    width : 140px;
    height : 140px;
    margin : 20px;
    cursor: pointer;
    &:hover{
        width:150px;
        height:150px;
    }
`


const Ice = styled.div`
    margin: 20px;
`
const Box = styled.div`
    background-color: rgba(146, 187, 230, 0.54);
    border: 0xp solid transparent;
    border-radius: 2em;
    margin-top: -70px;
`
const Content = styled.div`
    background: rgba(0,0,0,.5);
    border: 2px solid #fff;
    border-radius: 1em;
    font-size: 20px;
`



class What extends React.Component {
    state = {
        front: "สู่เส้นทางการเตรียมความพร้อมในการเป็น Front-End Developers เหล่าหมีขั้วโลกทั้งหลายได้ทะยานเข้าสู่ Git Commandดื่มด่ำการเขียน React.js ฝึกฝนพัฒนาการในด้านศาสตร์และศิลป์ในการตกแต่งเว็บด้วย styled-components Boostrap อย่าช้า มาผจญภัยกันเถอะ",
        design: `เหล่าหมีขั้วโลกตัวน้อยนักออกแบบ จะได้สรรค์สร้างเว็บไซต์สุดล้ำ นำเทรนด์ และตอบสนองต่อความต้องการของผู้ใช้งาน สร้างเอกลักษณ์ของเว็บไซต์ด้วยเครื่องมือสุดทันสมัย อย่าง Adobe Illustrator และ Figma ที่จะทำให้ผู้ใช้งานจดจำเว็บไซต์ของเราและอุทานออกมาว่า “สวยอ่าาาาาา~~~~~~”`,
        game: "ความลับของดินแดนอันหนาวเหน็บใต้สุดของเทือกเขาหิมาลัย ซึ่งเป็นแหล่งบ่มเพาะความรู้ทั้ง 4 แขนง ได้แก่ Game Designการออกแบบเกมอันเป็นหัวใจหลักของความสนุก, Graphic Design Game การออกแบบภาพอาร์ตภายในเกมอันน่าหลงไหล, Sound เสียงประกอบชวนคล้อยใจและเครื่องมือที่เราจะดึงทั้ง 3 ศาสตร์นั้นเข้าด้วยกัน Phaser 3 นั่นเอง",
        infra: "ตะลุย Linux Command ผสมผสานพลังหยินหยางให้ Nginx ทะยาน Web ด้วยใจเหล็กกล้าผ่านนภาไปสู่ Server",
        change: "สู่เส้นทางการเตรียมความพร้อมในการเป็น Front-End Developers เหล่าหมีขั้วโลกทั้งหลายได้ทะยานเข้าสู่ Git Commandดื่มด่ำการเขียน React.js ฝึกฝนพัฒนาการในด้านศาสตร์และศิลป์ในการตกแต่งเว็บด้วย styled-components Boostrap อย่าช้า มาผจญภัยกันเถอะ"
    }

    toggleF = () => {
        this.setState({ change: this.state.front })
    }
    toggleD = () => {
        this.setState({ change: this.state.design })
    }
    toggleG = () => {
        this.setState({ change: this.state.game })
    }
    toggleI = () => {
        this.setState({ change: this.state.infra })
    }

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
                <div className="row">
                    <div className="col-3">
                        <Ice1 img src="static/img/group6.png" onClick={() => this.toggleF()}>

                        </Ice1>
                        <Ice className="my-5">
                            <Ice1 img src="static/img/group5.png" onClick={() => this.toggleG()}></Ice1>
                        </Ice>
                    </div>
                    <div className="col-6 my-5">
                        <Content className="my-2 p-5">
                            <p>{this.state.change}</p>
                        </Content>
                    </div>

                    <div className="col-3">
                        <Ice1 img src="static/img/group7.png" onClick={() => this.toggleD()}></Ice1>
                        <Ice className="my-60">
                            <Ice1 img src="static/img/group2.png" onClick={() => this.toggleI()} ></Ice1>
                        </Ice>
                    </div>
                </div>
            </div>
        )
    }
}
export default What;
