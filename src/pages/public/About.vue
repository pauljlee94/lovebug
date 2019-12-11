<template>
  <div id="about">
    <div id="aboutCard">
      <div id="aboutCard_image">
        <img src="../../assets/images/heather.jpg" />
      </div>
      <div id="aboutCard_text">
        <h1>Heather C. Sanders</h1>
        <h2>Photographer serving the Atlanta / North Georgia area</h2>
        <p>Hello there! I’m Heather. I’m a born and raised Georgia girl who has a love for people, a good laugh and all the vegan food my belly can handle. When I’m not doing photography, I’m probably in the kitchen baking a new gluten-free recipe, watching Netflix with my fur baby or adventuring around Atlanta with my husband. Photography has always been a huge passion of mine and I am so happy to be able to share my creativity with you! I’ve never thought of myself as a creative person until I started photographing people. I’ve discovered it brings me tons of joy and leaves me feeling so inspired! Documenting people’s love, milestones and all the special moments in between makes me so happy! So I greatly appreciate you choosing me as your photographer! I can’t wait to meet you!!</p>
        <p>Why choose me as your photographer? Well, I love capturing those real and raw moments. The pure joy that beams of those newly engaged faces. The BIG day that follows that engagement. The laughter and true expressions of your children. The tiny fingers and toes and sweet baby rolls of your newborn. Your high school senior that is about to head off to college. You name it, i’m there for it. I strive to connect with each and every one of my clients on a personal level and not just a business level. Consider me your best friend, your go-to girl. I can’t wait to capture those special moments for you. Let’s have fun and make these memories last forever!</p>
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
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  height: 500px;
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
#aboutCard_text {
  width: 48%;
  height: 100%;
}
#aboutCard_image {
  margin: 0 !important;
  width: 48%;
  height: 100%;
}
#about img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 1000px) {
  #default-main {
    padding-top: 0 !important;
  }
  #aboutCard {
    margin-left: 10px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  #aboutCard_text {
    width: 100%;
  }
  #aboutCard_image {
    width: 100%;
  }
}
</style>
