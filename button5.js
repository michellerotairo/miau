document.addEventListener('DOMContentLoaded', () => {
  const cargo5Button = document.getElementById('cargo5');
  let currentPopup = null;

  cargo5Button.addEventListener('click', () => {
    openCargo5Card();
  });

  function openCargo5Card() {
    if (currentPopup) return; // Prevent multiple popups at once

    // Create overlay with same body theme background (navy / dark gradient)
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background:
        'linear-gradient(120deg, #0f2239 0%, #33678a 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 11000,
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto',
      userSelect: 'none',
    });

    // Card container styled like first page card theme:
    const card = document.createElement('div');
    Object.assign(card.style, {
      background: 'rgba(20, 31, 47, 0.98)',
      borderRadius: '18px',
      padding: '32px 40px',
      maxWidth: '480px',
      width: '90vw',
      boxShadow: '0 12px 36px rgba(24, 32, 60, 0.7)',
      color: '#e7e7e7',
      fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      fontSize: '1.15em',
      lineHeight: '1.6',
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
      color: '#f5e09a',
      fontSize: '1.8em',
      cursor: 'pointer',
      padding: 0,
      lineHeight: 1,
      userSelect: 'none',
      transition: 'color 0.3s ease',
    });
    closeBtn.title = 'Close';

    closeBtn.addEventListener('mouseenter', () => (closeBtn.style.color = '#fff'));
    closeBtn.addEventListener('mouseleave', () => (closeBtn.style.color = '#f5e09a'));
    closeBtn.addEventListener('click', () => {
      if (overlay.parentNode) {
        document.body.removeChild(overlay);
        currentPopup = null;
      }
    });

    card.appendChild(closeBtn);

    // Short direction text
    const directions = document.createElement('p');
    directions.textContent = "Choose the prettiest woman for you among your options:";
    Object.assign(directions.style, {
      marginBottom: '24px',
      fontWeight: '600',
      fontSize: '1.1em',
      color: '#f5e09a',
    });
    card.appendChild(directions);

    // Container for the three buttons
    const buttonsContainer = document.createElement('div');
    Object.assign(buttonsContainer.style, {
      display: 'flex',
      justifyContent: 'center',
      gap: '18px',
      width: '100%',
    });

    // Helper to create each button with consistent style
    function createOptionButton(text) {
      const btn = document.createElement('button');
      btn.textContent = text;
      Object.assign(btn.style, {
        flex: '1',
        background: '#e7c468',
        color: '#142f4f',
        border: 'none',
        borderRadius: '25px',
        padding: '10px 12px',
        fontWeight: '700',
        fontSize: '1em',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(231,196,104,0.6)',
        transition: 'background 0.3s ease',
        whiteSpace: 'normal',
      });

      btn.addEventListener('mouseenter', () => {
        btn.style.background = '#f7e28a';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.background = '#e7c468';
      });

      btn.addEventListener('click', () => {
        if (text === 'Sue' || text === 'Luna') {
          // Shake animation and light red background
          btn.style.background = '#f28b8b';
          btn.style.animation = 'shake 0.5s';

          btn.addEventListener('animationend', function handler() {
            btn.style.animation = '';
            btn.style.background = '#e7c468';
            btn.removeEventListener('animationend', handler);
          });
        } else if (text === 'Michelle') {
          // Close current popup before opening Michelle card
          if (currentPopup && currentPopup.parentNode) {
            document.body.removeChild(currentPopup);
            currentPopup = null;
          }
          openMichelleCard();
        } else {
          alert(`You chose: ${text}`);
        }
      });

      return btn;
    }

    // Create and append buttons
    const options = ['Sue', 'Luna', 'Michelle'];
    options.forEach((optionText) => {
      const btn = createOptionButton(optionText);
      buttonsContainer.appendChild(btn);
    });

    card.appendChild(buttonsContainer);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    currentPopup = overlay;
  }

  // The Michelle popup card with short message and close button:
  function openMichelleCard() {
    if (currentPopup) return;

    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 12000,
      padding: '20px',
      boxSizing: 'border-box',
      userSelect: 'none',
    });

    const card = document.createElement('div');
    Object.assign(card.style, {
      background: 'rgba(20, 31, 47, 0.98)',
      borderRadius: '18px',
      padding: '32px 40px',
      maxWidth: '420px',
      width: '90vw',
      boxShadow: '0 12px 36px rgba(24, 32, 60, 0.7)',
      color: '#e7e7e7',
      fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      fontSize: '1.15em',
      lineHeight: '1.6',
      textAlign: 'center',
      position: 'relative',
      userSelect: 'text',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    });

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✖️';
    Object.assign(closeBtn.style, {
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: 'transparent',
      border: 'none',
      color: '#f5e09a',
      fontSize: '1.8em',
      cursor: 'pointer',
      padding: 0,
      lineHeight: 1,
      userSelect: 'none',
      transition: 'color 0.3s ease',
    });
    closeBtn.title = 'Close';

    closeBtn.addEventListener('mouseenter', () => (closeBtn.style.color = '#fff'));
    closeBtn.addEventListener('mouseleave', () => (closeBtn.style.color = '#f5e09a'));
    closeBtn.addEventListener('click', () => {
      if (overlay.parentNode) {
        document.body.removeChild(overlay);
        currentPopup = null;
      }
    });

    card.appendChild(closeBtn);

    const message = document.createElement('p');
    message.textContent = "I know right";
    Object.assign(message.style, {
      marginTop: '10px',
      fontWeight: '500',
    });
    card.appendChild(message);

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    currentPopup = overlay;
  }
});
