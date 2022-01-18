


const panels = document.querySelectorAll('.panel')

panels.forEach((panel,i) => {
    panel.addEventListener('click',()=>{
        removeActiveClass()
        panel.classList.add('active')
    })
});

const removeActiveClass = ()=>{
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}