// Shared page behaviour: mobile navigation menu and the homepage bio toggle.
(function () {
  var nav = document.querySelector('.main-nav');
  var toggle = document.querySelector('.nav-toggle');

  if (nav && toggle) {
    var setOpen = function (open) {
      nav.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('nav-open'));
    });

    // Close the menu with Escape or by tapping outside it.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('nav-open') && !nav.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  var bioBtn = document.getElementById('bio-toggle-btn');
  if (bioBtn) {
    var first = document.getElementById('bio-first-person');
    var third = document.getElementById('bio-third-person');

    bioBtn.addEventListener('click', function () {
      var showThird = third.hidden;
      third.hidden = !showThird;
      first.hidden = showThird;
      bioBtn.textContent = showThird ? '1st-person bio' : '3rd-person bio';
    });
  }
})();
