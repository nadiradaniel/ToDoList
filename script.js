(function($){
  $(function(){
    var ul = $('.pr');
  if(localStorage.getItem('todo')){
          ul.html(localStorage.getItem('todo'));
    }

  $(".btn").bind("click", function(){
      var v = $(".tdl-new").val();
      var d = $(".desc").val();
      var p = $('input[name="priority"]:checked').val();
      var spick = $("#sdpick").val();
      var epick = $("#edpick").val();
      

      if (p == "HIGH"){
       var r = $("<li><label><input type='checkbox'><span class='header'>"+ v +"</span> <br> <span class='description'>"
        + d + "</span> <br> <span> Start : " + spick  + "</span> <br> <span> End : " 
        + epick + "</span> <br> <span>"+p+" </span> <a href='#'>–</a></label></li>");
       $(r).insertAfter(".hp");
       localStorage.setItem('todo', ul.html());

    }
      else if (p == "MEDIUM"){
       var r = $("<li><label><input type='checkbox'><span class='header'>"+ v +"</span> <br> <span class='description'>"
        + d + "</span> <br> <span> Start : " + spick  + "</span> <br> <span> End : " 
        + epick +"</span> <br> <span>"+p+" </span> <a href='#'>–</a></label></li>");
       $(r).insertAfter(".mp");
       localStorage.setItem('todo', ul.html());
    }
     else{
       var r = $("<li><label><input type='checkbox'><span class='header'>"+ v +"</span> <br> <span class='description'>"
        + d + "</span> <br> <span> Start : " + spick  + "</span> <br> <span> End : " 
        + epick +"</span> <br> <span>"+p+" </span> <a href='#'>–</a></label></li>");
       $(r).insertAfter(".lp");
       localStorage.setItem('todo', ul.html());
    }

       $(".tdl-new").val("");
       $(".desc").val("");
  });

  $(".tdl-content a").bind("click", function(){
    var _li = $(this).parent().parent("li");
        _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
          _li.remove();
           localStorage.setItem('todo', ul.html());
        });
    return false;
   
  });

  // for dynamically created a tags
  $(".tdl-content").on('click', "a", function(){
    var _li = $(this).parent().parent("li");
        _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
          _li.remove();
        });
    return false;
  });

 $(".header").each(function () {
        //Reference the Label.
        var label = $(this);
 
        //Add a TextBox next to the Label.
        label.after("<input type = 'text' style = 'display:none' />");
 
        //Reference the TextBox.
        var textbox = $(this).next();
 
        //Set the name attribute of the TextBox.
        textbox[0].name = this.id.replace("lbl", "txt");
 
        //Assign the value of Label to TextBox.
        textbox.val(label.html());
 
        //When Label is clicked, hide Label and show TextBox.
        label.click(function () {
            $(this).hide();
            $(this).next().show();
        });
 
        //When focus is lost from TextBox, hide TextBox and show Label.
        textbox.focusout(function () {
            $(this).hide();
            $(this).prev().html($(this).val());
            $(this).prev().show();
            localStorage.setItem('todo', ul.html());
        });


    });

 $(".description").each(function () {
        //Reference the Label.
        var label = $(this);
 
        //Add a TextBox next to the Label.
        label.after("<textarea style='display:none;'>");
        label.before("</textarea>");
 
        //Reference the TextBox.
        var textbox = $(this).next();
 
        //Set the name attribute of the TextBox.
        textbox[0].name = this.id.replace("lbl", "txt");
 
        //Assign the value of Label to TextBox.
        textbox.val(label.html());
 
        //When Label is clicked, hide Label and show TextBox.
        label.click(function () {
            $(this).hide();
            $(this).next().show();
        });
 
        //When focus is lost from TextBox, hide TextBox and show Label.
        textbox.focusout(function () {
            $(this).hide();
            $(this).prev().html($(this).val());
            $(this).prev().show();
            localStorage.setItem('todo', ul.html());
        });


    });


    



 }); // end of document ready
})(jQuery); // end of jQuery name space