<template>
  <div id="unknownPage">
    <h1>404</h1>
    <p>This page doesn't exist!</p>
    <a href="javascript:history.go(-1)">back</a>
  </div>
</template>

<script>
export default {
  name: "404"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#unknownPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
#unknownPage h1 {
  font-weight: 400;
  font-size: 60px;
  margin: 0;
}
</style>
