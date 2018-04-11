self.addEventListener('push', (event) => {
  if (event.data) {
    console.log('This push event has data: ', event.data.text())
    let news = event.data.json()
    const promise = self.registration.showNotification(news.title, {body: '点击查看详细内容', data: {url: news.url}})
    event.waitUntil(promise)
  } else {
    console.log('This push event has no data.')
  }
})

self.addEventListener('notificationclick', (event) => {
  let url = event.notification.data.url
  event.notification.close()

  return clients.openWindow(url)
})
