import{a as E,S,i as a}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==";async function u(i,s=1,o){const{data:r}=await E("https://pixabay.com/api/",{params:{key:"49445934-7dcc9965669d62101dac3c068",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:o}});return r}const g=document.querySelector(".gallery"),R=new S(".gallery-link",{captionsData:"alt",captionDelay:250});function h(i){const s=i.map(({largeImageURL:o,webformatURL:r,tags:e,likes:t,views:n,comments:L,downloads:b})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img src="${r}" alt="${e}" width="360" height="200" />
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
          <span class="description-num">${L}</span>
        </div>
        <div class="description">
          <p class="description-text">Downloads</p>
          <span class="description-num">${b}</span>
        </div>
        </div>
      </li>`).join("");g.insertAdjacentHTML("beforeend",s),R.refresh()}function U(){g.innerHTML=""}let l="",c=1;const d=15;let f=0;const P={message:"Sorry, there are no images matching your search query. Please try again",iconUrl:B,position:"topRight",messageColor:"#fff",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"},k={message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#00CED1",theme:"dark",maxWidth:"432px"},A=document.querySelector(".form"),y=document.querySelector(".loader"),p=document.querySelector(".pagination-btn");A.addEventListener("submit",q);p.addEventListener("click",I);async function q(i){if(i.preventDefault(),l=i.currentTarget.elements.searchText.value.trim(),!l){a.error({message:"Please, enter search word",position:"topRight"});return}c=1,U(),m(),v();try{const{hits:s,totalHits:o}=await u(l,c,d);if(f=o,!s.length){a.show(P);return}h(s),w()}catch{a.error({message:"An error occurred while fetching images.",position:"topRight"})}finally{A.reset(),x()}}async function I(){c++,m(),v();try{const{hits:i}=await u(l,c,d);h(i),window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*2,behavior:"smooth"}),w()}catch{a.error({message:"An error occurred while fetching images.",position:"topRight"})}finally{x()}}function w(){const i=c*d;i>=f||i>=45?(a.info(k),m()):J()}function v(){y.style.display="flex"}function x(){y.style.display="none"}function J(){p.style.display="block"}function m(){p.style.display="none"}
//# sourceMappingURL=index.js.map
