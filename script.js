document.addEventListener('DOMContentLoaded', () => {
    const denyButton = document.getElementById('deny');
    const grantButton = document.getElementById('grant');
    let currentPopup = null;

    function showPopup(imageUrl, message, options = {}) {

        const popup = document.createElement('div');
        currentPopup = popup;

        // Style popup container
        Object.assign(popup.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(20, 31, 47, 0.98)',
            padding: '24px 32px 60px 32px', // bottom padding for ship emoji
            borderRadius: '18px',
            boxShadow: '0 10px 36px rgba(24, 32, 60, 0.7)',
            zIndex: '10000',
            textAlign: 'center',
            color: '#e7e7e7',
            maxWidth: '360px',
            border: '2.5px solid #f5e09a',
            overflow: 'visible', // allow ship emoji outside
        });

        // Image
        if (imageUrl) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Popup Image';
            img.style.maxWidth = '100%';
            img.style.borderRadius = '12px';
            popup.appendChild(img);
        }

        // Message paragraph
        if (message) {
            const msg = document.createElement('p');
            msg.textContent = message;
            msg.style.marginTop = '18px';
            msg.style.fontSize = '1.1em';
            popup.appendChild(msg);
        }

        if (options.hasShipAnimation) {
            // Ship emoji span
            const ship = document.createElement('span');
            ship.textContent = '🚢';

            Object.assign(ship.style, {
                position: 'absolute',
                top: '100%', // just below content
                left: '-60px',   // start outside left
                fontSize: '2.8em',
                marginTop: '10px',
                transition: 'left 3s linear',
                whiteSpace: 'nowrap',
            });

            popup.appendChild(ship);

            document.body.appendChild(popup);

            // Animate ship after repaint
            requestAnimationFrame(() => {
                ship.style.left = 'calc(100% + 50px)'; // move beyond right edge
            });

            ship.addEventListener('transitionend', () => {
                if (popup.parentNode) {
                    document.body.removeChild(popup);
                    currentPopup = null;
                }
                // Redirect to second page AFTER animation
                window.location.href = 'second_page.html';  // change filename if needed
            });

            return; // animation is handled, stop execution here
        } else {
            // Normal popup with close button
            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'Close';
            Object.assign(closeBtn.style, {
                marginTop: '20px',
                padding: '10px 28px',
                border: 'none',
                borderRadius: '30px',
                background: '#e7c468',
                color: '#142f4f',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1.05em',
            });

            closeBtn.addEventListener('mouseenter', () => {
                closeBtn.style.background = '#f7e28a';
            });
            closeBtn.addEventListener('mouseleave', () => {
                closeBtn.style.background = '#e7c468';
            });

            closeBtn.addEventListener('click', () => {
                if (popup.parentNode) {
                    document.body.removeChild(popup);
                    currentPopup = null;
                }
            });

            popup.appendChild(closeBtn);
            document.body.appendChild(popup);
        }
    }

    denyButton.addEventListener('click', () => {
        showPopup('angry.jpeg', 'Not a chance!');
    });

    grantButton.addEventListener('click', () => {
        showPopup('happy.jpeg', 'Permission granted!', { hasShipAnimation: true });
    });







    
    
});
