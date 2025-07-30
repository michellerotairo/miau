document.addEventListener('DOMContentLoaded', () => {
    const cargo1Button = document.getElementById('cargo1');
    let currentPopup = null;

    // Array of 9 picture URLs
    const pictures = [
        'second_page_image/memo/memo1.jpeg',
        'second_page_image/memo/memo2.jpeg',
        'second_page_image/memo/memo3.jpeg',
        'second_page_image/memo/memo4.jpeg',
        'second_page_image/memo/memo5.jpeg',
        'second_page_image/memo/memo6.jpeg',
        'second_page_image/memo/memo7.jpeg',
        'second_page_image/memo/memo8.jpeg',
        'second_page_image/memo/memo9.jpeg'
    ];

    cargo1Button.addEventListener('click', () => {
        openPictureCard(pictures);
    });

    function openPictureCard(images) {
        if (!images.length) return;

        let currentIndex = 0;

        // Create overlay (semi-transparent background)
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
            zIndex: 10000,
        });

        // Create the card container
        const card = document.createElement('div');
        Object.assign(card.style, {
            background: 'rgba(20, 31, 47, 0.98)',
            borderRadius: '18px',
            padding: '24px 32px',
            maxWidth: '600px',
            width: '90vw',
            maxHeight: '80vh',
            boxShadow: '0 10px 36px rgba(24, 32, 60, 0.7)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#e7e7e7',
            userSelect: 'none',
            overflow: 'hidden', // hide overflow for animation
        });

        // Close button at top right
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
            padding: '0',
            lineHeight: '1',
            userSelect: 'none',
            zIndex: '10',
        });
        closeBtn.title = 'Close';

        closeBtn.addEventListener('mouseenter', () => closeBtn.style.color = '#fff');
        closeBtn.addEventListener('mouseleave', () => closeBtn.style.color = '#f5e09a');
        closeBtn.addEventListener('click', () => {
            if (overlay.parentNode) {
                document.body.removeChild(overlay);
                currentPopup = null;
            }
        });

        card.appendChild(closeBtn);

        // Image container to help with animation
        const imgContainer = document.createElement('div');
        Object.assign(imgContainer.style, {
            width: '100%',
            height: '70vh',
            overflow: 'hidden',
            position: 'relative',
        });

        // Image element initialized with first image
        const img = document.createElement('img');
        img.src = images[currentIndex];
        img.alt = `Picture ${currentIndex + 1}`;
        Object.assign(img.style, {
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '12px',
            userSelect: 'none',
            left: '0',
            top: '0',
            transition: 'left 0.4s ease',
        });

        imgContainer.appendChild(img);
        card.appendChild(imgContainer);

        // Next button at bottom right
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next ▶️';
        Object.assign(nextBtn.style, {
            alignSelf: 'flex-end',
            background: '#e7c468',
            color: '#142f4f',
            border: 'none',
            borderRadius: '25px',
            padding: '10px 25px',
            fontWeight: '700',
            fontSize: '1em',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(231,196,104,0.6)',
            transition: 'background 0.3s ease',
            userSelect: 'none',
            marginTop: '16px',
            zIndex: '10',
        });

        nextBtn.addEventListener('mouseenter', () => nextBtn.style.background = '#f7e28a');
        nextBtn.addEventListener('mouseleave', () => nextBtn.style.background = '#e7c468');

        // Animate slide out, then slide in the new image
        nextBtn.addEventListener('click', () => {
            // Slide the current image left out
            img.style.left = '-100%';

            // Wait for animation to finish before swapping image and sliding in
            img.addEventListener('transitionend', function handler() {
                // Remove event to avoid multiple triggers
                img.removeEventListener('transitionend', handler);

                // Update index and image source
                currentIndex = (currentIndex + 1) % images.length;
                img.src = images[currentIndex];
                img.alt = `Picture ${currentIndex + 1}`;

                // Move image right off-screen before sliding in
                img.style.transition = 'none';
                img.style.left = '100%';

                // Allow the DOM to update
                requestAnimationFrame(() => {
                    img.style.transition = 'left 0.4s ease';
                    img.style.left = '0';
                });
            });
        });

        card.appendChild(nextBtn);

        overlay.appendChild(card);
        document.body.appendChild(overlay);

        currentPopup = overlay;
    }





    function openPictureCard(images) {
    if (!images.length) return;

    let currentIndex = 0;

    // Create overlay (semi-transparent background)
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
        zIndex: 10000,
    });

    // Create the card container
    const card = document.createElement('div');
    Object.assign(card.style, {
        background: 'rgba(20, 31, 47, 0.98)',
        borderRadius: '18px',
        padding: '24px 32px',
        maxWidth: '600px',
        width: '90vw',
        maxHeight: '80vh',
        boxShadow: '0 10px 36px rgba(24, 32, 60, 0.7)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#e7e7e7',
        userSelect: 'none',
        overflow: 'hidden', // hide overflow for animation
    });

    // Close button at top right
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
        padding: '0',
        lineHeight: '1',
        userSelect: 'none',
        zIndex: '10',
    });
    closeBtn.title = 'Close';

    closeBtn.addEventListener('mouseenter', () => closeBtn.style.color = '#fff');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.color = '#f5e09a');
    closeBtn.addEventListener('click', () => {
        if (overlay.parentNode) {
            document.body.removeChild(overlay);
            currentPopup = null;
        }
    });

    card.appendChild(closeBtn);

    // Create picture number indicator
    const picNumber = document.createElement('div');
    Object.assign(picNumber.style, {
        fontSize: '1.2em',
        fontWeight: '600',
        marginBottom: '12px',
        userSelect: 'none',
        color: '#e7c468',
    });
    picNumber.textContent = `Picture ${currentIndex + 1} of ${images.length}`;
    card.appendChild(picNumber);

    // Image container to help with animation
    const imgContainer = document.createElement('div');
    Object.assign(imgContainer.style, {
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
        position: 'relative',
    });

    // Image element initialized with first image
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.alt = `Picture ${currentIndex + 1}`;
    Object.assign(img.style, {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        borderRadius: '12px',
        userSelect: 'none',
        left: '0',
        top: '0',
        transition: 'left 0.4s ease',
    });

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    // Next button at bottom right
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next ▶️';
    Object.assign(nextBtn.style, {
        alignSelf: 'flex-end',
        background: '#e7c468',
        color: '#142f4f',
        border: 'none',
        borderRadius: '25px',
        padding: '10px 25px',
        fontWeight: '700',
        fontSize: '1em',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(231,196,104,0.6)',
        transition: 'background 0.3s ease',
        userSelect: 'none',
        marginTop: '16px',
        zIndex: '10',
    });

    nextBtn.addEventListener('mouseenter', () => nextBtn.style.background = '#f7e28a');
    nextBtn.addEventListener('mouseleave', () => nextBtn.style.background = '#e7c468');

    // Animate slide out, then slide in the new image and update picture number
    nextBtn.addEventListener('click', () => {
        img.style.left = '-100%';

        img.addEventListener('transitionend', function handler() {
            img.removeEventListener('transitionend', handler);

            currentIndex = (currentIndex + 1) % images.length;
            img.src = images[currentIndex];
            img.alt = `Picture ${currentIndex + 1}`;

            picNumber.textContent = `Picture ${currentIndex + 1} of ${images.length}`;

            img.style.transition = 'none';
            img.style.left = '100%';

            requestAnimationFrame(() => {
                img.style.transition = 'left 0.4s ease';
                img.style.left = '0';
            });
        });
    });

    card.appendChild(nextBtn);

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    currentPopup = overlay;
}

});
