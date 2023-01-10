export default function formHandler(name) {
    const form = document.getElementById(name);

    if (form) form.addEventListener('submit', e => {
        const formSubmit = form.querySelector('[type=submit]');
        const data = new FormData(form);
        const action = e.target.action;

        e.preventDefault();

        formSubmit.classList.add('is-loading');

        fetch(action, { method: 'POST', body: data })
            .then(() => {
                formSubmit.classList.remove('is-loading');
                form.classList.add('has-done');
            })
            .catch(error => console.error('Error:', error));
    });
}
