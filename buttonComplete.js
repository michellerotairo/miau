document.addEventListener('DOMContentLoaded', () => {
  const dockingButton = document.getElementById('dockingComplete');
  let currentPopup = null;

  dockingButton.addEventListener('click', () => {
    openDockingCompleteCard();
  });

  function openDockingCompleteCard() {
    if (currentPopup) return; // Prevent multiple popups at once

    // Overlay to cover screen
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
      zIndex: 13000,
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto',
      userSelect: 'text',
    });

    // Card container - consistent style, might customize with nautical theme
    const card = document.createElement('div');
    Object.assign(card.style, {
      background: 'rgba(20, 31, 47, 0.95)',
      borderRadius: '18px',
      padding: '32px 40px',
      maxWidth: '600px',
      width: '90vw',
      maxHeight: '80vh',
      color: '#e7e7e7',
      boxShadow: '0 12px 36px rgba(24, 32, 60, 0.7)',
      fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      fontSize: '1.1em',
      lineHeight: '1.6',
      textAlign: 'left',
      position: 'relative',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
    });

    // Close button (top right)
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

    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.color = '#fff';
    });
    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.color = '#f5e09a';
    });
    closeBtn.addEventListener('click', () => {
      if (overlay.parentNode) {
        document.body.removeChild(overlay);
        currentPopup = null;
      }
    });

    card.appendChild(closeBtn);

    // Create long letter content (you can customize the text)
    const letter = document.createElement('div');
    letter.innerHTML = `
    <h2>End of Route: But Not the End of Us</h2><h4>Captain Austin,</h4>
You’ve reached the final stop of this surprise voyage, but our journey is far from over. Thank you for sailing through this virtual adventure with me.

Through calm seas and rough waters, my love for you stays steady — like a well-anchored ship 😂⚓

I hope this made you smile today, even just a little. I may not be by your side right now, but I’m always on the same map as you. 

Happy Birthday again, love. I love you more than the ocean loves the moon 🌊🌙

Now go enjoy your day, Captain. But don’t forget:  
Your next shore leave is *with me*. 😏💙

Iloveyousomuchhhhh and I missyouuuuuu❤️
    `;

    Object.assign(letter.style, {
      whiteSpace: 'pre-wrap',
      color: '#e7e7e7',
      userSelect: 'text',
      overflowY: 'auto',
    });

    card.appendChild(letter);

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    currentPopup = overlay;
  }
});
