document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_cqn96g6', 'template_sxktthi', this)
            .then(function(response) {
                document.getElementById('form-status').innerHTML = 'Message sent successfully!';
                document.getElementById('contact-form').reset();
            }, function(error) {
                document.getElementById('form-status').innerHTML = 'Failed to send message.';
                console.log('Failed to send message:', error);
            });
    });
});
