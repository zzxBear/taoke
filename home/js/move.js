/**
 * Created by zzx on 2017/4/8.
 */
      let oM=document.querySelector('#manger .manger-l img');
      let oP=document.querySelector('#cooperate .manger-l img');
      let oH=document.querySelector('.help .help-r img');
      let oHelp=document.querySelector('#help .help-r img');
      let  oC=document.querySelector('.manger .manger-l img');
      oM.onmouseover=()=>{
          oM.style.transform='translate(0px,-100px)';
          oM.style.transition='1s all ease';
      }
      oM.onmouseout=()=>{
          oM.style.transition='1s all ease';
        oM.style.transform='';
      }
      oP.onmouseover=()=>{
          oP.style.transform='translate(0px,-100px)';
          oP.style.transition='1s all ease';
      }
      oP.onmouseout=()=>{
          oP.style.transition='1s all ease';
          oP.style.transform='';
      }
      oH.onmouseover=()=>{
          oH.style.transform='translate(0px,-100px)';
          oH.style.transition='1s all ease';
      }
      oH.onmouseout=()=>{
          oH.style.transition='1s all ease';
          oH.style.transform='';

      }
    oHelp.onmouseover=()=>{
        oHelp.style.transform='translate(0px,-100px)';
        oHelp.style.transition='1s all ease';
    }
    oHelp.onmouseout=()=>{
        oHelp.style.transition='1s all ease';
        oHelp.style.transform='';

    }
    oC.onmouseover=()=>{
        oC.style.transform='translate(0px,-100px)';
        oC.style.transition='1s all ease';
    }
    oC.onmouseout=()=>{
        oC.style.transition='1s all ease';
        oC.style.transform='';

    }