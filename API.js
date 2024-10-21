
function getPosts(userId) {
    let requset = new XMLHttpRequest();
    requset.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId);
    requset.responseType = "json";
    requset.send();
    requset.onload = function() {
        if(requset.status >= 200 && requset.status < 300) {
            
            let posts = requset.response;
            document.getElementById("posts").innerHTML = "";

            for(pos of posts){
                let postsContent = `<div  class="posts"><div class="title">${pos.title}</div><div>${pos.body}</div></div></div>`
                document.getElementById("posts").innerHTML += postsContent;
                console.log(pos.title);
            }
        }
    }
}

function getUsers() {
    let requset = new XMLHttpRequest();
    requset.open("GET", "https://jsonplaceholder.typicode.com/users");
    requset.responseType = "json";
    requset.send();
    requset.onload = function() {
        if(requset.status >= 200 && requset.status < 300) {
            
            let users = requset.response;
            document.getElementById("users").innerHTML = "";
            for(use of users){
                let userContent = `<li onclick="getPosts(${use.id})"><h4>${use.name}</h4><h5>${use.email}</h5></li>`
                document.getElementById("users").innerHTML += userContent;
                console.log(use.name);
            }
        }
    }
}

getPosts(1);
getUsers();
