<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { CometChat } from '@cometchat-pro/chat';
export default {
  created () {
    this.initliazeApp();
  },
  methods: {
    initliazeApp () {
      const { VUE_APP_COMMETCHAT_APP_ID } = process.env;
      console.log(VUE_APP_COMMETCHAT_APP_ID)
      CometChat.init(VUE_APP_COMMETCHAT_APP_ID).then(
        () => {
          console.log('Initialize completed successfully')
        },
        err => {
          console.error(err)
        }
      )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
