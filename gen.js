function nameGen(type){
      var tp=type;
      var op=document.getElementById('option').value;
      var ip=document.getElementById('berapa').value=1;
      var element=document.createElement("textarea");
      element.setAttribute("class","form-control input-sm u-full-width");
      element.setAttribute("style","height:150px");
      element.setAttribute("id","result");
      for(i=0;i<ip;i++){
        if(op==="JP"){
        if(tp===1){
          rnd=Math.floor(Math.random()*jp2.length);
          rnd2=Math.floor(Math.random()*jp1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
	  tag4=Math.floor(Math.random()*tanda4.length);
          names=jp2[rnd]+"\n"+tanda1[tag2]+tanda4[tag4]+"\n"+tanda3[tag3]+jp1[rnd2]+tanda2[tag1];
        }
        else{
          rnd=Math.floor(Math.random()*jp2.length);
          rnd2=Math.floor(Math.random()*jp1.length);
          names=jp2[rnd]+"\n";
	  names=jp1[rnd2]+"\n";

        }}
        if(op==="US"){
        if(tp===1){
          rnd=Math.floor(Math.random()*us2.length);
          rnd2=Math.floor(Math.random()*us1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          tag7=Math.floor(Math.random()*tanda7.length);
          names=us2[rnd]+"\n"+tanda1[tag2]+tanda7[tag7]+"\n"+tanda3[tag3]+us1[rnd2]+tanda2[tag1];
        }
          else{
          rnd=Math.floor(Math.random()*us1.length);
          rnd2=Math.floor(Math.random()*us1.length);
          names=us1[rnd]+" "+us1[rnd2]+"\n";
        }}
        if(op==="DE"){
        if(tp===1){
          rnd=Math.floor(Math.random()*de2.length);
          rnd2=Math.floor(Math.random()*de1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
	  tag6=Math.floor(Math.random()*tanda6.length);
          names=de2[rnd]+"\n"+tanda1[tag2]+tanda6[tag6]+"\n"+tanda3[tag3]+de1[rnd2]+tanda2[tag1];
	}
        else{
          rnd=Math.floor(Math.random()*de2.length);
          rnd2=Math.floor(Math.random()*de1.length);
          names=de2[rnd]+" "+de1[rnd2]+"\n";
        }}
		if(op==="FR"){
        if(tp===1){
          rnd=Math.floor(Math.random()*fr2.length);
          rnd2=Math.floor(Math.random()*fr1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          tag5=Math.floor(Math.random()*tanda5.length);
          names=fr2[rnd]+"\n"+tanda1[tag2]+tanda5[tag5]+"\n"+tanda3[tag3]+fr1[rnd2]+tanda2[tag1];
	}
        else{
          rnd=Math.floor(Math.random()*fr2.length);
          rnd2=Math.floor(Math.random()*fr1.length);
          names=fr2[rnd]+" "+fr1[rnd2]+"\n";
        }}
		if(op==="IT"){
        if(tp===1){
          rnd=Math.floor(Math.random()*it2.length);
          rnd2=Math.floor(Math.random()*it1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
	  tag9=Math.floor(Math.random()*tanda9.length);
          names=it2[rnd]+"\n"+tanda1[tag2]+tanda9[tag9]+"\n"+tanda3[tag3]+it1[rnd2]+tanda2[tag1];
        }
        else{
          rnd=Math.floor(Math.random()*it2.length);
          rnd2=Math.floor(Math.random()*it1.length);
          names=it2[rnd]+" "+it1[rnd2]+"\n";
        }}
		if(op==="KR"){
        if(tp===1){
          rnd=Math.floor(Math.random()*kr2.length);
          rnd2=Math.floor(Math.random()*kr1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
	  tag10=Math.floor(Math.random()*tanda10.length);
          names=kr2[rnd]+"\n"+tanda1[tag2]+tanda10[tag10]+"\n"+tanda3[tag3]+kr1[rnd2]+tanda2[tag1];
        }
        else{
          rnd=Math.floor(Math.random()*kr2.length);
          rnd2=Math.floor(Math.random()*kr1.length);
          names=kr2[rnd]+" "+kr1[rnd2]+"\n";
        }}
		if(op==="TW"){
        if(tp===1){
          rnd=Math.floor(Math.random()*tw2.length);
          rnd2=Math.floor(Math.random()*tw1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
	  tag8=Math.floor(Math.random()*tanda8.length);
          names=tw2[rnd]+"\n"+tanda1[tag2]+tanda8[tag8]+"\n"+tanda3[tag3]+tw1[rnd2]+tanda2[tag1];
        }
        else{
          rnd=Math.floor(Math.random()*tw2.length);
          rnd2=Math.floor(Math.random()*tw1.length);
          names=tw2[rnd]+" "+tw1[rnd2]+"\n";
        }}
		if(op==="BR"){
        if(tp===1){
          rnd=Math.floor(Math.random()*br2.length);
          rnd2=Math.floor(Math.random()*br1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          tag11=Math.floor(Math.random()*tanda11.length);
          tag14=Math.floor(Math.random()*tanda14.length);
	  tag15=Math.floor(Math.random()*tanda15.length);
          tag16=Math.floor(Math.random()*tanda16.length);
          names=tanda16[tag16]+br2[rnd]+"\n"+tanda1[tag2]+tanda11[tag11]+tanda14[tag14]+tanda15[tag15]+"\n"+tanda3[tag3]+br1[rnd2]+tanda2[tag1];
        }
        else{
          rnd=Math.floor(Math.random()*br2.length);
          rnd2=Math.floor(Math.random()*br1.length);
          names=br2[rnd]+" "+br1[rnd2]+"\n";
        }}
		if(op==="TR"){
        if(tp===1){
          rnd=Math.floor(Math.random()*tr2.length);
          rnd2=Math.floor(Math.random()*tr1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          tag12=Math.floor(Math.random()*tanda12.length);
	  names=tr2[rnd]+"\n"+tanda1[tag2]+tanda12[tag12]+"\n"+tanda3[tag3]+tr1[rnd2]+tanda2[tag1];
        }
        else{
          rnd=Math.floor(Math.random()*tr2.length);
          rnd2=Math.floor(Math.random()*tr1.length);
          names=tr2[rnd]+" "+tr1[rnd2]+"\n";
        }}
	        if(op==="PL"){
        if(tp===1){
          rnd=Math.floor(Math.random()*pl2.length);
          rnd2=Math.floor(Math.random()*pl1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          tag13=Math.floor(Math.random()*tanda13.length);
	  names=pl2[rnd]+"\n"+tanda1[tag2]+tanda13[tag13]+"\n"+tanda3[tag3]+pl1[rnd2]+tanda2[tag1];
        }
        else{
          rnd=Math.floor(Math.random()*pl2.length);
          rnd2=Math.floor(Math.random()*pl1.length);
          names=pl2[rnd]+" "+pl1[rnd2]+"\n";
        }}
        br=document.createElement('br');
        element.appendChild(document.createTextNode(names));
        element.appendChild(br);
      }
      if(document.getElementById("result")){
        document.getElementById("placeholder").removeChild(document.getElementById("result"));
      }
document.getElementById("placeholder").appendChild(element);
    }
    function copy() {
        let textarea = document.getElementById("result");
        textarea.select();
        document.execCommand("copy");
      }
