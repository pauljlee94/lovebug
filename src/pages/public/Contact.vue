<template>
  <layout-default>
    <div id="contact">
      <h1>Contact</h1>
      <ContactForm />
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../layouts/LayoutDefault.vue";
import ContactForm from "../../components/forms/ContactForm.vue";

export default {
  name: "Contact",
  props: {
    //data here
  },
  components: { LayoutDefault, ContactForm }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
