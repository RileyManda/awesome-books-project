const initializeMenu = () => {
  const menuItems = document.querySelectorAll('.row-list li a');
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
      event.preventDefault();

      // Remove active class from all menu items
      menuItems.forEach((item) => {
        item.classList.remove('active');
      });

      // Add active class to the clicked menu item
      menuItem.classList.add('active');

      // Get the target section from the data attribute
      const targetSectionId = menuItem.getAttribute('data-section');

      // Hide all sections
      const sections = document.querySelectorAll('.section-container');
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      // Show the target section
      const targetSection = document.getElementById(targetSectionId);
      targetSection.classList.add('active');
    });
  });
};

export default initializeMenu;
