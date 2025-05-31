install.js	js<br>(code block below)let dp;
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  dp=e;
  const b=document.createElement('div');
  b.style.cssText='position:fixed;bottom:16px;right:16px;background:var(--light);color:var(--dark);padding:12px 16px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.3);display:flex;gap:12px;align-items:center;z-index:1000';
  b.innerHTML='<span>Install Your Third Space?</span>';
  const btn=document.createElement('button');
  btn.textContent='Install';
  btn.style.cssText='background:var(--dark);color:var(--light);border:none;padding:6px 10px;border-radius:6px;font-weight:bold;cursor:pointer';
  b.appendChild(btn);
  document.body.appendChild(b);
  btn.addEventListener('click',async()=>{
    b.remove();
    dp.prompt();
    await dp.userChoice;
    dp=null;
  });
});
