import { loadCSS } from '../../scripts/aem.js';

export default async function decorate(block) {
  console.log('Login block JS loaded', block);
  // load block CSS explicitly
  await loadCSS(`${window.hlx.codeBasePath}/blocks/login/login.css`);

  // optional JS: add login form behavior
  const form = block.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Logging in', form.querySelector('input[type="email"]').value);
    });
  }
}
