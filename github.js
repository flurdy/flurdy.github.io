var recentRepos = [];

function findRecentRepositories(response) {
   recentRepos = $(response.data.filter(function(index){
         return !index.fork;
      }).slice(0,6));
}

function appendToRecent(repos){
   $(repos).each(function(){
    $("#recent-list ul.repolist")
      .append("<li class=\"list-group-item\"><a href=\"" + this.html_url + "\">" +  this.name + "</a></li>");
   });
   $("#recent-list").removeClass("recent-hidden");
}

$(function() {
   if(recentRepos.length > 0) appendToRecent(recentRepos)
   else console.log("No repos found");
});
