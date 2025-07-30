document.addEventListener('DOMContentLoaded', () => {
  const cargo3Button = document.getElementById('cargo3');
  let currentPopup = null;

  cargo3Button.addEventListener('click', () => {
    openMoneyThemeCard();
  });

  function openMoneyThemeCard() {
    if (currentPopup) return; // Optional: prevent multiple popups

    // Create overlay to dim background
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '10000',
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto',
    });

    // Card container with money/dollar theme styles
    const card = document.createElement('div');
    Object.assign(card.style, {
      background: 'linear-gradient(135deg, #2ecc71, #27ae60)', // green dollar vibe
      borderRadius: '20px',
      padding: '30px 40px',
      maxWidth: '480px',
      width: '90vw',
      boxShadow: '0 12px 36px rgba(39, 174, 96, 0.7)',
      color: '#fff',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      fontSize: '1.2em',
      lineHeight: '1.6',
      textAlign: 'center',
      position: 'relative',
      userSelect: 'text',
    });

    // Close button top right
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✖️';
    Object.assign(closeBtn.style, {
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: 'transparent',
      border: 'none',
      color: '#d0f0c0',
      fontSize: '1.8em',
      cursor: 'pointer',
      padding: '0',
      lineHeight: '1',
      userSelect: 'none',
      transition: 'color 0.3s ease',
    });
    closeBtn.title = 'Close';

    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.color = '#a3d997'; // lighter green on hover
    });
    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.color = '#d0f0c0';
    });
    closeBtn.addEventListener('click', () => {
      if (overlay.parentNode) {
        document.body.removeChild(overlay);
        currentPopup = null;
      }
    });
    card.appendChild(closeBtn);

    // Dollar icon decoration (large dollar sign)
    const dollarIcon = document.createElement('div');
    dollarIcon.textContent = '💵';
    Object.assign(dollarIcon.style, {
      fontSize: '4em',
      marginBottom: '20px',
      textShadow: '0 3px 10px rgba(0, 100, 0, 0.5)',
      userSelect: 'none',
    });
    card.appendChild(dollarIcon);

    // Message content
    const message = document.createElement('p');
    message.textContent = "Not working due to low tide (di pa natama sa lotto)";
    card.appendChild(message);

    // Append card to overlay, and overlay to body
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    currentPopup = overlay;
  }
});
