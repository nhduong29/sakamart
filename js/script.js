/**
 * Created by nhuuduong on 7/6/15.
 */
$(document).ready(function(){
    //set intro-text align center of screen
    var document_height = window.innerHeight;
    var intro_text_height = $('.intro-text').height();
    var padding_of_intro_text = (document_height -intro_text_height)/2;
    $('.intro-text').css({'paddingTop' : padding_of_intro_text,'paddingBottom' :padding_of_intro_text});
    //
    var img_about_width = $('.img-about').width();
    var img_me_width = $('.img-me').width();
    var margin_of_img_me = (img_about_width - img_me_width)/2;
    $('.img-me').css({'marginLeft': margin_of_img_me});

    //
});

