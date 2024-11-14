function toggleAccordion(contentId) {
            const content = document.getElementById(contentId);
            const isActive = content.style.display === 'block';
            const accordions = document.querySelectorAll('.accordion-content');

            // Close all accordions first
            accordions.forEach(item => item.style.display = 'none');

            // Toggle the clicked accordion
            content.style.display = isActive ? 'none' : 'block';
        }
