name_of_the_student_array = [];

function  submit(){
    var display_student_array = [];

    for(var j = 1; j<=4; j++)
    {
        var name_of_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_student);
        name_of_the_student_array.push(name_of_student);
    }

    console.log(name_of_the_student_array);

    var len = name_of_the_student_array.length;
    console.log(len);
    for(var k=0; k<len; k++){
        display_student_array.push("<h4>NAME - "+name_of_the_student_array[k]+"</h4>");
        console.log(display_student_array[k]);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_sorted = [];
    var len_sorted = name_of_the_student_array.length;
    console.log(len_sorted);
    for(var k=0; k<len_sorted; k++){
        display_sorted.push("<h4>NAME - "+name_of_the_student_array[k]+"</h4>");
        console.log(display_sorted[k]);
    }

    var remove_commas = display_sorted.join(" ");
    console.log(remove_commas); 
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;  
}

function new_update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+name_of_the_student_array +"</h1>";
}