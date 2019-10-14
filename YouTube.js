
    $(document).ready(function(){
        $('#ajaxbutton').click(function(event){
            event.preventDefault();
            console.log("button clicked")

            $.get('https://gdata.youtube.com/feeds/api/users/ironmaiden/uploads?max-results=1&orderby=published&v=2&alt=jsonc',
            function(response) {
                if(response.data && response.data.items) {
                    var items = response.data.items;
                    if(items.length>0) {
                        var item = items[0];
                        var videoid = "http://www.youtube.com/embed/"+item.id;
                        console.log("Latest ID: '"+videoid+"'");
                        var video = "<iframe width='420' height='315' src='"+videoid+"' frameborder='0' allowfullscreen></iframe>";
                        $('#ajax_video').html(video);
                    }
                }
            });
        });
    }); 