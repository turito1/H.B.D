const bubbles=document.querySelector('.bubbles');
for(let i=0;i<24;i++){const b=document.createElement('span');b.className='bubble';b.style.setProperty('--size',`${Math.random()*13+4}px`);b.style.setProperty('--left',`${Math.random()*100}%`);b.style.setProperty('--duration',`${Math.random()*16+10}s`);b.style.animationDelay=`-${Math.random()*18}s`;bubbles.appendChild(b)}
const toast=document.getElementById('toast');
function showToast(text){toast.textContent=text;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
document.getElementById('diveBtn').addEventListener('click',()=>document.getElementById('birthday').scrollIntoView({behavior:'smooth'}));
document.querySelectorAll('.wish').forEach((w,i)=>w.addEventListener('click',()=>{w.classList.toggle('revealed');w.querySelector('span').textContent=w.classList.contains('revealed')?'♡':'＋';if(w.classList.contains('revealed'))showToast(['you deserve this and more ♡','safe hearts, always.','little steps still count ✦','may this year be gentle with you.'][i])}));
document.getElementById('jellySecret').addEventListener('click',()=>{showToast('secret unlocked: you are pure ocean magic 🪼');document.getElementById('secret').scrollIntoView({behavior:'smooth'})});
document.getElementById('bigJelly').addEventListener('click',()=>showToast('sending you a pocket-sized hug from the sea 💙'));
document.getElementById('replayBtn').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
