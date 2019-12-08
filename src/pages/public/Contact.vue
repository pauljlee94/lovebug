<template>
  <div id="contactForm_container">
    <h1>Contact</h1>
    <div v-if="!scheduled">
      <form id="contactForm" @submit="updateData">
        <label for="name">Name</label>
        <el-input v-model="name" id="name" type="text" required />
        <label for="email">Email</label>
        <el-input v-model="email" id="email" type="text" required />
        <label for="datpicker">Dates</label>
        <datepicker v-model="appointmentDate" id="datepicker" :disabled-dates="disabledDates" />
        <label for="name">Notes</label>
        <el-input v-model="notes" id="notes" type="textarea" required />
        <button>Book Me!</button>
      </form>
    </div>
    <div v-else>
      <h1>Booked!</h1>
    </div>
  </div>
</template>

<script>
import { db } from "../../main";
import Datepicker from "vuejs-datepicker";

export default {
  name: "Contact",
  props: {
    //data here
  },
  data() {
    return {
      name: "",
      email: "",
      notes: "",
      scheduled: false,
      appointmentDate: new Date(),
      disabledDates: {
        to: new Date(Date.now() - 86400000),
        dates: []
      }
    };
  },
  created() {
    const appointmentsRef = db.collection("appointments");
    appointmentsRef.get().then(appointments => {
      appointments.forEach(appointment => {
        const time = new Date(appointment.data().time);
        this.disabledDates.dates.push(time);
      });
    });
  },
  methods: {
    updateData() {
      this.scheduled = true;
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
          return error;
        });
    }
  },
  components: {
    Datepicker
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#contactForm_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#contactForm {
  width: 500px;
}
</style>