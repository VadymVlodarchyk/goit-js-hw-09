import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".feedback-form");e.addEventListener("input",function(){const a={email:e.email.value,message:e.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(a))});const t=localStorage.getItem("feedback-form-state");if(t){const a=JSON.parse(t);e.email.value=a.email,e.message.value=a.message}e.addEventListener("submit",function(a){a.preventDefault(),console.log({email:e.email.value,message:e.message.value}),localStorage.removeItem("feedback-form-state"),e.email.value="",e.message.value=""})});
//# sourceMappingURL=commonHelpers2.js.map