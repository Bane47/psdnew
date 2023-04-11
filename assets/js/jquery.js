$(document).ready(function(){
    $("#form0").validate({
       rules:{
        'name':{
            required:true,
            minlength:8,
            maxlength:15,
            pattern:/[a-zA-Z]/
        },
        'email':{
            required:true,
           pattern:/^[\w]+@+g2technologies[\.]+com+$/
        },
       
        'phone':{
            required:true,
        },
        'comments':{
            required:true,
        }
    
        
    },
    messages:{
        'name':{
            required:'This is mandatory',
            minlength:'No of characters is too short',
            maxlength:'No of characters is too high',
            pattern:'Name must contain a higher and lowercase letter',
        },
        'email':{
            required:'This is mandatory',
            pattern:'Invalid Mail id'
        },
        'phone':{
            required:"Please enter the phone number",
           
            pattern:'The phone number should be in this pattern XXXX-XXX-XXXX'
        },
        'comments':{
            required:'This is mandatory'
        }
    }
    
    })
})