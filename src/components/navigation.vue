<template>
<div class="navi">    
    <nav >
      <ul>
        <li> <router-link to="/">Home</router-link> </li>
        <li> <router-link to="/shanto">Shanto</router-link> </li>
        <li> <router-link to="/about">About</router-link> </li>
      </ul>
    </nav>
</div>
</template>

<script>
export default {
    name: 'navigation',
}
</script>

<style scoped>

.navi{
    height: 60px;
    background-color: crimson;
    top: 0;
    position: sticky;
    z-index: 999;
}
.navi nav{
      height: 100%
}
.navi ul{
    list-style: none;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
}
.navi ul li{
  padding: 5px 15px;
  margin: 5px;
  background-color: #2c3e50;
}

.navi ul li a{
  color: aliceblue;
  text-decoration: none;
  font-size: 19px;
}
</style>