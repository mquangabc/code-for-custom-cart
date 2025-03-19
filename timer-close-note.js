const timer = setInterval(()=>{
    const noteOpus = document.querySelector('.cd-special-instructions-header');
    if(noteOpus){
    clearInterval(timer);
        noteOpus.click();
    }
}, 500)
