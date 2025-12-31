// Small JS: theme toggle and dynamic year
(function(){
  const toggle = document.getElementById('theme-toggle');
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  function setTheme(t){
    document.body.className = t;
    toggle.textContent = t === 'dark' ? 'Light' : 'Dark';
    localStorage.setItem('theme', t);
  }

  toggle.addEventListener('click', ()=>{
    const t = document.body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(t);
  });

  // Init
  const saved = localStorage.getItem('theme');
  if(saved) setTheme(saved);
})();
