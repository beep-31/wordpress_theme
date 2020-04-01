window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let burgerIcon = document.querySelector('#burg'),
        slideoutMenu = document.querySelector('#slideout-menu'),
        searchIcon = document.querySelector('#search'),
        searchBox = document.querySelector('#searchbox');

    searchIcon.addEventListener('click', function(){
        if(searchBox.style.top == '72px'){
            searchBox.style.top = '24px';
            searchBox.style.pointerEvents = 'none';
        } else{
            searchBox.style.top = '72px';
            searchBox.style.pointerEvents = 'auto';
        }
    });

    burgerIcon.addEventListener('click', function(){
        if(slideoutMenu.style.opacity=='1'){
            slideoutMenu.style.opacity = '0';
            slideoutMenu.style.pointerEvents = 'none';
        } else{
            slideoutMenu.style.opacity = '1';
            slideoutMenu.style.pointerEvents = 'auto';
        }
    });
});

