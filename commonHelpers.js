import{S as m,i as h}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=new URL("https://pixabay.com/api/?"),g="41516646-ec27055f09ddd37d9bfda39a5",L=document.querySelector(".form"),S=document.querySelector(".gallery"),b=document.querySelector("body");L.addEventListener("submit",s=>{s.preventDefault(),b.insertAdjacentHTML("beforeend",'<span class="loader"></span>');const r=s.target.elements.search.value,a=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${y}${a}`;fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{$(e)}).catch(e=>{c()})});function $(s){const r=s.hits;r.length||c(error);const a=r.reduce((t,{webformatURL:i,largeImageURL:n,tags:l,likes:u,views:d,comments:p,downloads:f})=>t+`<li class="gallery-item">
    <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${i}" alt="${l}"/>
    </a>
    <ul class="characteristics-list">
    <li class="characteristics"><span class="characteristics-titel">Likes</span> <span>${u}</span></li>
    <li class="characteristics"><span class="characteristics-titel">Views</span> <span>${d}</span></li>
    <li class="characteristics"><span class="characteristics-titel">Comments</span> <span>${p}</span></li>
    <li class="characteristics"><span class="characteristics-titel">Downloads</span> <span>${f}</span></li>
</ul>
    
</li>`,"");S.innerHTML=a,new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),document.querySelector(".loader").remove()}function c(){h.error({message:"❌ Sorry, there are no images matching your search query. Please, try again!",icon:"",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
