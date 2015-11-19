window.onload=function(){
var Row=15,
    wid=Math.floor(450-Row)/Row+'px',
    sence=document.getElementById('sence');
    for(var i=0;i<Row;i++){
       var el=document.createElement('div');
       el.style.position='absolute';
       el.style.top=(450/Row)/2+(450/Row)*i+'px';
       el.style.left='0px';
       el.style.width='450px';
       el.style.height='1px';
       el.style.background='#fff';
       sence.appendChild(el);
       var el2=document.createElement('div');
       el2.style.position='absolute';
       el2.style.left=(450/Row)/2+(450/Row)*i+'px';
       el2.style.top='0px';
       el2.style.height='450px';
       el2.style.width='1px';
       el2.style.background='#fff';
       sence.appendChild(el2);
	       for(var j=0;j<Row;j++){
			    div=document.createElement('div');
			    div.setAttribute('class','block');
			    div.style.width=wid;
			    div.style.height=wid;
			    sence.appendChild(div);
			    div.setAttribute('id',i+'_'+j)
	        }
    }
    var go=document.getElementById('go');
    var icon1=document.getElementById('go1');
    var icon2=document.getElementById('go2');
    var rander=document.getElementById('randei');
    var kaishi=document.getElementById('kaishi');
    var body=document.getElementById('body');
    var shengli=document.getElementById('shengli-a');
    var queding=document.getElementById('queding');
    var spa=document.getElementById('spa');
    var dakaiguan=true;
    go.onclick=function(){
      // go.setAttribute('class','animated infinite hinge');
      // rander.setAttribute('class','animated infinite hinge');
      kaishi.setAttribute('class','animated infinite  bounceOut');
      setTimeout(function(){
         randei.style.display='none';
         kaishi.style.display='none';
         go.style.display='none';
       },750);
    }
    icon1.onclick=function(){
      // icon1.onmousedown=function(){
        
      // }
      icon1.setAttribute('class','');
    var block=document.getElementsByClassName('block');
    var kaiguan=true;
    var blct1={};
    var blct2={};
    var guanbi=true;
    var panduan=function(id,dic){
    	var x=Number(id.split('_')[0]);
    	var y=Number(id.split('_')[1]);
    	var tx,ty;
    	var hang=1;
    	tx=x;ty=y;
    	while(dic[tx+'_'+(ty+1)]){hang++,ty++};
    	tx=x;ty=y;
    	while(dic[tx+'_'+(ty-1)]){hang++,ty--};
    	if(hang>=5)return true;

    	var lie=1;
    	tx=x;ty=y;
    	while(dic[(tx+1)+'_'+ty]){lie++,ty--};
    	tx=x;ty=y;
    	while(dic[(tx-1)+'_'+ty]){lie++,tx--};
    	if(lie>=5)return true;

    	var zx=1;
    	tx=x;ty=y;
    	while(dic[(tx-1)+'_'+(ty+1)]){zx++,tx--,ty++};
    	tx=x;ty=y;
    	while(dic[(tx+1)+'_'+(ty-1)]){zx++,tx++,ty--};
    	if(zx>=5)return true;

    	var yx=1;
    	tx=x;ty=y;
    	while(dic[(tx+1)+'_'+(ty+1)]){yx++,tx++,ty++};
    	tx=x;ty=y;
    	while(dic[(tx-1)+'_'+(ty-1)]){yx++,tx--,ty--};
    	if(yx>=5)return true;

    	return false;
    }
    for(var i=0;i<block.length;i++){
      queding.onclick=function(){
        shengli.style.display='none';
      }
    	block[i].onclick=function(){
    		var id=this.getAttribute('id');
    		if(this.hasAttribute('hasColor')){return;}
    		if(kaiguan){
    			blct1[id]=true;
    			this.style.background='#fff';kaiguan=false;
    			this.style.boxShadow='0 2px 7px #240D03 inset';
    			if(panduan(id,blct1)){
              if(guanbi){
                var move=function(){
                   shengli.style.display='block';
                   shengli.setAttribute('class','animated infinite pulse');
                   block=null;
                };
                move();
               icon2.setAttribute('class','animated infinite pulse');
               guanbi=false;return;
              }
    			};
    		}else{
    			blct2[id]=true;
    			this.style.background='#000';kaiguan=true;
    			this.style.boxShadow='0 2px 7px #FAF5E3 inset';
    			if(panduan(id,blct2)){
              if(guanbi){
                var move=function(){
                   shengli.style.display='block';
                   spa.innerHTML='恭喜您！黑棋胜利！';
                   shengli.setAttribute('class','animated infinite pulse');
                   block=null;
                };
                move();
              icon2.setAttribute('class','animated infinite pulse');
            guanbi=false;return;
          }
    			};
    		}
            this.setAttribute('hasColor','true');
    	}
    }
    icon2.onclick=function(){
      icon2.setAttribute('class','');
      guanbi=true;
      location.reload();
    }
};











































































};