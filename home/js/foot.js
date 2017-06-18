/**
 * Created by zzx on 2017/4/8.
 */
let oFirst1= document.querySelector('#ull .down-l .first img');
let oFirst2= document.querySelector('#ull .down-r .first img');
let oLast1= document.querySelector('#ull .down-l .last img');
let oLast2= document.querySelector('#ull .down-r .last img');
    oFirst1.onmouseover =()=>{
        if(oLast1.style.display=='none') {
            oLast1.style.display = 'block';
        }
    }
    oFirst1.onmouseout=()=>{
        oLast1.style.display = 'none';

    }

    oFirst2.onmouseover =()=>{
    if(oLast2.style.display=='none') {
        oLast2.style.display = 'block';
        }
    }
    oFirst2.onmouseout =()=>{
    oLast2.style.display = 'none';

    }