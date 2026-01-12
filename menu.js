document.addEventListener("DOMContentLoaded", function() {
  var menuBtn = document.getElementById("menu-btn");
  var menuDropdown = document.getElementById("menu-dropdown");
  var isOpen = false;

  if (!menuBtn || !menuDropdown) {
    console.log("Menu elements not found");
    return;
  }

  // Get header element to position menu directly below it
  var header = document.querySelector("header");

  // Style the dropdown to match header - blurry, below header
  menuDropdown.style.zIndex = "97";
  menuDropdown.style.position = "fixed";
  menuDropdown.style.left = "0";
  menuDropdown.style.right = "0";
  menuDropdown.style.overflow = "hidden";
  menuDropdown.style.transition = "height 0.4s cubic-bezier(0.76, 0, 0.24, 1)";
  menuDropdown.style.height = "0px";

  // Set top position based on actual header height
  function updateMenuPosition() {
    if (header) {
      menuDropdown.style.top = header.offsetHeight + "px";
    }
  }
  updateMenuPosition();
  window.addEventListener("resize", updateMenuPosition);

  // Copy exact styles from header element
  if (header) {
    var headerStyles = window.getComputedStyle(header);
    menuDropdown.style.background = headerStyles.background;
    menuDropdown.style.backdropFilter = headerStyles.backdropFilter;
    menuDropdown.style.webkitBackdropFilter = headerStyles.webkitBackdropFilter;
  }

  // Add menu content
  menuDropdown.innerHTML = `
    <div style="
      padding: 40px 24px;
      border-top: 1px solid rgba(255,255,255,0.1);
    ">
      <nav style="max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 40px;">
        <div>
          <h3 style="color: rgba(255,255,255,0.5); font-size: 12px; font-weight: 600; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px;">Pages</h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 14px;"><a href="./index.html" style="color: white; text-decoration: none; font-size: 15px; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Home</a></li>
            <li style="margin-bottom: 14px;"><a href="./about/index.html" style="color: white; text-decoration: none; font-size: 15px; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">About</a></li>
            <li style="margin-bottom: 14px;"><a href="./projects/index.html" style="color: white; text-decoration: none; font-size: 15px; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Projects</a></li>
            <li style="margin-bottom: 14px;"><a href="./blogs/index.html" style="color: white; text-decoration: none; font-size: 15px; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Blog</a></li>
            <li style="margin-bottom: 14px;"><a href="./contact/index.html" style="color: white; text-decoration: none; font-size: 15px; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 style="color: rgba(255,255,255,0.5); font-size: 12px; font-weight: 600; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px;">Services</h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 14px;"><a href="./services/index.html" style="color: white; text-decoration: none; font-size: 15px; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">All Services</a></li>
            <li style="margin-bottom: 14px;"><a href="./services/websites.html" style="color: white; text-decoration: none; font-size: 15px; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Websites</a></li>
          </ul>
        </div>
      </nav>
    </div>
  `;

  menuBtn.style.cursor = "pointer";

  // Get the menu text elements
  var menuText = menuBtn.querySelectorAll("p");

  menuBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    isOpen = !isOpen;

    if (isOpen) {
      menuDropdown.style.height = "auto";
      // Swap Menu/Close text visibility
      if (menuText[0]) menuText[0].style.opacity = "0";
      if (menuText[1]) menuText[1].style.opacity = "1";
    } else {
      menuDropdown.style.height = "0px";
      // Swap back
      if (menuText[0]) menuText[0].style.opacity = "1";
      if (menuText[1]) menuText[1].style.opacity = "0";
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function(e) {
    if (isOpen && !menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
      isOpen = false;
      menuDropdown.style.height = "0px";
      if (menuText[0]) menuText[0].style.opacity = "1";
      if (menuText[1]) menuText[1].style.opacity = "0";
    }
  });
});
