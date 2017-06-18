
    let oA=document.querySelectorAll('#nav_ul li a');

        for(let i=0;i<oA.length;i++){
            oA[i].onmouseover=()=>{
               this.style.borderTop='2px solid #fee3ef';
            }
            oA[i].onmouseout=()=>{
                this.style.borderTop='';
            }
         }