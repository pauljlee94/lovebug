<template>
  <div>
    <div v-if="!scheduled">
      <form @submit="updateData">
        <label for="name">Name</label>
        <input v-model="name" id="name" type="text" required />
        <label for="name">Email</label>
        <input v-model="email" id="email" type="text" required />
        <datepicker v-model="appointmentDate" :disabled-dates="disabledDates" />
        <button>Book Me!</button>
      </form>
    </div>
    <div v-else>
      <h1>Booked!</h1>
    </div>
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
      email: "",
      scheduled: false,
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
      this.scheduled = true
      db.collection("appointments")
        .add({
          name: this.name,
          email: this.email,
          time: new Date(this.appointmentDate).getTime(),
          notes: ""
        })
        .then(() => {
          //console.log("scheduled!" + this.disabledDates.dates);
        })
        .catch(error => {
          //console.error(`Error adding document: ${error}`);
          return error
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
