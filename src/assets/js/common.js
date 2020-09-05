
jQuery(document).ready(function($){
    "use strict";

    var $ = jQuery.noConflict();

    $(function () {
      $('[data-toggle="popover"]').popover()
      $('.popover-dismiss').popover({
        trigger: 'focus'
      })
    })
   

$(".vm-include-renter").click(function(){
    $(this).parent('.vm-renter-car').toggleClass('vm-renter-covered');
    
});

// QUOTE REDIRECT BASED ON ZIPCODE
$("#zipcodeSearch").click(function(){
    // var str = "var1/var2/var3";
    // var rest = str.substring(0, str.lastIndexOf("/") + 1);
    // var last = str.substring(str.lastIndexOf("/") + 1, str.length);
    // console.log(rest);
    // console.log(last);
    // var pathname = window.location.pathname; // Returns path only (/path/example.html)
    // var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
    // var origin   = window.location.origin;   // Returns base URL (https://example.com)

   // var origin   = window.location.origin+"/policy-zipcode.html";

    var url      = window.location.href;
    var rest = url.substring(0, url.lastIndexOf("/") + 1);
    var origin   = rest +"policy-zipcode.html";
    $('#zipCodeBased').modal('show');
    setTimeout(function() {
        window.location.href = origin;
        $('#zipCodeBased').modal('hide');
        
    }, 3000);

});

$(".vm-add-driver").hide();
$("#addDriver").on("click",function() {
    $(".vm-add-driver").slideToggle(this.checked);
  });




//   equal height
  if (screen.width>=991) {
        var setHeight = $(".vm-quoting-detail").height();
        var setHeight1 = $(".vm-quoting-detail-code").height();
        var equalHeight = setHeight + setHeight1;
        // $(".vm-get-equal-height").height(setHeight + setHeight1 + 20);
        $(".vm-get-equal-height").css('min-height', equalHeight + 80);

        var homeScreenHeight = $(".vm-exiting-cust-quote").height();
        $(".vm-get-equal-home-height").css('min-height', homeScreenHeight + 80);

        var homeScreenHeight1 = $(".vm-zip-policy-cover").height();
        $(".vm-get-equal-home1-height").css('min-height', homeScreenHeight1 + 80);

        
        

  }

// PRICING SCREEN CUSTOMIZE
$('#vm-customize-check').change(function(){
    if($(this).is(":checked")) {
        $('.vm-disabled-bg').hide();
    } else {
        $('.vm-disabled-bg').show();
    }
});



// Toggle Button
$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-primary').length>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').length>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').length>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').length>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});

$('form').submit(function(){
  var radioValue = $("input[name='options']:checked").val();
  if(radioValue){
     alert("You selected - " + radioValue);
   };
    return false;
});

// Create the dropdown base
$("<select />").appendTo(".vm-dropdown-navMob");

// Populate dropdown with menu items
$(".vm-dropdown-navMob a").each(function() {
  var el = $(this);
  $("<option />", {
    "value"   : el.attr("href"),
    "text"    : el.text() 
  }).appendTo(".vm-dropdown-navMob select");   
});

// To make dropdown actually work
$(".vm-dropdown-navMob select").change(function() {     
  var value = this.value;
  $('#myTabContent').children().each(function(){
    if('#'+this.id == value){
      $(this).addClass('active show');
    }
    else{
     $(this).removeClass('active show');
    }
  })
});  
$('.vm-dropdown-navMob select').addClass('custom-select');
$('.vm-dropdown-navMob select').attr('placeholder','Select');

// for form select custom dropdown
// for form select custom dropdown
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
  
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
$("span").one("click", function() {
     var value=$('.custom-select .custom-options').find('.selection').attr("data-value");
    tablist(value);
});
  $(this).parents(".custom-select").toggleClass("opened");
 
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  event.stopPropagation();
});


function tablist(value){

  // alert(value);
  switch (value) {
    case '#home':
      $('#home').addClass('show active');
      $('#profile').removeClass('show active'); 
      $('#contact').removeClass('show active'); 
     
    break;
    case '#profile':
      $('#home').removeClass('show active');
      $('#profile').addClass('show active'); 
      $('#contact').removeClass('show active'); 
      break;

      case '#contact':
        $('#home').removeClass('show active');
        $('#profile').removeClass('show active'); 
        $('#contact').addClass('show active'); 
        break;
    default:
  }
 }


});