$(document).ready(function(){

	var items = [];

	const ROW_NUM = 3,
		  ITEMS_TO_ADD = 2;

	initItems();


	$(document).on('click', '.row_item-orderButton', modalOpen);

	$('.modal_header-close').click(function() {
		modal.style.display = "none";
	});

	$("#modal").click(function(){
		modal.style.display = "none";
	})

	$('.navbar_item').click(function(){
		$('.navbar-item-dropdown').removeClass('navbar_item-active'); 
		$(this).find('.navbar-item-dropdown').addClass("navbar_item-active");
	});

	$('.navbar-item-dropdown').click(function(){
		if($(this).siblings('.parts').children().length > 0) {
			$(this).siblings('.parts').toggle();
		}
	});

	$(window).scroll(function() {
		if($(window).scrollTop() == $(document).height() - $(window).height()) {
			if(items.length > 0) {
				loadMore(ROW_NUM*ITEMS_TO_ADD);
			}
		}
	});

	function loadMore(newItemsNum) {
		appendItems(items.splice(0, newItemsNum));
	}

	function createNewBlock(data) {
		var div = "<div class='row-item'>";
		div += "<div class='row_item-wrapImg'><img src='"+ data.image +"' class='row_item-img'></div>";
			div += "<h3 class='row_item-heading'>" + data.heading + "</h3>";
			div += "<p class='row_item-text'>" + data.text +"</p>";
			div += "<div class='row_item-oldPrice'>"+ data.oldPrice +"</div>";
			div += "<div class='row_item-newPrice'>" + data.newPrice + "</div>";
		div += "<div class='row_item-orderButton'><img src='img/icon.png'>Купить</div>";
		return div;
	}

	function appendItems(newItems) {
		for(var i = 0; i < ROW_NUM; i++){
			for(var j = 0; j < newItems.length/ROW_NUM; j++) {
				$('.goods_list-row:nth-of-type(' + (i+1) + ')').append(createNewBlock(newItems[i*newItems.length/ROW_NUM+j]));
			};
		};
	};

	function initItems() {
		$.getJSON("data/shop/shop.json", function(data){
			items = data;
			loadMore(ROW_NUM*ITEMS_TO_ADD);
		});	
	}

	function modalOpen() {
		$(".carousel-img").attr('src', $(this).parent().find(".row_item-img").attr('src'));
		console.log($(this));
		$(".modal_descr-heading").html($(this).parent().find(".row_item-heading").html());
		$(".modal_descr-text").html($(this).parent().find(".row_item-text").html());
		$(".modal_footer-oldPrice").html($(this).parent().find(".row_item-oldPrice").html());
		$(".modal_footer-newPrice").html($(this).parent().find(".row_item-newPrice").html());
		modal.style.display = "block"
	};

})

