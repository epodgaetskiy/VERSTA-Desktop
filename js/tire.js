$(function() {
	
	var listTire;
	var	list;
	var tireActive = 0;
		priceTire = $(".price-digit");
		imgTire = $((".tire-img-change"));
		tireName = [];
		tirePrice = [];
		tireImg = [];
		tireText = [];
		count = 20; //for scroll

	getTire();

	function getTire() {

		$.getJSON("data/tire/tire.json", function(date){
			var tires = date;
			showTire(tires);
		})
		
	}

	function showTire(tires) {

		var listTire = document.getElementsByClassName("list-tire_items")[0];

		for (var i = 0; i < tires.length; i++) {
			var elementList = document.createElement('li');

			elementList.innerHTML = tires[i].name;
			listTire.appendChild(elementList);

			tirePrice[i] = tires[i].price;
			tireImg[i] = tires[i].url;
			tireName[i] = tires[i].name;
			tireText[i] = tires[i].text;
		} 

		list = $(".list-tire_items li");

		addActiveToList();

		//plugin for scroll scroll-pane
		$('.list-tire_items').jScrollPane();

		clickOnList();

		clickOnArrow();
	
	}

	function addActiveToList() {

		list.eq(0).addClass("active");
		priceTire.text(tirePrice[0]);
	}

	function clickOnList(){
		
		list.each( function() {
			$(this).click( function(e) {
				e.preventDefault();

				var i = list.index($(this));

				changeValue(i);

			});
		})

	}

	function changeValue(i) {
		list.removeClass("active");
		list.eq(i).addClass("active");

		tireActive = i;

		priceTire.text(tirePrice[i]); 
		imgTire.attr("src", tireImg[i]);
	}

	function clickOnArrow(){
		var ArrowDown = $(".icon-scroll-down");

		ArrowDown.click( function(e) {
			e.preventDefault();

			var listActive = $(".list-tire_items .active")
				i = list.index(listActive);

			if (i == (list.length-1)) {
				i = -1;
				count = -20;//reset count when in down
			}

			changeValue(i+1);	

			if (count < 180) {
				count = count + 20;	
				$(".jspScrollable").data('jsp').scrollToY(count);
			} 
			
		});
	}

	//btn more popup
	var btnTireMore = $(".tire-btn-more");

	btnTireMore.click(function() {
		$(".tire-popup-more").toggle();
		$(".tire-popup-more .tire-popup-name").text(tireName[tireActive]);
		$(".tire-popup-more .tire-popup-about").text(tireText[tireActive]);
	})

	$(".tire-popup-more .icon-close").click(function() {
		$(".tire-popup-more").toggle();
	})

});