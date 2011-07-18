var myColours = ["red", "yellow", "green", "blue", "purple", "orange", "gold", "plum", "azure", 
				 "cornflowerblue", "chocolate", "coral", "indigo", "lemonchiffon", "sienna", "thistle"];
var anagramArray;
$(function () {
    $(function () {
        $('#anagram-button').bind('click', function () {
			 var anagram = document.getElementById('anagram-textbox').value;
			 var anagramLength = $("#anagram-textbox").val().length;
			 anagramArray = anagram.split("");
			 document.getElementById('anagram-div').innerHTML = "";
			for (var x = 0; x <  anagramLength; x++)
			{
				if (anagramArray[x] != " ")
				{				
					var divString = '<div class = "drag" id="div' + x +'">' + anagramArray[x] + '</div>';
					document.getElementById('anagram-div').innerHTML += divString;				
					$("#div" + x).css("height", "95");
					$("#div" + x).css("width", "80");
					$("#div" + x).css("background-color", myColours[x]);
					$("#div" + x).css("border-style", "solid");
					$("#div" + x).css("border-width", "2px");
					$("#div" + x).css("background-image", "url('gradient3.png')");
					$("#div" + x).css("float", "left");
					var clearValue = "right";
					if ( x == anagramLength )
					{
						clearValue = "both"
					}
					$("#div" + x).css("clear", clearValue);
				}
			}
			$(".drag").draggable({snap: true, containment: 'parent'});
        });
    });
});