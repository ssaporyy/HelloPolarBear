import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    background-color: rgba(146, 187, 230, 0.54);
    border: 0xp solid transparent;
    border-radius: 2em;
    margin-top: -70px;
`
const Color = styled.h4`
    Font-Style: Regular
    color: #BB5032;
`


class Who extends React.Component {

    render() {
        return (
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-2" />
                    <div className="col-8 mb-2">
                        
                        <img src="static/img/who.png" width="200" height="200" />
                        {/* <img src="static/img/Rectangle 2.1.png" width="1077" height="545"/>                */}
                        <Box className="mb-5 p-4">
                        <Color className="mt-5">ค่ายนี้เหมาะกับใครบ้าง?</Color>
                            <p className="mt-4">น้อง ๆ มัธยมศึกษาตอนปลาย แผนการเรียนวิทย์-คณิต ศิลป์-คำนวณ</p>
                            <p className="my-3 ">น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง</p>
                            <p className="mt-3">น้อง ๆ ที่มีความสนใจด้านไอที หรือต้องการค้นหาตนเองเพื่อศึกษาต่อ</p>
                        </Box>
                    </div>
                    <div className="col-2" />
                </div>
            </div>
        )
    }
}
export default Who;
