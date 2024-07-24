document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-btn');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  toggleBtn.addEventListener('click', function() {
      dropdownMenu.classList.toggle('open');

      // Toggle between bars and times icons
      const barsIcon = toggleBtn.querySelector('.fa-bars');
      const timesIcon = toggleBtn.querySelector('.fa-times');
      barsIcon.style.display = dropdownMenu.classList.contains('open') ? 'none' : 'block';
      timesIcon.style.display = dropdownMenu.classList.contains('open') ? 'block' : 'none';
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
      if (!toggleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove('open');
          toggleBtn.querySelector('.fa-bars').style.display = 'block';
          toggleBtn.querySelector('.fa-times').style.display = 'none';
      }
  });

  // Close dropdown when resizing window
  window.addEventListener('resize', function() {
      if (window.innerWidth > 1300) {
          dropdownMenu.classList.remove('open');
          toggleBtn.querySelector('.fa-bars').style.display = 'block';
          toggleBtn.querySelector('.fa-times').style.display = 'none';
      }
  });
});

















document.addEventListener('DOMContentLoaded', function () {
    const projectSelect = document.getElementById('projectSelect');
    const otherProjectInput = document.getElementById('otherProject');

    projectSelect.addEventListener('change', function () {
        if (projectSelect.value === 'Andra') {
            otherProjectInput.style.display = 'block';
            otherProjectInput.setAttribute('required', 'required');
        } else {
            otherProjectInput.style.display = 'none';
            otherProjectInput.removeAttribute('required');
        }
    });
});











// Function to check if the element has been scrolled past
function isScrolledPast(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Function to handle scroll event
function handleScroll() {
  const formSection = document.querySelector('.formm');
  const fourSection = document.querySelector('.four');
  if (isScrolledPast(fourSection)) {
      formSection.classList.add('in-view');
  }
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check in case the section is already in view
handleScroll();



// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

document.getElementById('place').addEventListener('change', function() {
  const otherPlaceInput = document.getElementById('other-place');
  if (this.value === 'others') {
      otherPlaceInput.style.display = 'block';
  } else {
      otherPlaceInput.style.display = 'none';
  }
});













document.querySelectorAll('.boxee').forEach(box => {
  const hoverImage = box.getAttribute('data-hover');
  box.style.setProperty('--hover-image', `url(${hoverImage})`);
});




function showOtherPlaceInput() {
  var placeSelect = document.getElementById('place');
  var otherPlaceInput = document.getElementById('otherPlace');
  if (placeSelect.value === 'others') {
      otherPlaceInput.style.display = 'block';
      otherPlaceInput.required = true;
  } else {
      otherPlaceInput.style.display = 'none';
      otherPlaceInput.required = false;
  }
}









function showOtherInput() {
    var select = document.getElementById("renovation-select");
    var otherInput = document.getElementById("other-renovation");
    if (select.value === "Andra") {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
}












// Function to check if the element has been scrolled past
function isScrolledPast(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Function to handle scroll event
function handleScroll() {
    const formSection = document.querySelector('.fodo');
    const hessaSection = document.querySelector('.hessa');
    const fourSection = document.querySelector('.four');

    if (isScrolledPast(fourSection)) {
        formSection.classList.add('in-view');
        hessaSection.classList.add('in-view');
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check in case the section is already in view
handleScroll();







document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#date-picker", {
        dateFormat: "d/m/Y" // Date format: day/month/year
    });
});












// connecting 404 page 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = link.getAttribute('href');
            fetch(href)
                .then(response => {
                    if (response.ok) {
                        window.location.href = href;
                    } else {
                        window.location.href = '404.html';
                    }
                })
                .catch(() => {
                    window.location.href = '404.html';
                });
        });
    });
});
