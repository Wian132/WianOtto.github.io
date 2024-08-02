// Fade-in effect
$(document).ready(function() {
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});

// Expandable images
var modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

var modalImg = document.createElement('img');
modalImg.className = 'modal-content';
modal.appendChild(modalImg);

var caption = document.createElement('div');
caption.id = 'caption';
caption.style.textAlign = 'center';
caption.style.color = '#ccc';
modal.appendChild(caption);

var closeModal = document.createElement('span');
closeModal.className = 'close';
closeModal.innerHTML = '&times;';
modal.appendChild(closeModal);

closeModal.onclick = function() {
    modal.style.display = 'none';
};

var images = document.getElementsByClassName('expandable');
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        caption.innerHTML = this.alt;
    };
}
