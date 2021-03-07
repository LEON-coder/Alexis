 $('.menu-button').on('click', function(event) {
     event.preventDefault() // If hamburger is a <a> or <button> element
     $(this).toggleClass('menu-active', 'menu-button__stripe--active', 'menu-button__stripe--active::before',
         'menu-button__stripe--active::after');
     $('.header-nav--mobile').toggleClass('menu-active');
 });