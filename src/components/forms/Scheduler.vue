<template>
  <div class="scheduler">
    <label for="name">Name</label>
    <input v-model="name" id="name" type="text" />
    <label for="name">Phone</label>
    <input v-model="phone" id="phone" type="text" />
    <label for="name">Email</label>
    <input v-model="email" id="email" type="text" />
    <datepicker v-model="appointmentDate" :disabled-dates="disabledDates" />
    <button @click="updateData">Book Me!</button>
  </div>
</template>

<script>
import { db } from "../../main"
import Datepicker from "vuejs-datepicker"

export default {
  name: "Scheduler",
  props: {
    //data here
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      appointmentDate: new Date(),
      disabledDates: {
        to: new Date(Date.now() - 86400000),
        dates: []
      }
    }
  },
  created() {
    const appointmentsRef = db.collection("appointments")
    appointmentsRef.get().then(appointments => {
      appointments.forEach(appointment => {
        const time = new Date(appointment.data().time)
        this.disabledDates.dates.push(time)
      })
    })
  },
  methods: {
    updateData() {
      db.collection("appointments")
        .add({
          name: this.name,
          phone: this.phone,
          email: this.email,
          time: new Date(this.appointmentDate).getTime()
        })
        .then(() => console.log("scheduled!" + this.disabledDates.dates))
        .catch(error => {
          console.error(`Error adding document: ${error}`)
        })
    }
  },
  components: {
    Datepicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
