journal.js	js<br>(code block below)const dateInput  = document.getElementById('datePick');
const entryBox   = document.getElementById('entryBox');
const statusBar  = document.getElementById('status');
const streakEl   = document.getElementById('streak');

const today = new Date().toISOString().slice(0,10);
let timer;

/* helpers */
const key = d => `entry-${d}`;
const load = d => localStorage.getItem(key(d)) || '';
const save = (d,val) => localStorage.setItem(key(d), val);

function updateStreak(){
  let n=0; const walk=new Date();
  while(true){
    const k=walk.toISOString().slice(0,10);
    if(load(k).trim().length){n++;walk.setDate(walk.getDate()-1);}
    else break;
  }
  streakEl.textContent = n ? `🔥 ${n}-day streak` : '';
}

/* init */
dateInput.value=today;
entryBox.value = load(today);
statusBar.textContent='Autosaved';
updateStreak();

/* autosave */
entryBox.addEventListener('input',()=>{
  clearTimeout(timer);
  timer=setTimeout(()=>{
    save(dateInput.value,entryBox.value);
    statusBar.textContent='Saved ✦';
    updateStreak();
  },700);
});

/* change day */
dateInput.addEventListener('change',()=>{
  entryBox.value=load(dateInput.value);
  statusBar.textContent='Loaded ✓';
});
