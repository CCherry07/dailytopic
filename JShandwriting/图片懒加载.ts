function lazyLoad(this: HTMLImageElement) {
  if (this.src) return
  let seeHeight = document.documentElement.clientHeight
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (this.offsetTop < seeHeight + scrollTop) {
    this.src = this.dataset.src ?? 'default.jpg'
  }
}

function lazyLoadAll(imgs: NodeListOf<HTMLImageElement>) {
  imgs.forEach(img => {
    lazyLoad.call(img)
  })
}

function throttle(fn: Function, delay: number) {
  let timer: number | null = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}

function debounce(fn: Function, delay: number) {
  let timer: number | null = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}


const imgs = document.querySelectorAll('img')
const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement
      img.src = img.dataset.src ?? 'default.jpg'
      observer.unobserve(img)
    }
  })
})

imgs.forEach(img => {
  io.observe(img)
})

window.addEventListener('scroll', throttle(() => {
  lazyLoadAll(imgs)
}, 1000))



