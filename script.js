document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)'; // Efek angkat saat hover
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)'; // Kembali ke posisi semula
    });
});

document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
});
