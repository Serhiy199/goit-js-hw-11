import{S as f,i as h}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=new URL("https://pixabay.com/api/?"),g="41516646-ec27055f09ddd37d9bfda39a5",L=document.querySelector(".form"),S=document.querySelector(".gallery"),b=document.querySelector("body");L.addEventListener("submit",s=>{s.preventDefault(),b.insertAdjacentHTML("beforeend",'<span class="loader"></span>');const r=s.target.elements.search.value,a=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${y}${a}`;fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{$(e)}).catch(e=>{document.querySelector(".loader").remove(),i()})});function $(s){const r=s.hits;r.length||i(error);const a=r.reduce((t,{webformatURL:c,largeImageURL:n,tags:l,likes:u,views:d,comments:m,downloads:p})=>t+`<li class="gallery-item">
    <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${c}" alt="${l}"/>
    </a>
    <ul class="characteristics-list">
    <li class="characteristics"><span class="characteristics-titel">Likes</span> <span>${u}</span></li>
    <li class="characteristics"><span class="characteristics-titel">Views</span> <span>${d}</span></li>
    <li class="characteristics"><span class="characteristics-titel">Comments</span> <span>${m}</span></li>
    <li class="characteristics"><span class="characteristics-titel">Downloads</span> <span>${p}</span></li>
</ul>
    
</li>`,"");S.innerHTML=a,new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),document.querySelector(".loader").remove()}function i(){h.error({message:"❌ Sorry, there are no images matching your search query. Please, try again!",icon:"",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
