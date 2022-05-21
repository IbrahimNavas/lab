var listarray=[];
        function addtask(){
            
            var task=document.myform.list.value;
            listarray.push(task);
            var text="";
            
         
                if(listarray[listarray.length-1]!=listarray[listarray.length-2]){
                 text+=(listarray[listarray.length-1]);
                 }
            
            
            document.getElementById('demo').innerHTML+=text+"<br>";
        }
        function nexttask(){
            document.getElementById('demo2').innerHTML=listarray[0];
            listarray.shift();
            var text1='';
            for(var y=0;y<listarray.length;y++){
                text1+=listarray[y]+'<br>';
            }
            document.getElementById('demo').innerHTML=text1;
        }
