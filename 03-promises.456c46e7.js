function e(e,t){return new Promise(((n,o)=>{Math.random()>.3?setTimeout((()=>{n({position:e,delay:t})}),t):setTimeout((()=>{o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=parseInt(this.elements.delay.value),o=parseInt(this.elements.step.value),s=parseInt(this.elements.amount.value);for(let t=0;t<s;t++){e(t+1,n+t*o).then((({position:e,delay:t})=>{console.log(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.456c46e7.js.map
