(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});

  var d=document.getElementById('lb'),img=d.querySelector('img'),t=document.getElementById('lbt');
  document.querySelectorAll('.shot').forEach(function(s){
    s.addEventListener('click',function(){img.src=s.dataset.src;img.alt=s.querySelector('img').alt;t.innerHTML=s.dataset.title;d.showModal();d.querySelector('.lbimg').scrollTop=0});
  });
  d.querySelector('.close').addEventListener('click',function(){d.close()});
  d.addEventListener('click',function(e){if(e.target===d)d.close()});

  // Static hosting has no server to receive the form, so open the visitor's mail app with the message filled in.
  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target;
    var body='Name: '+f.first.value+' '+f.last.value+'\nEmail: '+f.email.value+'\n\n'+f.message.value;
    location.href='mailto:ahmad0006arshad@gmail.com?subject='+encodeURIComponent('Portfolio enquiry from '+f.first.value)+'&body='+encodeURIComponent(body);
  });
})();
