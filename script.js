 function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }

      // Theme toggle functionality
      document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const contactInfoBtn = document.getElementById('contact-info-btn');
        const backToTopBtn = document.getElementById('back-to-top');
        
        // Theme toggle
        if (themeToggle) {
          themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Update button text and icon based on current theme
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
              themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            } else {
              themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }
          });
        }
        
        // Contact info button
        if (contactInfoBtn) {
          contactInfoBtn.addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          });
        }
        
        // Back to top button
        window.addEventListener('scroll', function() {
          if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
          } else {
            backToTopBtn.classList.remove('show');
          }
        });
        
        backToTopBtn.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Arrow click functionality
        const arrows = document.querySelectorAll('.arrow');
        arrows.forEach(arrow => {
          arrow.addEventListener('click', function() {
            if (this.parentElement.id === 'about') {
              document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
            } else if (this.parentElement.id === 'experience') {
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            } else if (this.parentElement.id === 'projects') {
              document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
            } else if (this.parentElement.id === 'education') {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
        
        // Project buttons functionality (Removed alert)
        const projectButtons = document.querySelectorAll('.project-btn');
        projectButtons.forEach(button => {
          button.addEventListener('click', function() {
            console.log('Project button clicked. Add your links!');
            // You can add your window.open() logic here
          });
        });
        
        // Marksheet Modal Functionality
        const modal = document.getElementById('marksheetModal');
        const modalImg = document.getElementById('marksheetImg');
        const captionText = document.getElementById('caption');
        const closeModal = document.querySelector('.close-modal');
        
        // View marksheet buttons
        const viewMarksheetBtns = document.querySelectorAll('.view-marksheet');
        
        viewMarksheetBtns.forEach(btn => {
          btn.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-img');
            modal.style.display = 'block';
            modalImg.src = './assets/marksheets/' + imgSrc;
            captionText.innerHTML = this.textContent;
          });
        });
        
        // Close modal
        closeModal.addEventListener('click', function() {
          modal.style.display = 'none';
        });
        
        // Close modal when clicking outside the image
        modal.addEventListener('click', function(e) {
          if (e.target === modal) {
            modal.style.display = 'none';
          }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
          }
        });
        
        // --- UPGRADED: Intersection Observer for animations ---
        const animationObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target;
              const animation = element.getAttribute('data-animation');
              element.classList.add('animate__' + animation);
              observer.unobserve(element); // Animate only once
            }
          });
        }, { threshold: 0.1 }); // Trigger when 10% visible
        
        const elementsToAnimate = document.querySelectorAll('[data-animation]');
        elementsToAnimate.forEach(element => {
          animationObserver.observe(element);
        });
        
        // --- UPGRADED: Intersection Observer for skill bars ---
        const skillBarObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const bar = entry.target;
              const level = bar.getAttribute('data-level');
              bar.style.width = level + '%';
              observer.unobserve(bar); // Animate only once
            }
          });
        }, { threshold: 0.5 }); // Trigger when 50% visible
        
        const skillBars = document.querySelectorAll('.skill-level');
        skillBars.forEach(bar => {
          skillBarObserver.observe(bar);
        });
        
        // --- NEW: Active nav link on scroll ---
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav .nav-links li a[href^="#"]');
        
        const navObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              const id = entry.target.getAttribute('id');
              navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                  link.classList.add('active');
                }
              });
            }
          });
        }, { threshold: 0.5 }); // Trigger when 50% of section is visible
        
        sections.forEach(section => {
          navObserver.observe(section);
        });

        // Add loading animation
        window.addEventListener('load', function() {
          document.body.classList.add('loaded');
        });
      });