<template>
  <div class="overlay">
      <div class="container">
          <div class="content">
              <div>
                  <h2>Page Not Available</h2>
              <p>Oops! It seems like the page or website you requested is currently not available. Either a domain name has expired or the website has been disabled. Please contact your hosting providers. Sorry for any hitch in service.</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// @import '../assets/styles/_colors';
.overlay{
    background: #43983498;
    height: 100vh;
    color: #fff;
    .content{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    padding: 10rem 0;
    h2{
        font-weight: bold;
        padding-bottom: 1.4rem;
    }
    p{
        font-size: .8rem;
        line-height: 2;
        opacity: .7;
    }
}
}
</style>