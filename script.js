// Scroll animations
const elements = document.querySelectorAll('section p, .service-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold:0.2 });
elements.forEach(el => observer.observe(el));

// Typed text effect
const typedText = document.getElementById('typed');
const text = "Crafting Tomorrow";
let index = 0;
function type() {
  if(index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Scroll to contact section
function scrollToContact() {
  document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
}