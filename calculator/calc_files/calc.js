/*
 * Implement all your JavaScript in this file!
 */
 //state = 0 -> expected number
 //state = 1 -> expected operation
 //state = 2 -> expected both
 //first, set state = 0
$(document).ready(function(){
	var arr = [];
	var state = 0;
	var tmp = '';
	var operator = '';

	var do_math = {
		'+': function(x, y){return x + y;},
		'-': function(x, y){return x - y;},
		'*': function(x, y){return x * y;},
		'/': function(x, y){
			if(x % y == 0)
				return x / y;
			else
				return parseFloat(x / y);
		}
	}

	$(".button").click(function(){
		if(state == 0 && $(this).attr('type') == 'number'){
			tmp += $(this).attr('value');
			$("#display").val(tmp);
			state = 2;
		}

		else if(state == 1 && $(this).attr('type') == 'operator' && $(this).attr('value') != '='){
			var operate = $(this).attr('value');
			arr.push(operate);
			state = 0;
		}

		else if(state == 2){
			if($(this).attr('type') == 'number'){
				tmp += $(this).attr('value');
				$("#display").val(tmp);
			};
			if($(this).attr('type') == 'operator'){
				arr.push(parseInt(tmp));
				tmp = '';
				if(arr.length == 3){
					var a = arr.shift();
					var operate = arr.shift();
					var b = arr.shift();
					var result = do_math[operate](a, b);
					arr.push(result);
					$("#display").val(result);
				}
				operator = $(this).attr('value');
				if(operator == '=' && arr.length == 1){
					$('#display').val(arr[0]);
					state = 1;
				}
				else{
					arr.push(operator);
					state = 0;
				}
				$("#output").html(operator);
			}
		}
	})
})

