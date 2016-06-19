$(function() {
	
	// $(".menu_text").click(function(){
	// 	if ($(".menu-open").hasClass("active")) {
	// 		$(".menu-open").removeClass("active");
	// 	}
	// });

	$(".menu_text").hover(function(){
		$(".menu-open").addClass("active");
	});

	$(".menu-open").hover(
		function () {
			$(this).addClass("active");
		},
		function () {
			$(this).removeClass("active");
		})


	$(".btn-search").click(function() {
		$(".menu-search").toggle();
	})

	$(".menu-search .icon-close").click(function() {
		$(".menu-search").toggle();
	})

	var choiceService = $(".choice_left .choice__item");
	    choiceLocation = $(".choice_right .choice__item");
	    time = $(".choice-row-3 .time");
	    choiceDate = $(".choice-date th");
	    dateLeft = $(".date-prev");
	    dateRight = $(".date-next");
	    numberActive = 0;


	choiceService.eq(numberActive).addClass("active");
	choiceLocation.eq(numberActive).addClass("active");
	time.eq(numberActive).addClass("active");
	choiceDate.eq(numberActive).addClass("active");
	changeActive(choiceService);
	changeActive(choiceLocation);
	changeActive(time);
	changeActive(choiceDate);


	function changeActive(date) {

		date.click(function(e){

			e.preventDefault();
			if ($(this).hasClass("active") === false) {

				date.removeClass("active");
				$(this).addClass("active");
				numberActive = date.index((this));

			}

		})
	}

	dateLeft.click(function(e){

		choiceDate.removeClass("active");
		numberActive = numberActive - 1;
		choiceDate.eq(numberActive).addClass("active");

	})

	dateRight.click(function(e){
		
		choiceDate.removeClass("active");
		numberActive++;
		choiceDate.eq(numberActive).addClass("active");

	})

	//order page
	var btnAddPart = $(".link-parts");
		i = 1;
	btnAddPart.click( function(e) {
		e.preventDefault();

		var newLabel = "<label for='parts" + i +"'>Название запчасти</label>";
			newInput = "<div class='column-inline'><input class='input-parts' type='text' id='parts" + i + "'></div>";

		$(".main-form-order .column-name").append(newLabel);
		$(".main-form-order .column-inline-container").append(newInput);
		i++;
	})

});

