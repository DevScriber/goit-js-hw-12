import{a as L,S as E,i as a}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==";async function u(i,r=1,o){const{data:s}=await L("https://pixabay.com/api/",{params:{key:"49445934-7dcc9965669d62101dac3c068",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o}});return s}const m=document.querySelector(".gallery"),S=new E(".gallery-link",{captionsData:"alt",captionDelay:250});function g(i){const r=i.map(({largeImageURL:o,webformatURL:s,tags:e,likes:t,views:n,comments:v,downloads:x})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img src="${s}" alt="${e}" width="360" height="200" />
        </a>
        <div class="description-container">
        <div class="description">
          <p class="description-text">Likes</p>
          <span class="description-num">${t}</span>
        </div>
        <div class="description">
          <p class="description-text">Views</p>
          <span class="description-num">${n}</span>
        </div>
        <div class="description">
          <p class="description-text">Comments</p>
          <span class="description-num">${v}</span>
        </div>
        <div class="description">
          <p class="description-text">Downloads</p>
          <span class="description-num">${x}</span>
        </div>
        </div>
      </li>`).join("");m.insertAdjacentHTML("beforeend",r),S.refresh()}function B(){m.innerHTML=""}let l="",c=1;const d=15,R=45,U={message:"Sorry, there are no images matching your search query. Please try again",iconUrl:b,position:"topRight",messageColor:"#fff",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"},P={message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#00CED1",theme:"dark",maxWidth:"432px"},h=document.querySelector(".form"),f=document.querySelector(".loader"),p=document.querySelector(".pagination-btn");h.addEventListener("submit",k);p.addEventListener("click",q);async function k(i){if(i.preventDefault(),l=i.currentTarget.elements.searchText.value.trim(),!l){a.error({message:"Please, enter search word",position:"topRight"});return}c=1,B(),y();try{const{hits:r}=await u(l,c,d);if(!r.length){a.show(U);return}g(r),J(),A()}catch{a.error({message:"An error occurred while fetching images.",position:"topRight"})}finally{h.reset(),w()}}async function q(){c++,y();try{const{hits:i}=await u(l,c,d);g(i),window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*2,behavior:"smooth"}),A()}catch{a.error({message:"An error occurred while fetching images.",position:"topRight"})}finally{w()}}function A(){c*d>=R&&(a.info(P),M())}function y(){f.style.display="flex"}function w(){f.style.display="none"}function J(){p.style.display="block"}function M(){p.style.display="none"}
//# sourceMappingURL=index.js.map
