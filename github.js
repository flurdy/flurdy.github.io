function findRecentRepositories(response) {
   $(response.data.filter(function(index){
      return !index.fork;
   }).slice(0,6))
     .each(function(){
      $("#recent-list ul.repolist")
         .append("<li class=\"list-group-item\"><a href=\"" + this.html_url + "\">" +  this.name + "</a></li>");
   });
   $("#recent-list").removeClass("recent-hidden");
}

$(function() {
   jQuery.getJSON("http://api.github.com/users/flurdy/repos?sort=pushed&callback=?",findRecentRepositories);
});
