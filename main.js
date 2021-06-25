
	student_array = [];
	
	function submit()
	{
        
        var name_1 = document.getElementById("name_of_the_student_1").value;
        var name_2 = document.getElementById("name_of_the_student_2").value;
        var name_3 = document.getElementById("name_of_the_student_3").value;
        var name_4 = document.getElementById("name_of_the_student_4").value;

       student_array.push(name_1);
       student_array.push(name_2);
       student_array.push(name_3);
       student_array.push(name_4);

		console.log(student_array);
		
        document.getElementById("display_name").innerHTML = student_array;
        document.getElementById("s_button").style.display = "none";
        document.getElementById("s_sort").style.display = "inline-block";

	}

function sorting()
{
	student_array.sort();
    console.log(student_array);
	document.getElementById("display_name").innerHTML = student_array;
}
