// Store your current age into a variable

// Store a maximum age into a variable

// Store a favorite drink (from a drop-down) into a variable

// Store an amount per day into a variable

// Calculate how much you would drink for the rest of your life!

// Output your results to the user

// $('#click-me').click(function(){  
//     var age = $('#age').val();
//     $('#age').html(parseInt(age));
//     var maxAge = $('#max-age').val();
//     $('#max').html(parseInt(maxAge));
//     var item = $('#item').val();
//     var numPerDay = $('#num-per-day').val();
//     $('#num-per-day').html(parseInt(numPerDay));

//     $('#solution').html((maxAge-age)*(numPerDay*365));
//     $('#drink').html(item);
// })

$('#click-me').click(function(){  
    var age = $('#age').val();
    var maxAge = $('#max-age').val();
    var item = $('#item').val();
    var numPerDay = $('#num-per-day').val();
    var total = parseInt (maxAge) - parseInt (age) + parseInt (numPerDay) * 365;
    $('#solution').html(total);
    $('#item').html(item);
})   