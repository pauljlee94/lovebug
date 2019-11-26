<template>
  <div>
    <h1>Admin Schedule</h1>
    <div v-for="(appointment, index) in appointments" :key="index">
      <h2>{{ appointment.name }}</h2>
      <p>{{ appointment.time }}</p>
      <p>{{ appointment.phone }}</p>
      <p>{{ appointment.email }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../../main"

export default {
  name: "AdminSchedule",
  data() {
    return {
      appointments: []
    }
  },

  created() {
    const ref = db.collection("appointments").orderBy("time")
    ref.get().then(appointments => {
      appointments.forEach(appointment => {
        const data = appointment.data()
        this.appointments.push(data)
        console.log(this.appointments)
        this.appointments.forEach(appointment => {
          const dateObj = new Date(appointment.time)
          const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
          const year = dateObj.getFullYear()
          const month = dateObj.getMonth()
          const date = dateObj.getDate()

          appointment.time = monthNames[month] + " " + date + " " + year
        })
      })
    })
  }
}
</script>

<style></style>
