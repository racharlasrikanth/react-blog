export const navigateToTop = () => {
    window.scrollTo ({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}

export const addNoScrollToBody = () => {
    document.querySelector('body').classList.add('no-scroll-body');
}
export const removeNoScrollToBody = () => {
    document.querySelector('body').classList.remove('no-scroll-body');
}