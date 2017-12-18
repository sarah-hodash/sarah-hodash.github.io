// Store your current age into a variable

// Store a maximum age into a variable

// Store a favorite drink (from a drop-down) into a variable

// Store an amount per day into a variable

// Calculate how much you would drink for the rest of your life!

// Output your results to the user

$('#click-me').click(function(){  
    var age = $('#age').val();
    $('#age').html(parseInt(age));
    var max = $('#max-age').val();
    $('#max').html(parseInt(max));
    var item = $('#item').val();
    var num = $('#num-per-day').val();
    $('#num-per-day').html(parseInt(num));

    $('#solution').html((max-age)*num);
    $('#drink').html(item);
})

