<template>
  <layout-default>
    <div id="home">
      <h1>Home</h1>
      <Scheduler />
    </div>
  </layout-default>
</template>

<script>
//import { db } from "../../main"

import LayoutDefault from "../../layouts/LayoutDefault.vue"
import Scheduler from "../../components/forms/Scheduler.vue"

export default {
  name: "Home",
  props: {
    //data here
  },
  // data() {
  //   return {
  //     name: "",
  //     phone: "",
  //     email: "",
  //     appointmentDate: new Date(),
  //     disabledDates: {
  //       to: new Date(Date.now() - 86400000),
  //       dates: []
  //     }
  //   }
  // },
  // created() {
  //   const appointmentsRef = db.collection("appointments")
  //   appointmentsRef.get().then(appointments => {
  //     appointments.forEach(appointment => {
  //       const time = new Date(appointment.data().time.seconds * 1000)
  //       this.disabledDates.dates.push(time)
  //     })
  //   })
  // },
  // methods: {
  //   updateData() {
  //     db.collection("appointments")
  //       .add({
  //         name: this.name,
  //         phone: this.phone,
  //         email: this.email,
  //         time: this.appointmentDate
  //       })
  //       .then(() => this.$router.replace("/admin/blog"))
  //       .catch(error => {
  //         console.error(`Error adding document: ${error}`)
  //       })
  //   }
  // },
  components: {
    LayoutDefault,
    Scheduler
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
