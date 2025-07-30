document.addEventListener('DOMContentLoaded', () => {
  const cargo2Button = document.getElementById('cargo2');
  let currentPopup = null;

  cargo2Button.addEventListener('click', () => {
    openLoveLetterCard();
  });

  function openLoveLetterCard() {
    // Prevent multiple popups
    if (currentPopup) return;

    // Create overlay to dim the background
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '10000',
      padding: '20px',  // add padding so card doesn't touch edges on small screens
      boxSizing: 'border-box',
      overflowY: 'auto',
    });

    // Create card container with love and seaman theme
    const card = document.createElement('div');
    Object.assign(card.style, {
      background: 'linear-gradient(135deg, #ff91aaff, #f992c2ff)',  // warm coral & orange gradient
      borderRadius: '22px',
      padding: '30px 40px',
      maxWidth: '500px',
      width: '90vw',
      boxShadow: '0 12px 36px rgba(255, 111, 145, 0.7)',
      color: '#fff',
      fontFamily: '"Georgia", serif',
      fontSize: '1.15em',
      lineHeight: '1.6',
      textAlign: 'center',
      position: 'relative',
      userSelect: 'text',
      boxSizing: 'border-box',
      border: '3px solid #19334d',  // dark navy border for seaman vibe
    });

    // Close button (top right corner)
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✖️';
    Object.assign(closeBtn.style, {
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '1.8em',
      cursor: 'pointer',
      userSelect: 'none',
      padding: '0',
      lineHeight: '1',
      transition: 'color 0.3s ease',
    });

    closeBtn.title = 'Close';
    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.color = '#ffd6e8'; // lighter pink on hover
    });
    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.color = '#fff';
    });
    closeBtn.addEventListener('click', () => {
      if (overlay.parentNode) {
        document.body.removeChild(overlay);
        currentPopup = null;
      }
    });

    card.appendChild(closeBtn);

    // Add a subtle nautical-themed decorative icon (anchor) in the card header
    const anchorIcon = document.createElement('div');
    anchorIcon.textContent = '⚓';
    Object.assign(anchorIcon.style, {
      fontSize: '3.5em',
      color: '#19334d', // dark navy
      marginBottom: '12px',
      filter: 'drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.15))',
    });
    card.appendChild(anchorIcon);

    // Love letter content with a seaman tone
    const loveLetter = document.createElement('div');
    loveLetter.innerHTML = `
      <p>Happy Birthday, My love! 🎉
I may not be there with you right now, but please know that I’m thinking of you today and always. I’m so proud of everything you do and the person you are. Thank you for being strong for us, kahit magkalayo tayo. 
I always pray for your safety and happiness. 
Can’t wait to celebrate with you soon. Stay safe always, aki. I love you! 💙

- Love</p>
    `;
    Object.assign(loveLetter.style, {
      fontWeight: '400',
      letterSpacing: '0.02em',
      maxHeight: '60vh',
      overflowY: 'auto',
      paddingRight: '10px',
      marginBottom: '4px',
      userSelect: 'text',
    });

    card.appendChild(loveLetter);

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    currentPopup = overlay;
  }
});
