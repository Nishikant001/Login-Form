let a=document.getElementById('b')
let b=document.getElementById('c')
let c=document.getElementById('d')
let d=document.getElementById('a')
let e=document.getElementById('l')
let f=document.getElementById('l1')
let g=document.getElementById('l2')

d.addEventListener("submit",(v)=>{
  
    if(a.value=='sahoonishikant008@gmail.com' && b.value=='9658169658'){
        c.classList.remove('xyz')
        e.style.visibility='visible'
        f.style.visibility='hidden'
        g.style.visibility='hidden'
        

    
    }else{
        c.classList.add('xyz')
        v.preventDefault()
        f.style.visibility='visible'
        g.style.visibility='hidden'
    }
})
