import React from 'react'
import './content.sass'
import ad1 from './ad-image1.jpg'
import ad2 from './ad-image2.jpg'

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
                        <button className="confirm-btn" >send</button>
                    </div>
                    <div className="Quota">
                        <label className="label1">choose amount</label>
                         <form>
                            <div className="radio-container">
                                <input type="radio" value="160" name="amount" className="amount-radio"/>
                                <label>160NTD</label>
                            </div>
                            <div className="radio-container">
                                <input type="radio" value="290" name="amount" className="amount-radio"/>
                                <label>290NTD</label>
                            </div>
                            <div className="radio-container">
                                <input type="radio" value="450" name="amount" className="amount-radio"/>
                                <label>450NTD</label>
                            </div>
                            <div className="radio-container">
                                <input type="radio" value="550" name="amount" className="amount-radio"/>
                                <label>550NTD</label>
                            </div>
                            <div className="radio-container">
                                <input type="radio" value="1050" name="amount" className="amount-radio"/>
                                <label>1050NTD</label>
                            </div>
                            <div className="radio-container">
                                <input type="radio" value="1450" name="amount" className="amount-radio"/>
                                <label>1450NTD</label>
                            </div>
                            <div className="radio-container">
                                <input type="radio" value="1850" name="amount" className="amount-radio"/>
                                <label>1850NTD</label>
                            </div>
                            <div className="radio-container">
                                <input type="radio" value="1850" name="amount" className="amount-radio"/>
                                <label>2590NTD</label>
                            </div>
                         </form>
                    </div>
                </div>

                <div className="innerContainer3">
                    <img className="ad-image1" src={ad1} alt="advertisement"/>
                    <img className="ad-image2" src={ad2} alt="advertisement"/>
                </div>
            </div>
        </>
    )
}