const labels=document.querySelectorAll('.form-control label')
labels.formEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx)=> '<span style="transition-delay:${idx *50}ms">${letter}</span>')
    .join('')
})