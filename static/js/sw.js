self.addEventListener('push', (event) => {
  if (event.data) {
    console.log('This push event has data: ', event.data.text())
    const promise = self.registration.showNotification('Hi!', {body: 'How are u~'})
    event.waitUntil(promise)
  } else {
    console.log('This push event has no data.')
  }
})

console.log('hello from sw from ./static')
