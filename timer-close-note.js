const timer = setInterval(()=>{
    const noteOpus = document.querySelector('.cd-special-instructions-header');
    if(noteOpus){
    clearInterval(timer);
        noteOpus.click();
    }
}, 500)

// listener DOM change 
   const observer = new MutationObserver( () => {
        const noteContainer = document.querySelector(".special-instructions-label");
        noteContainer && (console.log("Element found, clicking now"),
        noteContainer.click(),
        observer.disconnect())
    }
    );
    observer.observe(document.body, {
        childList: !0, // !0 abbreviation for true value
        subtree: !0
    })
}
