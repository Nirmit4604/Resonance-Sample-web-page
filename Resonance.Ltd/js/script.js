const observer = new IntersectionObserver((entries) =>  {
   entries.forEach((entry) => {
    console.log(entry)
if (entry.isIntersecting) {
entry.target.classList.add('show');
} else {
    entry.target.classList.remove('show');
}

   });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


//
document.addEventListener("DOMContentLoaded", function(event) {
    var heading = document.getElementById('mainHeading');
    heading.classList.add('show');
  });
  