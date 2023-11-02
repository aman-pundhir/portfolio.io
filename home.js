function loa()
{
    document.getElementById('des-h1').style.marginLeft='0px';
    document.getElementById('des-h2').style.marginLeft='0px';
    document.getElementById('navs').style.top='0px';
    document.getElementById('navbar').style.top='0px';
}

document.getElementById('switch').addEventListener("click",f1)
    function f1(){
        var mains= document.getElementById('main').style.backgroundColor;
        document.getElementById('slide').classList.toggle('slide-on');  
        document.getElementById('navbar').classList.toggle('bg-color');
        document.getElementById('navs').classList.toggle('bg-color');
        document.getElementById('main').classList.toggle('bg-color');
        document.getElementById('span-h1').classList.toggle('color-slide1');
        document.getElementById('span-h1').classList.toggle('color-switch');
        document.getElementById('hr-hr').classList.toggle('hr-switch');
        document.getElementById('hr-hr2').classList.toggle('hr-switch');
        document.getElementById('hr-hr3').classList.toggle('hr-switch');
        document.getElementById('hr-hr4').classList.toggle('hr-switch');
        document.getElementById('hr-hr1').classList.toggle('hr-switch');
        document.getElementById('project-box1').classList.toggle('project-box1-slide');
        document.getElementById('navbar').classList.toggle('project-box1-slide');
        document.getElementById('big-box1').classList.toggle('project-box1-slide');
        
    }
    function menu(){
        document.getElementById('menu-nav').classList.toggle('menu-nav-slide');
    }
    function back(){
        document.getElementById('menu-nav').classList.toggle('menu-nav-slide');
    }
    document.getElementById('btn').addEventListener("click", f2)
    function f2(){
        document.getElementById('btn-div').style.display="none";
        document.getElementById('btn-div1').style.display="block";
        const a =document.querySelectorAll('.hidden');
        for(i=0;i<a.length;i++)
        {
            a[i].style.display="block";
            a[i].style.display="flex";
        }
    }
    document.getElementById('btn1').addEventListener("click", f3)
    function f3(){
        document.getElementById('btn-div').style.display="block";
        document.getElementById('btn-div1').style.display="none";
        const a =document.querySelectorAll('.hidden');
        for(i=0;i<a.length;i++)
        {
            a[i].style.display="none";
            // a[i].style.display="flex";
        }
    }
    document.getElementById('btn-project').addEventListener("click", f4)
    function f4(){
        document.getElementById('');
        document.getElementById('btn-project-div').style.display="none";
        document.getElementById('btn-project-div1').style.display="block";
        const a =document.querySelectorAll('.project-hidden');
        for(i=0;i<a.length;i++)
        {
            a[i].style.display="block";
            a[i].style.display="flex";
        }
    }
    document.getElementById('btn1-project').addEventListener("click", f5)
    function f5(){
        document.getElementById('btn-project-div').style.display="block";
        document.getElementById('btn-project-div1').style.display="none";
        const a =document.querySelectorAll('.project-hidden');
        for(i=0;i<a.length;i++)
        {
            a[i].style.display="none";
            // a[i].style.display="flex";
        }
        
    }

    window.addEventListener("scroll", scrolltop);
    function scrolltop() {
        const scrollButton = document.getElementById("scroll");
        if (window.scrollY >= 200) { 
            scrollButton.style.display = "block";
        } 
        else {
            scrollButton.style.display = "none";
        }
    }

    /*var prevscroll=0;

    window.onscroll = function(){
        var currentscroll= window.pageYOffset;

        if(prevscroll < currentscroll)
        {
            document.getElementById('navbar').style.top="-100px";
        }
        else{
            document.getElementById('navbar').style.top="0px";
        }
        prevscroll=currentscroll;
    }*/

    /*const aboutmyself= document.querySelector('.about-myself');

    document.querySelector('.about-link').addEventListener("click", () => {
        aboutmyself.scrollIntoView({ behavior: "smooth" });
    }); */

    function f12(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }