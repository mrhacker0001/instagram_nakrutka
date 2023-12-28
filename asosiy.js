const products = JSON.parse(localStorage.getItem('key'))||[]
const product = document.querySelector("#products")
products.map((item)=>{
    product.innerHTML +=`
    <div class="card1">
    <span>instagram nomi: ${item.instagramnomingiz}</span>
    <span>instagram paroli:  ${item.instagramparolingiz}</span> 
    <b>miqdor: ${item.miqdor}</b>
    
    
    </div>
    
    
    
    `
})