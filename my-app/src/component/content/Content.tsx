import React from 'react'
import './content.sass'

export default function Content(){
    return(
        <>
            <div className="slide-image">
                <ul>
                   <li></li> 
                </ul>
            </div>
            <div className="outerContainer">
                <div className="innerContainer1">
                    <p className="normalText">遊戲種類</p>
                    <ul className="comgame-kind">
                        <li className="item"> <a href='!#' className='game-name'>特戰英豪</a> </li>
                        <li className="item"> <a href='!#' className='game-name'>英雄聯盟</a> </li>
                        <li className="item"> <a href='!#' className='game-name'>聯盟戰棋</a> </li>
                        <li className="item"> <a href='!#' className='game-name'>APEX</a> </li>
                        <li className="item"> <a href='!#' className='game-name'>CSGO:2</a> </li>
                    </ul>
                </div>
                
                <div className="innerContainer2">
                    <div className='account-input'>
                        <div className="item">
                            <p className="text">請輸入遊戲帳號：</p>
                            <input className="input-box"/>
                        </div>
                        <div className="item">
                            <p className="text">請輸入密碼：</p>
                            <input className="input-box"/>
                        </div>
                    </div>
                    <div className="Quota">
                        <input type="radio"/>
                    </div>
                </div>

                <div className="innerContainer3">

                </div>
            </div>
        </>
    )
}