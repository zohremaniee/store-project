$(document).ready(function() {
    $('.sidebar-toggle').on('click', function() {
        $('.sidebar').toggleClass('collapse-sidebar');
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(200,150,100)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 12, 2, 8, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
    });
    $('body').niceScroll();
    $('#message-box').niceScroll();



}); <
script >
    $(function() {
        var nua = navigator.userAgent
        var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
        if (isAndroid) {
            $('select.form-control').removeClass('form-control').css('width', '100%')
        }
    }) <
    /script>