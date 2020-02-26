$(function () {



	const shapeIcon = new Vivus(
		'shape', {
			type: 'oneByOne',
			duration: 500,
			reverseStack: true
		}
	);
	// $('#form').submit(function (e) {
	// 	e.preventDefault();
	// 	if (document.form.firstname.value == '' || document.form.email.value == '') {

	// 		valid = false;
	// 		return valid;
	// 	}
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "submit.php",
	// 		data: $(this).serialize(),
	// 		success: function () {
	// 			$('.form__inner').hide();
	// 			$(this).find('input').val('');
	// 			$('#form').trigger('reset');
	// 		}
	// 	})
	// });



	$('.form__btn').click(function () {
		$(this).effect("shake");
	});


	$("#form").validate({
		rules: {
			firstname: {
				required: true,
				minlength: 2
			},
			lastname: {
				required: true,
				minlength: 2,
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 8
			},
			confirm_password: {
				required: true,
				minlength: 8,
				equalTo: "#password"
			}
		},
		messages: {
			firstname: {
				required: "Please enter your First Name",
				minlength: "Please enter at least 2 characters"
			},
			lastname: {
				required: "Please enter your Last Name",
				minlength: "Please enter at least 2 characters"
			},
			email: {
				required: "Please enter your E-mail",
			},
			password: {
				required: "Please enter your Password",
				minlength: "Please enter at least 8 characters"
			},
			confirm_password: {
				required: "Please enter your Password",
				minlength: "Please enter at least 8 characters",
				equalTo: "Please enter the same password as above"
			}
		},
		submitHandler: function (form) {
			$.ajax({
				type: "POST",
				url: "submit.php",
				data: $(form).serialize(),
				success: function (data) {
					console.log(data);
					$('.form__inner').hide();
					$('.form__btn').hide();
				}
			});
			return false;
		}
	});






});