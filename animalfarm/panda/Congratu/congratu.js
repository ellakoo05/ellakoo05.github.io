(function(){
	var divConfetti = document.createElement('div');
	divConfetti.id = "sakura"; 

	divConfetti.innerHTML = '<style>'+
	'html,body{overflow-x:hidden;}'+
	'.hana{'+
	'position:absolute;height:0;width:0;'+
	'border-bottom: 10px solid #ffc0ce;'+
	'border-right: 10px solid transparent;'+
	'border-left: 5px solid transparent;}'+
        
	'.hana::after{'+
	'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
	'border: 10px solid ffc0ce;'+
	'border-right: 10px solid transparent;'+
	'border-left: 10px solid transparent;'+
	'transform: rotate(15deg);'+
	'}'+

	'.t1{border-color:#ffc0ce;}'+
	'.t2{border-color:#54a8fc;}'+
	'.t3{border-color:#ffffa1;}'+
	'.t4{border-color:#a8ea53;}'+
	'.t5{border-color:#FFB05C;}'+
	'.t6{border-color:#ff6498;}'+
	'.t1::after{border-color:#ffc0ce;}'+
	'.t2::after{border-color:#54a8fc;}'+
	'.t3::after{border-color:#ffffa1;}'+
	'.t4::after{border-color:#a8ea53;}'+
	'.t5::after{border-color:#FFB05C;}'+
	'.t6::after{border-color:#ff6498;}'+

	'.y1{-webkit-animation:v1 10s infinite;animation:v1 10s infinite;}'+
	'.y2{-webkit-animation:v2 10s infinite;animation:v2 10s infinite;}'+
	'.y3{-webkit-animation:v3 9s infinite;animation:v3 9s infinite;}'+
	'.y4{-webkit-animation:v4 9s infinite;animation:v4 9s infinite;}'+
	'.y5{-webkit-animation:v5 8s infinite;animation:v5 8s infinite;}'+
	'.y6{-webkit-animation:v6 8s infinite;animation:v6 8s infinite;}'+
	'@-webkit-keyframes v1{'+
		'from{-webkit-transform: rotate(0deg) scale(1);}'+
		'50%{-webkit-transform: rotate(270deg) scale(1);}'+
		'to{-webkit-transform: rotate(1deg) scale(1);}'+
	'}'+
	'@-webkit-keyframes v2{'+
		'from{-webkit-transform: rotate(-90deg) scale(.9);}'+
		'50%{-webkit-transform: rotate(-360deg) scale(.9);}'+
		'to{-webkit-transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@-webkit-keyframes v3{'+
		'from{-webkit-transform: rotate(30deg) scale(.8);}'+
		'50%{-webkit-transform: rotate(300deg) scale(.8);}'+
		'to{-webkit-transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@-webkit-keyframes v4{'+
		'from{-webkit-transform: rotate(-120deg) scale(.7);}'+
		'50%{-webkit-transform: rotate(-390deg) scale(.7);}'+
		'to{-webkit-transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@-webkit-keyframes v5{'+
		'from{-webkit-transform: rotate(60deg) scale(.6);}'+
		'50%{-webkit-transform: rotate(330deg) scale(.6);}'+
		'to{-webkit-transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@-webkit-keyframes v6{'+
		'from{-webkit-transform: rotate(-150deg) scale(.5);}'+
		'50%{-webkit-transform: rotate(-420deg) scale(.5);}'+
		'to{-webkit-transform: rotate(-149deg) scale(.5);}'+
	'}'+
	'@keyframes v1{'+
		'from{transform: rotate(0deg) scale(1);}'+
		'50%{transform: rotate(270deg) scale(1);}'+
		'to{transform: rotate(1deg) scale(1);}'+
	'}'+
	'@keyframes v2{'+
		'from{transform: rotate(-90deg) scale(.9);}'+
		'50%{transform: rotate(-360deg) scale(.9);}'+
		'to{transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@keyframes v3{'+
		'from{transform: rotate(30deg) scale(.8);}'+
		'50%{transform: rotate(300deg) scale(.8);}'+
		'to{transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@keyframes v4{'+
		'from{transform: rotate(-120deg) scale(.7);}'+
		'50%{transform: rotate(-390deg) scale(.7);}'+
		'to{transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@keyframes v5{'+
		'from{transform: rotate(60deg) scale(.6);}'+
		'50%{transform: rotate(330deg) scale(.6);}'+
		'to{transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@keyframes v6{'+
		'from{transform: rotate(-150deg) scale(.5);}'+
		'50%{transform: rotate(-420deg) scale(.5);}'+
		'to{transform: rotate(-149deg) scale(.5);}'+
	'}'+

	'</style>';

	document.body.appendChild(divConfetti);

	var windowHeight = window.innerHeight; 
	var scroll = document.documentElement.scrollTop || document.body.scrollTop; 
	var styleZindex = 9999; 
	var styleTop = new Array(); 
	var styleLeft = new Array(); 
	var yuragi = new Array(); 
	var sokudo = new Array(); 
	var hanabiraId = new Array(); 
	var yuragiConut = new Array();
	var kazeCount = 0; 

	
	document.addEventListener('scroll', function(){ scroll = document.documentElement.scrollTop || document.body.scrollTop; }, false);

	
	for(var i = 0; i < 50; i++){
		var divHanabira = document.createElement('div'); 
		divHanabira.id = 'hanabira' + i; 
		styleTop[i] = Math.random() * -1000 + scroll; 
		styleLeft[i] = Math.random() * window.innerWidth; 
		divHanabira.setAttribute('style', 'z-index:' + (styleZindex + i) + ';top:' + styleTop[i] + 'px;left:' + styleLeft[i] + 'px;'); 
		var hanabiraClass = 'hana t' + (Math.floor(Math.random() * 6) + 1) + ' y' + (Math.floor(Math.random() * 6) + 1); 
		divHanabira.setAttribute('class', hanabiraClass); 
		divConfetti.appendChild(divHanabira); 
		yuragi[i] = Math.random() * 40 + 5; 
		sokudo[i] = Math.random() * 5 + 2; 
		hanabiraId[i] = document.getElementById('hanabira' + i); 
		yuragiConut[i] = 0; 
	}

	
	setInterval(function(){

		
		for(var i = 0; i < 50; i++){
			if(styleTop[i] < scroll + windowHeight - 40){ 
				if(yuragi[i] >= yuragiConut[i]){ 
					styleLeft[i] = styleLeft[i] + 0.5 + Math.random() * 0.5;
				}else{ 
					styleLeft[i] = styleLeft[i] - 0.5 - Math.random() * 0.5;
				}
				if((yuragi[i] * 2) <= yuragiConut[i]){ 
					yuragiConut[i] = 0; 
				}
			}else{ 
				styleTop[i] = scroll - 40; 
				styleLeft[i] = Math.random() * window.innerWidth; 
			}



			styleTop[i] = styleTop[i] + sokudo[i]; 
			hanabiraId[i].style.top = styleTop[i] + 'px';
			hanabiraId[i].style.left = styleLeft[i] + 'px'; 
			yuragiConut[i]++; 
		}
		kazeCount++; 
	}, 45);
})();