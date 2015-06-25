// JavaScript Document


$(document).ready(function() {

	// map the classes for each item into a new array
	classes = $("#demo-list li span:first-child").map(function(){
		return $(this).attr("class").split(' ');
    });
	
	// create list of distinct items only
	var classList = distinctList(classes);
	
	// generate the list of filter links
	var tagList = '<ul id="tag-list"></ul>';
	tagItem = '<li><a href="#" class="active">all</a></li>';
	$.each(classList, function(index,value){
		var value = value.replace("-", " ");
		tagItem += '<li><a href="#">'+value+'</a></li>';
	});
	
	// add the filter links before the list of items
	$("#demo-list").before($(tagList).append(tagItem));
	
	// filter the demo list when the filter links are clicked
	//filter selects the first span in the li using the first-child selector
	$('#tag-list li a').live('click',function(e){

		var getText = $(this).text().replace(" ", "-");
		if(getText == 'all'){
			$("#demo-list li span:first-child").show();
		} else {
			$("#demo-list li span:first-child").hide();
			$("#demo-list li span:first-child."+getText).show();
		}
		
		// add class "active" to current filter item
		$('#tag-list li a').removeClass('active');
		$(this).addClass('active');
		
		// prevent the page scrolling to the top of the screen
		e.preventDefault();
		
	});		
});
// Function to create a distinct list from array
function distinctList(inputArray){
	var i;
	var length = inputArray.length;
	var outputArray = [];
	var temp = {};
	for (i = 0; i < length; i++) {
		temp[inputArray[i]] = 0;
    }
    for (i in temp) {
        outputArray.push(i);
	}
	return outputArray;
}

