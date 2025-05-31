main.js	js<br>(code block below)const hero=document.getElementById('hero');
const chat=document.getElementById('chat-section');
function showChat(){hero.classList.add('hidden');chat.classList.remove('hidden');localStorage.setItem('inSpace','true');}
function exitChat(){chat.classList.add('hidden');hero.classList.remove('hidden');localStorage.setItem('inSpace','false');}
document.getElementById('enter-btn').addEventListener('click',showChat);
document.getElementById('exit-btn').addEventListener('click',exitChat);
if(localStorage.getItem('inSpace')==='true'){showChat();}
document.getElementById('share-btn').addEventListener('click',async ()=>{
  const data={title:'Your Third Space',text:'Check out Your Third Space – a calm digital room built for men.',url:window.location.origin};
  if(navigator.share){try{await navigator.share(data);}catch(e){}}
  else{try{await navigator.clipboard.writeText(data.url);alert('Link copied');}catch(e){prompt('Copy this link',data.url);}}
});
