function change_size(element, size) {
    var currnet = parseInt(element.css('font-size'));
    alert(currnet);
    if (size == 'smaller') {
        var new_size = currnet - 2;

    } else if (size == 'bigger'){
        var new_size = currnet + 2 ;
    }
element.css('font-size' , new_size + 'px');
        }

$('#smaller').click(function () {
   change_size($('p'), 'smaller');
});

$('#bigger').click(function () {
    change_size($('p'), 'bigger');
});