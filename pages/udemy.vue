<template lang="pug">
</template>

<script>
  export default {
    head () {
      return {
        title: 'Web Geliştiricisi Olmanın Temelleri',
        meta: [
          { name: 'description', hid: 'description', content: 'HTML, CSS ve Flexible Grid System ile kendi web sayfalarınızı tüm mobil cihazlara uygun şekilde kodlamayı öğrenin!' },
          // Open Grapg
          { name: 'og:title', content: 'Web Geliştiricisi Olmanın Temelleri' },
          { name: 'og:description', content: 'HTML, CSS ve Flexible Grid System ile kendi web sayfalarınızı tüm mobil cihazlara uygun şekilde kodlamayı öğrenin!' },
          { name: 'og:type', content: 'website' },
          { name: 'og:url', content: `https://dnomak.com/udemy` },
          { name: 'og:image', content: `https://dnomak.com/img/web-gelistiricisi-olmanin-temelleri.jpg` },
          // Twitter Card
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@dnomak' },
          { name: 'twitter:title', content: 'Web Geliştiricisi Olmanın Temelleri' },
          { name: 'twitter:description', content: 'HTML, CSS ve Flexible Grid System ile kendi web sayfalarınızı tüm mobil cihazlara uygun şekilde kodlamayı öğrenin!' },
          { name: 'twitter:image', content: `https://dnomak.com/img/web-gelistiricisi-olmanin-temelleri.jpg` },
          { name: 'twitter:image:alt', content: 'Web Geliştiricisi Olmanın Temelleri' }
        ]
      }
    },
    mounted () {
      window.location.href = 'https://www.udemy.com/web-gelistiricisi-olmann-temelleri/?couponCode=DFNNV5'
    }
  }
</script>
