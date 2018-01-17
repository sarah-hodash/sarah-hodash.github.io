$(document).ready(function () {

    $('#myForm').submit(function(event){
        event.preventDefault();
        console.log('submit',$('#name-input').val());
    })
})
