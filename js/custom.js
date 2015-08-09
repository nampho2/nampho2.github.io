/**
 * custom.js - additional javascript calls
 */

// enable bootstrap scrollspy
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){
	$('.loading').removeClass('loading').addClass('loaded');
    }, 0000);
});
