require(["lib/jquery.fittext"], function(util) {
   $("#project-title").fitText( 1.01, { minFontSize: '50px' });
});

require(["lib/storyjs-embed"], function(util) {

  var dataSource = $('#timeline-placeholder').data('spreadsheet');

   createStoryJS({
        type:       'timeline',
        width:      '100%',
        height:     '600',
        source:     dataSource,
        embed_id:   'timeline-placeholder',
        js:         'js/lib/timeline-min.js',
        font: 			'PTSerif-PTSans'
    });
});

require(["lib/jquery-ui.widget.min", "lib/rwd-table"], function(util){
	$(".budget").table({
      idprefix: "co-",
      persist: "persist",
      displayText: "Show",
   });
});

require(["lib/menu"], function(util) {
  $("#menu").menu();
});
