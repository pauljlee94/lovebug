<template>
  <div id="contactForm_container">
    <h1>Contact</h1>
    <div v-if="!scheduled">
      <form id="contactForm" @submit="updateData">
        <el-input placeholder="name*" v-model="name" id="name" type="text" required />
        <el-input placeholder="email*" v-model="email" id="email" type="text" required />
        <datepicker
          placeholder="What date's were you considering?"
          id="datepicker"
          :disabled-dates="disabledDates"
        />
        <el-input
          placeholder="what locations are you considering?*"
          v-model="location"
          id="notes"
          type="textarea"
          required
        />
        <el-input
          placeholder="tell me a little about yourself!*"
          v-model="notes"
          id="notes"
          type="textarea"
          required
        />
        <el-button type="primary" native-type="submit">Book Me!</el-button>
      </form>
    </div>
    <div v-else>
      <h2>Booked! I'll contact you via email soon!</h2>
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
      location: "",
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
          location: this.location,
          notes: this.notes
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
#contactForm_container h1 {
  font-family: "Solway", serif;
  margin: 0 auto 30px auto;
}
@media screen and (max-width: 1000px) {
  #contactForm {
    width: 98%;
    margin: auto 0 auto 10px;
  }
  #contactForm .el-input {
    margin-bottom: 30px;
  }
  #contactForm .vdp-datepicker {
    margin-bottom: 30px;
  }
  #contactForm textarea {
    margin-bottom: 30px;
    height: 100px;
  }
  #contactForm button {
    width: 98%;
    margin-bottom: 30px;
  }
}
</style>