(function() { var script = document.createElement('script'); script.src = 'https://whephiwums.com/vignette.min.js'; script.async = true; document.head.appendChild(script);

script.onload = function() {
    console.log('Monetag script loaded');
};

})();

function showMonetagAd() { if (typeof show_8940932 === 'function') { show_8940932().then(function() { console.log('Ad watched, reward the user'); }).catch(function(err) { console.log('Ad was not fully watched or an error occurred', err); }); } else { console.log('Monetag ad function not loaded yet'); } }