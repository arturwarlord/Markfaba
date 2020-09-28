console.log("tabs");
console.log("modal");


function myFunction(x) {
  x.classList.toggle("change");
}

function nextMsg(i) {
    if (messages.length == i) {
        i = 0;
    }
    $('#message').html(messages[i]).fadeIn(500).delay(1000).fadeOut(500, function() {
        nextMsg(i + 1);
    });
};

var messages = [
    "Autonomous ad-buying machine",
    "AI-powered creative intelligence",
    "Built for exponential business growth",
    "Omnichannel ad management",
    "Designed for incrementality"
    ];

$('#message').hide();

nextMsg(0);