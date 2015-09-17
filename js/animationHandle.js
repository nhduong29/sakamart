/**
 * Created by nhuuduong on 7/30/15.
 */
function runAnimation(DOMApply,nameOfAnimation) {
    $(DOMApply).removeClass(nameOfAnimation).addClass(nameOfAnimation + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass(nameOfAnimation);
    });
};

$(document).ready(function(){
    //service crop hover
    $('.s-crop').mouseenter(function(e){
        e.preventDefault();
        runAnimation('.s-crop',"flipInX");
    });

    $('.s-general').mouseenter(function(e){e.preventDefault();runAnimation('.s-general',"flipInX");});
    $('.s-living').mouseenter(function(e){e.preventDefault();runAnimation('.s-living',"flipInX");});
    $('.s-food').mouseenter(function(e){e.preventDefault();runAnimation('.s-food',"flipInX");});
    $('.s-media').mouseenter(function(e){e.preventDefault();runAnimation('.s-media',"flipInX");});
    $('.s-internet').mouseenter(function(e){e.preventDefault();runAnimation('.s-internet',"flipInX");});
    $('.s-card').mouseenter(function(e){e.preventDefault();runAnimation('.s-card',"flipInX");});

    //offer more hover
    $('#pickup').mouseenter(function(e){e.preventDefault();runAnimation('#pickup',"pulse");});
    $('#transportation').mouseenter(function(e){e.preventDefault();runAnimation('#transportation',"pulse");});
    $('#exchange').mouseenter(function(e){e.preventDefault();runAnimation('#exchange',"pulse");});
    $('#tours').mouseenter(function(e){e.preventDefault();runAnimation('#tours',"pulse");});
    $('#laundry').mouseenter(function(e){e.preventDefault();runAnimation('#laundry',"pulse");});
    $('#freebies').mouseenter(function(e){e.preventDefault();runAnimation('#freebies',"pulse");});
});
