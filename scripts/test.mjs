function calculateCheckout(data){ const discount=data.coupon==='VAULT10'?Math.round(data.subtotal*.1):0; const tax=Math.round((data.subtotal-discount)*.0825); const shipping=data.subtotal>10000?0:799; return {subtotal:data.subtotal,discount,tax,shipping,total:data.subtotal-discount+tax+shipping}; }
const total = calculateCheckout({ subtotal: 20000, coupon: 'VAULT10' });
if(total.discount !== 2000 || total.shipping !== 0 || total.total !== 19485) throw new Error('Checkout calculation regression');
console.log('Unit tests passed.');
