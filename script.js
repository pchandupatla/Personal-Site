// window.alert("Hello World!");
document.getElementById("open_nav").onclick = function(){openNav();}
document.getElementById("close").onclick = function(){closeNav();}

// function openClose()
// {
//     if(document.getElementById("nav").style.display == "block")
//     {
//         closeNav();
//     }else{
//         openNav();
//     }
// }

function openNav()
{
    document.getElementById("nav").style.display = "block";
    document.getElementById("nav").style.animationName = "navFadeIn";
    document.getElementById("nav").style.animationDuration = "0.5s";
    document.getElementById("nav_lines").style.display = "none";
}

function closeNav()
{
    document.getElementById("nav").style.animationName = "navClose";
    document.getElementById("nav").style.animationDuration = "0.5s";
    window.setTimeout(closeNavHelper, 500);
    document.getElementById("container").style.marginLeft = "0";
}

function closeNavHelper()
{
    document.getElementById("nav_lines").style.display = "block";
    document.getElementById("nav").style.display = "none";
}