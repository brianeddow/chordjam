var API_KEY = 'b93ef909c7d3c16941c473eac0859326e45847ee';
$.ajaxSetup({
    beforeSend: function(xhr) {
    xhr.setRequestHeader('Guitarparty-Api-Key', API_KEY);
    }
});

$(document).ready(function(){
    $.get("http://api.guitarparty.com/v2/songs/?query=Counting+Stars", function(res) {
        console.log(res);
        str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h1><em>Body Chords</em></h1>";
                str += "<p>" + res.objects[i].title + "</p>";
                str += "<p>" + res.objects[i].body_chords_html + "</p>";
                str += "<br />";
                $('#songs').html(str);
            }
        }, "json");


    $("#clear").click(function(){
        str = "";
        $('#notes').html(str);
    });

    $("#AM").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=A", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: A Major</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#Am").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=Am", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: A Minor</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#BM").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=B", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: B Major</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#Bm").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=Bm", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: B Minor</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#CM").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=C", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: C Major</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#Cm").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=Cm", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: C Minor</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#DM").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=D", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: D Major</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#Dm").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=Dm", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: D Minor</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#EM").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=E", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: E Major</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#Em").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=Em", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: E Minor</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#FM").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=F", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: F Major</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#Fm").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=Fm", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: F Minor</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#GM").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=G", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: G Major</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });
    $("#Gm").click(function(){
        $.get("http://api.guitarparty.com/v2/chords/?query=Gm", function(res){
            console.log(res);
            str = "";
            for(var i=0; i < res.objects.length; i++)
            {
                str += "<h3><em>" + res.objects[i].name + "</em>: G Minor</h3>";
                str += "<p><img src="+res.objects[i].image_url+"></p>";
                $('#notes').html(str);
            }
        }, 'json');
    });

})
