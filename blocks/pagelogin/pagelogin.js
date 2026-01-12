export default function decorate(block) {
  const form = document.createElement('form');
  form.className = 'pagelogin-form';

  [...block.children].forEach((row) => {
    const cells = row.querySelectorAll(':scope > div');

    // Button row (single column)
    if (cells.length === 1) {
      const buttonText = cells[0].textContent.trim();

      const button = document.createElement('button');
      button.type = 'submit';
      button.textContent = buttonText || 'Login';

      form.append(button);
      return;
    }

    // Field rows (label + placeholder)
    if (cells.length === 2) {
      const labelText = cells[0].textContent.trim();
      const placeholder = cells[1].textContent.trim();

      const field = document.createElement('div');
      field.className = 'pagelogin-field';

      const label = document.createElement('label');
      label.textContent = labelText;

      const input = document.createElement('input');
      input.placeholder = placeholder;
      input.name = labelText.toLowerCase().replace(/\s+/g, '-');

      if (labelText.toLowerCase().includes('password')) {
        input.type = 'password';
      } else {
        input.type = 'text';
      }

      field.append(label, input);
      form.append(field);
    }
  });

  // Replace block content
  block.innerHTML = '';
  block.append(form);

  // Behavior
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));
    // console.log('Login submitted', data);
  });
}
