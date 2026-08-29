const VIBE_SEED_PRODUCTS = [
  {id:'focus',name:'VIBE Focus Gummies',short:'Focus Gummies',vibe:'FOCUS',category:'Focus',price:44,rating:'4.8',reviews:724,badge:'Best Seller',image:'assets/focus-product.webp',description:'A clean daily ritual designed for clear, intentional days and a steady sense of flow.',accent:'#173f35'},
  {id:'social',name:'VIBE Social Gummies',short:'Social Gummies',vibe:'SOCIAL',category:'Social',price:44,rating:'4.9',reviews:512,badge:'Best Seller',image:'assets/social-product.webp',description:'A bright, social ritual made for connection, conversation and being fully in the moment.',accent:'#3e2447'},
  {id:'chill',name:'VIBE Chill Gummies',short:'Chill Gummies',vibe:'CHILL',category:'Chill',price:44,rating:'4.7',reviews:412,badge:'Evening Pick',image:'assets/chill-product.webp',description:'A softer evening ritual built around slowing down, resetting and making space for calm.',accent:'#665077'},
  {id:'love',name:'VIBE Love Gummies',short:'Love Gummies',vibe:'LOVE',category:'Love',price:44,rating:'4.8',reviews:398,badge:'Date Night',image:'assets/love-product.webp',description:'A warm, intentional ritual for closeness, presence and feel-good moments together.',accent:'#6b201f'},
  {id:'focus-caps',name:'VIBE Focus Capsules',short:'Focus Capsules',vibe:'FOCUS',category:'Focus',price:44,rating:'4.7',reviews:256,badge:'Daily Ritual',image:'assets/focus-capsules.webp',description:'The Focus ritual in a simple capsule format for routines that need to stay effortless.',accent:'#173f35'},
  {id:'chill-caps',name:'VIBE Chill Capsules',short:'Chill Capsules',vibe:'CHILL',category:'Chill',price:44,rating:'4.6',reviews:189,badge:'New',image:'assets/chill-product.webp',description:'A convenient Chill ritual for quiet evenings and a more intentional wind-down routine.',accent:'#665077'},
  {id:'daily-set',name:'The Daily Vibe Set',short:'Daily Vibe Set',vibe:'BUNDLE',category:'Bundles',price:129,rating:'4.9',reviews:98,badge:'Save 15%',image:'assets/hero-lifestyle.webp',description:'A curated VIBE discovery set made to help customers explore different rituals and moods.',accent:'#173f35'}
];
function getCustomProducts(){try{return JSON.parse(localStorage.getItem('vibe_custom_products')||'[]')}catch(e){return []}}
function products(){return [...getCustomProducts(),...VIBE_SEED_PRODUCTS]}
function findProduct(id){return products().find(p=>p.id===id)||VIBE_SEED_PRODUCTS[0]}
function money(n){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(Number(n)||0)}
