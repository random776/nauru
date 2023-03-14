import { useState } from 'react'
import reactLogo from './assets/react.svg'


const arr = [...Array(100)].map((_, i) => (i + 1));
const now = new Date(); //今の日時
const target  = new Date("2024/1/1 0:00:00");
const target2 = new Date("2023/1/1 0:00:00");
const remain_time = target.getTime() - now.getTime(); //差分を取る（ミリ秒で返ってくる）
const all_time = target.getTime() - target2.getTime();
const percentage = (1 - (remain_time / all_time)) * 100;
console.log(percentage);
const n = 1 ;	// 小数点第n位まで残す

const float = Math.floor( percentage * Math.pow( 10, n ) ) / Math.pow( 10, n ) ;
export function Base() {
  return (
    <>
    <p>2023年の{float}％が終わりましたが、まだ大丈夫ですよね。</p>
    </>
  )
}
function App() {
  return (
    <>
    {arr.map((number) => (
      <>
      {number < percentage && number % 10 !== 0 && <span key={number} style={{backgroundColor: "rgb(216, 216, 216)",
      height: "30px",
      width: "30px",
      margin: "4px",
      border: "3px solid black",
      borderRadius: "2px",
      display: "inline-block"
      }}></span>}
      {number < percentage && number % 10 === 0 && <><span key={number} style={{backgroundColor: "rgb(216, 216, 216)",
      height: "30px",
      width: "30px",
      margin: "4px",
      borderRadius: "2px",
      border: "3px solid black",
      display: "inline-block"}}></span><br/></>}
       {number >= percentage && number % 10 !== 0 &&<span key={number} style={{backgroundColor: "rgb(40, 40, 56)",
      height: "30px",
      width: "30px",
      margin: "4px",
      borderRadius: "2px",
      border: "3px solid white",
      display: "inline-block"}}></span>}
      {number >= percentage && number % 10 === 0 && <><span key={number} style={{backgroundColor: "rgb(40, 40, 56)",
      height: "30px",
      width: "30px",
      margin: "4px",
      borderRadius: "2px",
      border: "3px solid white",
      display: "inline-block"}}></span><br/></>}
      </>
    ))}
    </>
  )
};

export default App;