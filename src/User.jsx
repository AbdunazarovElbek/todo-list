import React from 'react'

const User = (props) => {
 if(props.royxatdanOtgan){
    return <h1 className='green'>{props.userName}, saytga hush kelibsiz</h1>
 }else{
    return <h1 className='red'>saytdan royhatdan otmagansiz</h1>
 }
}

export default User