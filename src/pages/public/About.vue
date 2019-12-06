<template>
  <div id="about">
    <div id="aboutCard">
      <img src="../../assets/images/heather.jpg" />
      <div id="aboutCard_text">
        <h1>Heather C. Sanders</h1>
        <h2>Photographer serving the Atlanta / North Georgia area</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget. Pretium viverra suspendisse potenti nullam ac tortor. Sit amet purus gravida quis blandit. Viverra maecenas accumsan lacus vel. Semper auctor neque vitae tempus quam. Facilisis volutpat est velit egestas dui id ornare. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Tempor commodo ullamcorper a lacus vestibulum. Vitae ultricies leo integer malesuada nunc. Ac tincidunt vitae semper quis lectus nulla at volutpat. Mattis aliquam faucibus purus in massa tempor nec.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#about {
  display: flex;
  justify-content: center;
  width: 100%;
}
#aboutCard {
  display: flex;
  width: 700px;
}
#aboutCard_text {
  margin-left: 30px;
}

#aboutCard h1 {
  font-size: 20px;
}
#aboutCard h2 {
  font-size: 15px;
}
#aboutCard p {
  font-size: 13px;
}
#aboutCard h1,
#aboutCard h2,
#aboutCard p {
  font-family: "Solway", serif;
}
#about img {
  width: 48%;
}
</style>
