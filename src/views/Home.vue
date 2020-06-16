<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to Pottery Notebook
          </h1>
          <h2 class="subtitle">
            Check out the featured pieces below.
          </h2>
          <div class="button-block">
            <button class="button is-xl is-dark">Sign Up for More</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    text-align: center;
    background-image: url("https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto:eco,f_auto,fl_progressive:steep,w_1200,h_495/ilb3y7l9aubmdzyqv6ra");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      margin-left: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>
