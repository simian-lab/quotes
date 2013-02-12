require(["lib/jquery.fittext"], function(util) {
   $("#project-title").fitText( 1.01, { minFontSize: '50px' });
});

require(["lib/storyjs-embed"], function(util) {
   createStoryJS({
        type:       'timeline',
        width:      '100%',
        height:     '600',
        source:     'https://docs.google.com/spreadsheet/pub?key=0ApmzOmCth734dG0wWFdQcmkyTDUtajVCaWlrUTJXcUE&single=true&gid=0&output=html',
        embed_id:   'timeline-placeholder',
        js:         'js/lib/timeline-min.js',
        font: 			'PTSerif-PTSans'
    });
});