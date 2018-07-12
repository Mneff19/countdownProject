import React, { Component } from 'react';

const Button = (bool, callback) => {

  // function ChangeDateBtn(callback, title){
  //   return
  // }
  //
  // function GenerateBtn(callback, title){
  //   return <button key={0} className={'button generateBtn'} onClick ={callback}>{title} </button>
  // }

  function renderText(bool, callback){
      if(!bool){
        return (<button key={1} className={'button button_changeDateBtn'} onClick ={callback}><i className="far fa-calendar-alt"></i> Change Date </button>)
      } else{
        return (<button key={0} className={'button button_generateBtn'} onClick ={callback}>Generate Countdown</button>)
      }
   }

    return(
      renderText(bool, callback)
    )
}

export default Button;
