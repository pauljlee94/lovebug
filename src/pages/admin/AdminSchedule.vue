<template>
  <div>
    <h1>Admin Schedule</h1>
    <datepicker
      class="admin-calendar"
      v-model="appointmentDate"
      :inline="true"
      :highlighted="highlighted"
    />
    <h1>Scheduled Events</h1>
    <div class="schedule-card" v-for="(appointment, index) in appointments" :key="index">
      <el-card>
        <div
          slot="header"
          class="clearfix"
          style="display:flex; justify-content: space-between; align-items: center;"
        >
          <h2>{{ appointment.name }}</h2>
          <el-button size="small" @click="deleteEvent(appointment.id)" type="danger">DELETE</el-button>
        </div>
        <p>{{ appointment.time }}</p>
        <p>{{ appointment.email }}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
import { db } from "../../main";
import Datepicker from "vuejs-datepicker";

export default {
  name: "AdminSchedule",
  data() {
    return {
      appointmentDate: new Date(),
      highlighted: {
        dates: []
      },
      appointments: []
    };
  },
  components: { Datepicker },
  methods: {
    deleteEvent(id) {
      const index = this.appointments
        .map(appointment => appointment.id)
        .indexOf(id);
      this.appointments.splice(index, 1);
      db.collection("appointments")
        .doc(id)
        .delete()
        .then(() => {
          //console.log(id, " successfully delted");
        })
        .catch(error => {
          //console.error("Error removing document:", error);
          return error;
        });
    }
  },
  created() {
    const ref = db.collection("appointments").orderBy("time");
    ref.get().then(appointments => {
      appointments.forEach(appointment => {
        const data = appointment.data();
        data.id = appointment.id;
        this.appointments.push(data);
        this.appointments.forEach(appointment => {
          const dateObj = new Date(appointment.time);
          this.highlighted.dates.push(dateObj);
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
          ];
          const year = dateObj.getFullYear();
          const month = dateObj.getMonth();
          const date = dateObj.getDate();

          appointment.time = monthNames[month] + " " + date + " " + year;
        });
      });
    });
  }
};
</script>

<style>
</style>
