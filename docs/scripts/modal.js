$(document).ready(function() {
    const trigger = $('#parking-image-trigger');
    const modal = $('#parking-modal');
    const close = $('#close');

    trigger.click( () => modal.css({'display': 'block'}));

    close.click( () => modal.css({'display': 'none'}));
});