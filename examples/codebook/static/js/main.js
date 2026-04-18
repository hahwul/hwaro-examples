document.addEventListener('DOMContentLoaded', () => {
  // Tab switching logic
  const tabContainers = document.querySelectorAll('.tab-container');
  
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tab-button');
    const contents = container.querySelectorAll('.tab-content');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents in this container
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const activeContent = container.querySelector(`.tab-content[data-tab="${tabId}"]`);
        if (activeContent) {
          activeContent.classList.add('active');
        }
      });
    });
  });
});
