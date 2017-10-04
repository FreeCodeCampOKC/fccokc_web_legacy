$(document).ready(function() {
    var modal = $('#parking-modal');
    var trigger = $('#parking-modal-trigger');
    var span = $('#close');

    trigger.click(function() {
        modal.style.display = "block";
    });

    span.click(function() {
        modal.style.display = "none";
    });

    window.click(function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});