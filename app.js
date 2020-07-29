$(document).ready(function(){
    setTimeout(function(){
        $("#welcomeModal").modal('show');

        setTimeout(function(){
            $("#welcomeModal").modal('hide');
        },3000);
    },1000);
});