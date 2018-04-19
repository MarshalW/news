<template>
  <div>
    <h1>新闻</h1>
    <button @click='subscribe'>订阅</button>
    <button @click='unsubscribe'>退订</button>
  </div>
</template>

<script>
export default {
  methods: {
    subscribe: function () {
      navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
        let options = {
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(this.$applicationServerKey)
        }
        serviceWorkerRegistration.pushManager.subscribe(options).then((pushSubscription) => {
          console.log(JSON.stringify(pushSubscription))
          fetch(this.$subscribeUrl, {
            method: 'POST',
            body: JSON.stringify(pushSubscription)
          }).then((response) => {
            alert('订阅成功')
            console.log(response)
          })
        })
      })
    },
    unsubscribe: function () {
      navigator.serviceWorker.ready.then(function (reg) {
        reg.pushManager.getSubscription().then(function (subscription) {
          subscription.unsubscribe().then(function (successful) {
            alert('退订成功')
            console.log('退订成功')
          }).catch(function (e) {
            console.error(e)
          })
        })
      })
    }
  }
}

function urlBase64ToUint8Array (base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
