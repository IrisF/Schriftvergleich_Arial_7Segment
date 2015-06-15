App.Logic = (function() {
    var that = {},
    nextNum = null,
    min = 10000,
    max = 100000,
   
    init = function() {
       	return that;
    },

    showNextNumber = function(){
        nextNum = Math.random() * (max - min) + min;
        console.log("Logic: showNextNumber, nextNum = " + Math.round(nextNum));
        $(that).trigger("displayNumber", Math.round(nextNum));
    };


    that.init = init;
    that.showNextNumber = showNextNumber;

	return that;
})();