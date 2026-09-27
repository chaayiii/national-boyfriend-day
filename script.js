const content = document.getElementById("content");
const music = document.getElementById("music");
let playing = false;

function openGift(){
  document.getElementById("home").style.display = "none";
  content.classList.remove("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
  revealOnScroll();
  makeHearts();
  // Browser rules may block autoplay; music starts only if allowed.
  music.play().then(()=>playing=true).catch(()=>{});
}

function toggleMusic(){
  if(playing){
    music.pause();
    playing=false;
  }else{
    music.play().then(()=>playing=true).catch(()=>alert("Tambahkan file music.mp3 ke folder website dulu ya ♡"));
  }
}

function makeHearts(){
  const symbols=["♡","♥","✦","⋆"];
  for(let i=0;i<18;i++){
    const el=document.createElement("div");
    el.className="heart";
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=(Math.random()*100)+"vw";
    el.style.bottom=(Math.random()*25+8)+"vh";
    el.style.animationDelay=(Math.random()*.5)+"s";
    document.getElementById("hearts").appendChild(el);
    setTimeout(()=>el.remove(),2500);
  }
}

function revealOnScroll(){
  const items=document.querySelectorAll(".reveal");
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add("show");
    });
  },{threshold:.12});
  items.forEach(item=>observer.observe(item));
}
