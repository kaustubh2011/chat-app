function adduser()
{
    user_name=document.getElementById("username").value;
    if(user_name.length==0)
    {
        document.getElementById("username").placeholder="please enter user name";
    }
    else
    {
        localStorage.setItem("username",user_name);
        window.location="kwitter_room.html";
    }
}