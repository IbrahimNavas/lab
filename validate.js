function validation(){
    var firstname=document.myform.firstname.value;
    var lastname=document.myform.lastname.value;
    var address=document.myform.address.value;
    if(firstname==""||lastname==""||address==""){
        alert('No EMPTY field should be empty');
        return false;
    }
    var radio = document.myform.radio.value;
    var tarea = document.myform.tarea.value;
    if(radio=="Yes"){
        if(tarea==''){
            alert("Please fill the last given space");
            return false;
        }
    }
}
// var gender = document.myform.gender.value;
// var nationality = document.myform.nationality.value;
// if(typeof document.myform.smallpox.value != undefined){
//     var smallpox=document.myform.smallpox.value;
//     alert(smallpox)
// }
// if(typeof document.myform.mumps.value != undefined){
//     var mumps=document.myform.mumps.value;
//     alert(mumps);
// }
// if(typeof document.myform.dizziness.value != undefined){
//     var dizziness=document.myform.dizziness.value;
//     alert(dizziness);
// }
// if(typeof document.myform.sneezing.value != undefined){
//     var sneezing=document.myform.sneezing.value
//     alert(sneezing);
// }
