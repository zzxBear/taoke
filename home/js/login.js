/**
 * Created by zzx on 2017/3/26.
 */

let oLogin = document.getElementById('login');
let oClose = document.getElementById('close');
let add = document.getElementById('login-end');
	oLogin.onclick =()=>{
	    add.style.transform = 'scale(1)';
	    add.style.opacity = 1;
	    add.style.zIndex=2;
	}
	oClose.onclick =()=>{
	    add.style.transform = 'scale(5)';
	    add.style.opacity = 0;
	    add.style.zIndex=-2;
	}
