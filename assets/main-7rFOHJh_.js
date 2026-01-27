import{a as J,i as w}from"./vendor-B3yUAu1b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const ce="https://your-energy.b.goit.study/api",L=J.create({baseURL:ce});function le(e,t,s){const r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return e?t?r.test(t.trim())?!s||s.trim().length===0?(u.showErrorToast("Please enter a comment."),!1):s.trim().length<5?(u.showErrorToast("Comment must be at least 5 characters."),!1):s.trim().length>300?(u.showErrorToast("Comment must be less than 300 characters."),!1):!0:(u.showErrorToast("Please enter a valid email address."),!1):(u.showErrorToast("Please enter your email address."),!1):(u.showErrorToast("Please select a rating before submitting."),!1)}const u={showErrorToast:function(e){return w.error({title:"Error",message:e,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})},showSuccessToast:function(e){return w.success({title:"Success",message:e,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}},b={async fetchFilters({filter:e,page:t=1,limit:s=10}){try{const r=new URLSearchParams;return e&&r.append("filter",e),r.append("page",t),r.append("limit",s),(await L.get(`/filters?${r.toString()}`)).data}catch{return{results:[],totalPages:0,page:1}}},async fetchExercises({page:e,limit:t=10,keyword:s,muscles:r,bodypart:a,equipment:n}){try{const i=new URL("/exercises");return i.searchParams.append("page",e),i.searchParams.append("limit",t),s&&i.searchParams.append("keyword",s),r&&i.searchParams.append("muscles",r),a&&i.searchParams.append("bodypart",a),n&&i.searchParams.append("equipment",n),(await L.get(i)).data}catch{return{results:[],totalPages:0,page:1}}},async getExerciseById(e){try{const{data:t}=await L.get(`/exercises/${e}`);return t}catch(t){throw u.showErrorToast(`Error fetching exercise by ID: ${t}`),t}},async updateRating(e,t){try{const{data:s}=await L.patch(`/exercises/${e}/rating`,t);return s}catch(s){throw s}},async quoteOfDay(){try{const{data:e}=await L.get("/quote");return e}catch(e){throw u.showErrorToast(`Error fetching quote of the day: ${e}`),e}},async getFilters(e={}){try{const{filter:t,page:s=1,limit:r=12}=e,a=new URLSearchParams;t&&a.append("filter",t),s&&a.append("page",s),r&&a.append("limit",r);const n=`/filters${a.toString()?`?${a.toString()}`:""}`,{data:i}=await J.get(n);return i}catch(t){throw u.showErrorToast(`Error fetching filters: ${t}`),t}},async getExercisesFilteredOrSearched(e={}){try{const{filters:t={},search:s,page:r,limit:a}=e,{bodypart:n,muscles:i,equipment:o}=t,g={...n&&{bodypart:n},...i&&{muscles:i},...o&&{equipment:o},...(n||i||o)&&s&&{keyword:s},...r!==void 0&&{page:r},...a!==void 0&&{limit:a}};return(await L.get("/exercises",{params:g})).data}catch(t){throw u.showErrorToast("Ooops, try again. Something went wrong!"),t}}},c={exerciseModal:document.querySelector("#exercise-modal"),ratingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating")},l={IS_OPEN:"is-open",EXERCISE_MODAL_CARD:".exercise-modal-card",RATING_MODAL_RATING_BLOCK:".rating-modal-rating-block",RATING_MODAL_RATING:".rating-modal-rating",RATING_MODAL_RATING_ICON:".rating-modal-rating-icon",CLOSE_MODAL_BTN:".close-modal-btn",ADD_TO_FAVORITES:"#add-to-favorites",GIVE_RATING:"#give-rating",REMOVE_FROM_FAVORITES:"#remove-from-favorites",RATING_MODAL_FORM:"rating-modal-form",OPEN_EXERCISE_MODAL:".card__start",EXERCISE_ITEM_FOR_DATA_ID:".exercise-item"},m="/your-energy/assets/sprite-eSk4e8_i.svg";function de(e){return`<div class="rating-container">
    <form data-id=${e} class="rating-modal-form">
      <button aria-label="Close" class="close-modal-btn" type="button">
        <svg class="close-modal-icon">
          <use href="${m}#icon-close"></use>
        </svg>
      </button>
      <h2 class="rating-modal-title">Rating</h2>
      <div class="rating-modal-rating-block">
        <p class="rating-modal-rating">0.0</p>
        <input type="radio" id="star-1" name="rating" value="1"/>
        <label for="star-1">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#icon-star"></use>
          </svg>
        </label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label for="star-2">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#icon-star"></use>
          </svg>
        </label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label for="star-3">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#icon-star"></use>
          </svg>
        </label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label for="star-4">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#icon-star"></use>
          </svg>
        </label>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label for="star-5">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#icon-star"></use>
          </svg>
        </label>
      </div>
      <input
        type="email"
        name="email"
        class="rating-modal-email"
        placeholder="Email"
        pattern="\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}"
        title="Enter a valid email (e.g. user@example.com)"
        required
        autocomplete="email"
      />
      <textarea
        name="comment"
        class="rating-modal-comment"
        rows="4"
        placeholder="Your comment"
        required
        minlength="5"
        maxlength="300"
      ></textarea>
      <button aria-label="Submit rating" class="btn primary-btn" type="submit">
        Send
      </button>
    </form>
  </div>`}function O(){try{return JSON.parse(localStorage.getItem("favorites")||"[]")}catch{return[]}}function B(e){localStorage.setItem("favorites",JSON.stringify(e))}function P(e){return O().includes(e)}function ue(e){const t=O();return t.includes(e)?!1:(t.push(e),B(t),!0)}function Q(e){const t=O(),s=t.filter(r=>r!==e);return s.length!==t.length?(B(s),!0):!1}async function G(){const e=document.querySelector(".favorites__list"),t=document.querySelector(".favorites__empty");if(!e||!t)return;const s=t.closest(".favorites__body"),r=O();if(e.innerHTML="",r.length===0){t.classList.remove("is-hidden"),e.classList.add("is-hidden"),s.classList.add("center");return}t.classList.add("is-hidden"),e.classList.remove("is-hidden"),s.classList.remove("center");const a=r.map(d=>b.getExerciseById(d).catch(()=>null)),n=await Promise.all(a),i=[],o=[];if(n.forEach((d,g)=>{d?i.push(d):o.push(r[g])}),o.length>0){const d=r.filter(g=>!o.includes(g));B(d)}if(i.length===0){t.classList.remove("is-hidden"),e.classList.add("is-hidden"),s.classList.add("center");return}i.forEach(d=>{me(d,e)})}function me(e,t){const s=document.createElement("li");s.className="favorites__item",s.innerHTML=`
      <div class="favorites__card card exercise-item" data-id="${e._id}">
        <div class="card__header">
          <div class="card__workout">
            <div class="card__label">WORKOUT</div>
            <button aria-label="Delete" type="button" class="card__delete">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M10.6667 4.00004V3.46671C10.6667 2.71997 10.6667 2.3466 10.5213 2.06139C10.3935 1.8105 10.1895 1.60653 9.93865 1.4787C9.65344 1.33337 9.28007 1.33337 8.53333 1.33337H7.46667C6.71993 1.33337 6.34656 1.33337 6.06135 1.4787C5.81046 1.60653 5.60649 1.8105 5.47866 2.06139C5.33333 2.3466 5.33333 2.71997 5.33333 3.46671V4.00004M6.66667 7.66671V11M9.33333 7.66671V11M2 4.00004H14M12.6667 4.00004V11.4667C12.6667 12.5868 12.6667 13.1469 12.4487 13.5747C12.2569 13.951 11.951 14.257 11.5746 14.4487C11.1468 14.6667 10.5868 14.6667 9.46667 14.6667H6.53333C5.41323 14.6667 4.85318 14.6667 4.42535 14.4487C4.04903 14.257 3.74307 13.951 3.55132 13.5747C3.33333 13.1469 3.33333 12.5868 3.33333 11.4667V4.00004"
                      stroke="#242424" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <button aria-label="Start" type="button" class="card__start">
            Start
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#242424" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </button>
        </div>
        <div class="card__body">
          <div class="card__exercise">
            <svg class="card__exercise-logo">
              <use href="${m}#running-stick-figure-border"></use>
            </svg>
            <p>${e.name}</p>
          </div>
          <ul class="card__list">
            <li class="card__list-item">
              <p>Burned calories:</p>
              <span>${e.burnedCalories} / ${e.time} min</span>
            </li>
            <li class="card__list-item">
              <p>Body part:</p>
              <span>${e.bodyPart}</span>
            </li>
            <li class="card__list-item">
              <p>Target</p>
              <span>${e.target}</span>
            </li>
          </ul>
        </div>
      </div>
    `,t.appendChild(s),s.querySelector(".card__delete").addEventListener("click",async function(){Q(e._id),await G()})}function ge({_id:e,name:t,target:s,bodyPart:r,popularity:a,time:n,burnedCalories:i,rating:o,description:d,gifUrl:g,equipment:E}){const $=Array.from({length:5},(f,x)=>`<svg class="exercise-modal-rating-icon ${x<Math.floor(o)?"rated":""}">
              <use href="${m}#icon-star"></use>
            </svg>`).join(""),C=P(e);return`<div data-id=${e} class="exercise-modal-card">
            <button aria-label="Close modal" class="close-modal-btn">
              <svg class="close-modal-icon">
                <use href="${m}#icon-close"></use>
              </svg>
            </button>
            <div class="exercise-gif-wrapper">
              <img
                class="exercise-gif"
                src=${g}
                alt="alt text from backend here"
              />
            </div>
            <div class="exercise-modal-overview">
              <div>
                <h2 class="exercise-modal-title">${t}</h2>
                <div class="exercise-modal-rating-block">
                  <p class="exercise-modal-rating">${o}</p>
                  ${$}
                </div>
              </div>
              <div class="exercise-modal-info-block">
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Target</p>
                  <p class="exercise-modal-info-descr">${s}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Body Part</p>
                  <p class="exercise-modal-info-descr">${r}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Equipment</p>
                  <p class="exercise-modal-info-descr">${E}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Popular</p>
                  <p class="exercise-modal-info-descr">${a}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Burned Calories</p>
                  <p class="exercise-modal-info-descr">${i}/${n} min</p>
                </div>
              </div>
              <div class="exercise-modal-descr">${d}</div>
              <div class="exercise-modal-buttons-block">
              ${C?`<button aria-label="Remove from favorites" id="remove-from-favorites" class="btn btn-primary">
                      Remove favorite
                      <svg class="exercise-modal-btn-icon">
                        <use href="${m}#trash"></use>
                      </svg>
                    </button>`:`<button aria-label="Add to favorites" id="add-to-favorites" class="btn btn-primary">
                      Add to favorites
                      <svg class="exercise-modal-btn-icon">
                        <use href="${m}#icon-heart"></use>
                      </svg>
                    </button>`}
                <button aria-label="Give a rating" id="give-rating" class="btn btn-secondary">Give a rating</button>
              </div>
            </div>
          </div>
          `}async function pe(e){try{c.exerciseModal.classList.add(l.IS_OPEN);const t=await b.getExerciseById(e),s=ge(t);c.exerciseModal.innerHTML=s}catch(t){u.showErrorToast(t.message)}}function fe(e){const s=P(e)?`<button aria-label="Remove favorite" id="remove-from-favorites" class="btn btn-primary">
         Remove favorite
         <svg class="exercise-modal-btn-icon">
           <use href="${m}#trash"></use>
         </svg>
       </button>`:`<button aria-label="Add to favorites" id="add-to-favorites" class="btn btn-primary">
         Add to favorites
         <svg class="exercise-modal-btn-icon">
           <use href="${m}#icon-heart"></use>
         </svg>
       </button>`,r=document.querySelector(".exercise-modal-buttons-block");r&&(r.innerHTML=`
      ${s}
      <button id="give-rating" class="btn btn-secondary">Give a rating</button>
    `)}const ve=async(e,t)=>{try{const s=P(e);let r=!1;s?(r=Q(e),r&&u.showSuccessToast("Exercise removed from favorites!")):(r=ue(e),r&&u.showSuccessToast("Exercise added to favorites!")),r&&(fe(e),window.location.pathname.includes("favorites.html")&&await G(),t())}catch(s){u.showErrorToast(s.message)}};let y=null;const he=e=>{const t=e.target.closest(l.EXERCISE_MODAL_CARD).dataset.id;ve(t,()=>{})},ye=(e,t)=>{e.forEach((s,r)=>{const a=r<t;s.style.fill=`rgba(var(--rgba-${a?"orange":"light"}), ${a?1:.2})`})},be=()=>{y&&c.ratingBlock&&c.ratingBlock.removeEventListener("change",y),y=({target:e})=>{if(e.name!=="rating")return;const t=parseInt(e.value,10);c.ratingDisplay.textContent=t.toFixed(1);const s=c.ratingBlock.querySelectorAll(l.RATING_MODAL_RATING_ICON);ye(s,t)},c.ratingBlock.addEventListener("change",y)};function A(){c.exerciseModal.classList.remove(l.IS_OPEN),document.removeEventListener("keydown",W),document.removeEventListener("click",te)}function H(){c.ratingModal.classList.remove(l.IS_OPEN),document.removeEventListener("keydown",ee),document.removeEventListener("click",se),y&&c.ratingBlock&&(c.ratingBlock.removeEventListener("change",y),y=null)}function R(){document.addEventListener("keydown",W),document.addEventListener("click",te)}function W(e){e.key==="Escape"&&A()}function ee(e){e.key==="Escape"&&(H(),R(),c.exerciseModal.classList.add(l.IS_OPEN))}function Ee(e){const t=e.target.closest(l.EXERCISE_MODAL_CARD).dataset.id;A(),c.ratingModal.classList.add(l.IS_OPEN),c.ratingModal.innerHTML=de(t),c.ratingBlock=document.querySelector(l.RATING_MODAL_RATING_BLOCK),c.ratingDisplay=document.querySelector(l.RATING_MODAL_RATING),be(),document.addEventListener("keydown",ee),document.addEventListener("click",se)}function te(e){if(e.target.closest(l.CLOSE_MODAL_BTN)){A();return}if(e.target.closest(l.GIVE_RATING)){Ee(e);return}if(e.target.closest(l.ADD_TO_FAVORITES)||e.target.closest(l.REMOVE_FROM_FAVORITES)){he(e);return}e.target===c.exerciseModal&&A()}function se(e){(e.target===c.ratingModal||e.target.closest(l.CLOSE_MODAL_BTN))&&(H(),R(),c.exerciseModal.classList.add(l.IS_OPEN))}function Le(){document.addEventListener("click",e=>{if(e.target.closest(l.OPEN_EXERCISE_MODAL)){const t=e.target.closest(l.EXERCISE_ITEM_FOR_DATA_ID).dataset.id;pe(t),R()}})}const _e=async e=>{const t=new FormData(e),s=e.querySelector('input[name="rating"]:checked'),r=t.get("email"),a=t.get("comment");if(!le(s,r,a))return;const n={rate:Number(s.value),email:r,review:a};try{await b.updateRating(e.dataset.id,n),H(),R(),c.exerciseModal.classList.add(l.IS_OPEN),u.showSuccessToast("Rating submitted successfully!")}catch(i){const o=i.response?.data?.message||"An unknown error occurred";u.showErrorToast(o)}},xe=()=>{document.addEventListener("submit",async e=>{e.preventDefault(),e.target.classList.contains(l.RATING_MODAL_FORM)&&await _e(e.target)})};async function we(e){const t=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(t.status===409)throw new Error("This email is already subscribed.");if(!t.ok)throw new Error("Something went wrong. Try again.");return await t.json()}const Se=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function Ce(e){e.preventDefault();const t=e.currentTarget,r=t.querySelector('input[type="email"]').value.trim();if(!Se.test(r)){w.error({title:"Error",message:"Please enter a valid email.",position:"topRight"});return}we(r).then(()=>{w.success({title:"Success",message:"Subscription successful!",position:"topRight"}),t.reset()}).catch(a=>{w.info({title:"Info",message:a.message,position:"topRight"})})}function Te(){const e=document.querySelector(".js-footer-form");e&&e.addEventListener("submit",Ce)}const re="Muscles",Me="Body parts",Ae="Equipment",Ie=re,Oe=[re,Me,Ae],Re=768,V=()=>window.innerWidth<Re?9:12;let _=Ie,K=V();const D=document.querySelector(".exercises-categories"),F=document.querySelector(".exercises-list"),I=document.querySelector(".exercises-pagination"),$e=e=>{const t=Oe.map(s=>`
      <li class="exercises-category-item ${s===e?"active-category":""}">
        <a class="exercises-category-link">${s}</a>
      </li>
    `).join("");D.innerHTML=t},T=async(e,t)=>{const s=await b.fetchFilters({filter:e,page:t,limit:V()});if(!s.results||s.results.length===0){F.innerHTML=`
      <div class="exercises-empty-message">
        <p>No categories found for "${e}". Please try another filter.</p>
      </div>
    `,I.innerHTML="";return}const r=s.results.map(n=>`
        <div class="filter-item">
          <span class="filter-label">${n.name}</span>
          <span class="filter-category">${n.filter}</span>
          <div class="filter-bg" style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n.imgURL})"></div>
        </div>
      `).join("");F.innerHTML=r;const a=Array.from({length:s.totalPages},(n,i)=>i+1).map(n=>`
        <li class="${t===n?"page-active":""}">
          <a>${n}</a>
        </li>
      `).join("");I.innerHTML=a},qe=()=>{!D||!F||!I||($e(_),T(_,1),I.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName==="A"){const s=e.target.textContent;T(_,+s)}}),D.addEventListener("click",e=>{e.preventDefault(),document.querySelector(".filtered-exercises-cards-wrapper").classList.add("hide");const t=document.querySelector(".breadcrumb-current"),s=document.querySelector(".breadcrumb-divider"),r=e.target;r.nodeName==="A"&&(_=e.target.textContent,document.querySelector(".active-category").classList.remove("active-category"),r.parentElement.classList.add("active-category"),T(_,1),t.textContent="",s.style.display="none",document.querySelector(".exercises-content").classList.remove("hide"))}),window.addEventListener("resize",()=>{const e=V();e!==K&&(K=e,T(_,1))}))};function X({quote:e,author:t}){const s=document.querySelector(".js-quote");s&&(s.innerHTML=`
    <p class="quote-text">"${e}"</p>
    <p class="quote-signature">- ${t}</p>
    `)}const ke=async()=>{const e=JSON.parse(localStorage.getItem("quoteDay")),t=new Date().toISOString().split("T")[0];if(e?.currentDate===t){X(e.data);return}try{const s=await b.quoteOfDay(),r={data:s,currentDate:t};localStorage.setItem("quoteDay",JSON.stringify(r)),X(s)}catch{}};function De(){const e=document.querySelector(".header__burger-btn"),t=document.querySelector(".mobile-menu__sidebar"),s=document.querySelector(".mobile-menu__close-btn"),r=document.querySelector(".mobile-menu__overlay");if(!e)return;const a=()=>{t.classList.add("is-open"),document.body.classList.add("no-scroll"),r.classList.add("is-open"),e.setAttribute("aria-expanded","true")},n=()=>{t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),r.classList.remove("is-open"),e.setAttribute("aria-expanded","false")},i=o=>{o.key==="Escape"&&t.classList.contains("is-open")&&n()};e.addEventListener("click",a),s.addEventListener("click",n),r.addEventListener("click",n),document.addEventListener("keydown",i),t.querySelectorAll("a").forEach(o=>{o.addEventListener("click",()=>{n()})})}const h={runningStickFigure:{svgClass:"exercise-icon"},arrow:{svgClass:"start-exercise-icon",path:`${m}#arrow`,fill:"var(--primary)"},star:{svgClass:"rating-icon",path:`${m}#icon-star`,fill:"var(--gold)"}},ae=e=>{const t=document.querySelector(".filtered-exercises-list");t&&(t.innerHTML="",e.forEach(s=>{const r=document.createElement("li");r.className="filtered-exercise-card exercise-item",r.dataset.id=s._id,r.innerHTML=`
            <div class="exercise-header">
              <span class="badge">Workout</span>
              <p class="rating">${s.rating.toFixed(1)}</p>
            <span class="rating">
  <svg class="${h.star.svgClass}" fill="${h.star.fill}" width="16" height="16">
    <use href="${h.star.path}"></use>
  </svg>
</span>
  <button aria-label="start" class="start-btn card__start">Start
              <span class='start-exercise-icon'>
              <svg class="${h.arrow.svgClass}" fill="${h.arrow.fill}" width="16" height="16">
              <use href="${h.arrow.path}"></use>
              </svg></span>
              </button>
            </div>
            <div class="exercise-content">
            
              <span >
             <svg class="${h.runningStickFigure.svgClass}" width="24" height="24">
              <use href="${m}#running-stick-figure-border"></use>
              </svg>
              </span>
              <h3 class="exercise-title">${s.name}</h3>
            </div>
            <div class="exercise-meta">
              <p >Burned calories: <span class="meta-span">${s.burnedCalories}/${s.time} min</span>
              </p>
              <p>Body part: <span class="meta-span">${s.bodyPart}</span></p>
              <p>Target: <span class="meta-span">${s.target}</span></p>
            </div>
          `,t.appendChild(r)}))},Fe=768,S=()=>window.innerWidth<Fe?8:10;let Y=S();const v={currentFilter:null,currentCategory:null},N=e=>{e&&e.classList.add("hide")},M=e=>{e&&e.classList.remove("hide")},ne=()=>{const e=document.querySelector(".breadcrumb-current"),t=document.querySelector(".breadcrumb-divider");v.currentFilter?(e.textContent=v.currentFilter,e.style.display="inline",t.style.display="inline"):(e.textContent="",e.style.display="none",t.style.display="none")},Ne=(e,t=500)=>{let s;return(...r)=>{clearTimeout(s),s=setTimeout(()=>e(...r),t)}},Z=Ne(async(e,t=1)=>{const s=S(),r=e.trim();if(!r)return;const a=v.currentCategory||"",n=v.currentFilter||"";if(!n&&!r&&!a)return;const i={...a==="Muscles"&&{muscles:n},...a==="Body parts"&&{bodypart:n},...a==="Equipment"&&{equipment:n}},o=i.muscles||i.bodypart||i.equipment,d={filters:{muscles:a==="Muscles"?n:"",bodypart:a==="Body parts"?n:"",equipment:a==="Equipment"?n:""},search:o?r:"",page:t,limit:s},g=await b.getExercisesFilteredOrSearched(d);ae(g.results),ie(g.totalPages,g.page,"Keyword",r)},500),j=(e,t,s,r)=>{const a={filters:{muscles:e==="Muscles"?t:"",bodypart:e==="Body parts"?t:"",equipment:e==="Equipment"?t:""},page:s,limit:r};return async()=>{try{const n=await b.getExercisesFilteredOrSearched(a);if(!n||!n.results||n.results.length===0){const o=document.querySelector(".filtered-exercises-cards-wrapper");o&&(o.innerHTML='<div class="no-exercises-message"><p>No exercises found for the selected filters.</p></div>',M(o));return}N(document.querySelector(".exercises-content")),M(document.querySelector(".filtered-exercises-cards-wrapper")),M(document.querySelector(".form-search")),v.currentFilter=t,v.currentCategory=e;const i=n.results;ae(i),ie(n.totalPages,n.page,e,t)}catch{}}};async function ie(e,t,s,r){const a=document.querySelector(".filtered-pagination");if(!a)return;if(a.innerHTML="",e<=1){a.style.display="none";return}a.style.display="flex";const n=(p,$=null,C=!1)=>{const f=document.createElement("button");return f.className=`page-item ${p===t?"active":""}`,f.textContent=$||p,f.disabled=C,f.style.cursor=C?"not-allowed":"pointer",f.setAttribute("data-page",p),f.setAttribute("data-category",s),f.setAttribute("data-filter-name",r),f.addEventListener("click",async x=>{const U=Number(x.target.getAttribute("data-page")),z=x.target.getAttribute("data-category"),oe=x.target.getAttribute("data-filter-name");await j(z,oe,U,S())()}),f},i=()=>{const p=document.createElement("span");return p.textContent="...",p.className="pagination-ellipsis",p};a.appendChild(n(1,"<<",t===1)),a.appendChild(n(t-1,"<",t===1));const d=Math.floor(3/2),g=Math.max(1,t-d),E=Math.min(e,t+d);g>1&&(a.appendChild(n(1)),g>2&&a.appendChild(i()));for(let p=g;p<=E;p++)a.appendChild(n(p));E<e&&(E<e-1&&a.appendChild(i()),a.appendChild(n(e))),a.appendChild(n(t+1,">",t===e)),a.appendChild(n(e,">>",t===e))}document.querySelector(".exercises-list")?.addEventListener("click",async e=>{const t=e.target.closest(".filter-item");if(!t)return;const s=t.querySelector(".filter-label")?.textContent,r=document.querySelector(".exercises-category-item.active-category")?.textContent,a=1;s&&r&&(v.currentFilter=s,await j(r,s,a,S())(),ne())});window.addEventListener("resize",()=>{const e=S();if(e!==Y){Y=e;const{currentFilter:t,currentCategory:s}=v;t&&s&&j(s,t,1,e)()}});document.querySelector(".breadcrumb-home")?.addEventListener("click",async()=>{N(document.querySelector(".filtered-exercises-cards-wrapper")),N(document.querySelector(".form-search")),M(document.querySelector(".exercises-content")),v.currentFilter=null,ne()});const q=document.querySelector(".search-input"),k=document.getElementById("search-form");q&&k&&(q.addEventListener("input",e=>{const t=e.target.value.trim();Z(t)}),k.addEventListener("submit",e=>{e.preventDefault();const t=q.value.trim();t&&(Z(t),k.reset())}));const Be=()=>{const e=document.querySelectorAll(".header__menu-item");let t=Number(sessionStorage.getItem("activeNavItemIndex"));isNaN(t)&&(t=0),e[t]&&e[t].classList.add("header__menu-item--active"),e.forEach((s,r)=>{s.querySelector(".header__menu-link")?.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("header__menu-item--active")),s.classList.add("header__menu-item--active"),sessionStorage.setItem("activeNavItemIndex",r)})})};document.addEventListener("DOMContentLoaded",()=>{Le(),xe(),Te(),ke(),qe(),De(),Be();const e=document.querySelector(".js-current-year");e&&(e.textContent=new Date().getFullYear()),window.location.pathname.includes("favorites.html")&&G()});
//# sourceMappingURL=main-7rFOHJh_.js.map
