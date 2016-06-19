$(function() {
	
	var listService;
	var	list;
	var serviceActive = 0;
		priceService = $(".price-digit");
		imgService = $((".service-img-change"));
		serviceName = [];
		servicePrice = [];
		serviceImg = [];
		serviceText = [];
		count = 20; //for scroll

	getService();

	function getService() {

		$.getJSON("data/service/service.json", function(date){
			var services = date;
			showService(services);
		})

	}

	function showService(services) {

		var listService = document.getElementsByClassName("list-services_items")[0];

		for (var i = 0; i < services.length; i++) {
			var elementList = document.createElement('li');

			elementList.innerHTML = services[i].name;
			listService.appendChild(elementList);

			servicePrice[i] = services[i].price;
			serviceImg[i] = services[i].url;
			serviceName[i] = services[i].name;
			serviceText[i] = services[i].text;
			
		} 

		list = $(".list-services_items li");

		addActiveToList();

		//plugin for scroll scroll-pane
		$('.list-services_items').jScrollPane();

		clickOnList();

		clickOnArrow();
	
	}

	function addActiveToList() {

		list.eq(0).addClass("active");
		priceService.text(servicePrice[0]);
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

		serviceActive = i;

		priceService.text(servicePrice[i]); 
		imgService.attr("src", serviceImg[i]);
	}

	function clickOnArrow(){
		var ArrowDown = $(".icon-scroll-down");

		ArrowDown.click( function(e) {
			e.preventDefault();

			var listActive = $(".list-services_items .active")
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
	var btnServiceMore = $(".service-btn-more");

	btnServiceMore.click(function() {
		$(".service-popup-more").toggle();
		$(".service-popup-more .service-popup-name").text(serviceName[serviceActive]);
		$(".service-popup-more .service-popup-about").text(serviceText[serviceActive]);
	})

	$(".service-popup-more .icon-close").click(function() {
		$(".service-popup-more").toggle();
	})

});