document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('input', function() {
    const formData = {
      email: form.email.value,
      message: form.message.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    form.email.value = parsedData.email;
    form.message.value = parsedData.message;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log({
      email: form.email.value,
      message: form.message.value
    });

    localStorage.removeItem('feedback-form-state');
    form.email.value = '';
    form.message.value = '';
  });
});


