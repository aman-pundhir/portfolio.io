function loa()
{
    document.getElementById('des-h1').style.marginLeft='0px';
    document.getElementById('des-h2').style.marginLeft='0px';
    document.getElementById('navs').style.top='0px';
    document.getElementById('navbar').style.top='0px';
    document.getElementById('hero-section-image').style.transform="translateY(0px)";

}

document.getElementById('switch').addEventListener("click",f1)
    function f1(){
        var mains= document.getElementById('main').style.backgroundColor;
        document.getElementById('slide').classList.toggle('slide-on');  
        document.getElementById('navbar').classList.toggle('bg-color');
        document.getElementById('navs').classList.toggle('bg-color');
        document.getElementById('main').classList.toggle('bg-color');
        document.getElementById('hr-hr').classList.toggle('hr-switch');
        document.getElementById('hr-hr2').classList.toggle('hr-switch');
        document.getElementById('hr-hr3').classList.toggle('hr-switch');
        document.getElementById('hr-hr4').classList.toggle('hr-switch');
        document.getElementById('hr-hr1').classList.toggle('hr-switch');
        document.getElementById('hr-hr5').classList.toggle('hr-switch');
        document.getElementById('project-box1').classList.toggle('project-box1-slide');
        // document.getElementById('navbar').classList.toggle('project-box1-slide');
        document.getElementById('big-box1').classList.toggle('project-box1-slide');
        document.getElementById('name-slide').classList.toggle('color-slide');
        document.getElementById('about-myself').classList.toggle('color-slide');
        document.getElementById('what-i-do-text').classList.toggle('color-slide');
        document.getElementById('footer-main').classList.toggle('color-slide');
        document.getElementById('copy').classList.toggle('color-slide');
        document.getElementById('skill').classList.toggle('color-slide');
        document.getElementById('project').classList.toggle('color-slide');
        document.getElementById('menu-icon').classList.toggle('color-slide');
        document.getElementById('nav-slide1').classList.toggle('color-switch');
        document.getElementById('nav-slide').classList.toggle('color-switch');
        document.getElementById('nav-slide2').classList.toggle('color-switch');
        document.getElementById('nav-slide3').classList.toggle('color-switch');
        document.getElementById('des-h1').classList.toggle('color-switch');
        document.getElementById('des-h2').classList.toggle('color-switch');
        document.getElementById('span-h1').classList.toggle('color-switch');

        document.getElementById('footer-photo-background').classList.toggle('footer-photo-background-slide');
        // document.getElementById('span-h1').style.color='black';

        // ----------------------description button--------------

        document.getElementById('contact-btn').addEventListener("mouseover", f6)
        function f6(){
            document.getElementById('contact-btn').style.cssText="filter: drop-shadow(#55198b 2px 2px 7px)";
        }
        document.getElementById('contact-btn').addEventListener("mouseleave", f7)
        function f7(){
            document.getElementById('contact-btn').style.boxShadow='none';
            document.getElementById('contact-btn').style.cssText="filter: drop-shadow(none)";
        }
        document.getElementById('resume-btn').addEventListener("mouseover", f8)
        function f8(){
            document.getElementById('resume-btn').style.cssText="filter: drop-shadow(#55198b 2px 2px 7px)";
        }
        document.getElementById('resume-btn').addEventListener("mouseleave", f9)
        function f9(){
            document.getElementById('resume-btn').style.boxShadow='none';
            document.getElementById('resume-btn').style.cssText="filter: drop-shadow(none)";
        }

        const an= document.querySelectorAll('a');
        for(i=1; i<=a.length; i++)
        {
            an.classList.toggle('color-slide');
        }
    }


    // -----------------hide menu nav------------------

    function menu(){
        document.getElementById('menu-nav').classList.toggle('menu-nav-slide');
    }

    function back(){
        document.getElementById('menu-nav').classList.toggle('menu-nav-slide');
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

    // ------------------------hide btn skill project-------------------------

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

    function f12(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }