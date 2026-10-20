// mobile nav
const navBtn = document.getElementById('navBtn');
const list = document.getElementById('menuList');
navBtn.addEventListener('click', () => {
  const open = list.classList.toggle('open');
  navBtn.setAttribute('aria-expanded', open);
});
list.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    list.classList.remove('open');
    navBtn.setAttribute('aria-expanded', false);
  }
});

// menu filter
const buttons = document.querySelectorAll('#filters button');
const items = document.querySelectorAll('.item');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.f;
    items.forEach(it => {
      it.classList.toggle('hide', f !== 'all' && it.dataset.c !== f);
    });
  });
});

// contact form (no backend, just a check)
const form = document.getElementById('form');
const msg = document.getElementById('msg');
form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const ok = d.get('name').trim() && /\S+@\S+\.\S+/.test(d.get('email')) && d.get('message').trim();
  if (!ok) {
    msg.textContent = 'Please fill in every field with a valid email.';
    return;
  }
  msg.textContent = 'Thanks, we’ll get back to you soon.';
  form.reset();
});
