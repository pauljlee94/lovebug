<template>
  <div>
    <h1>Manage Schedule</h1>
    <datepicker
      class="admin-calendar"
      v-model="appointmentDate"
      :inline="true"
      :highlighted="highlighted"
    />
    <h1>Upcoming Events</h1>
    <el-timeline style="padding-left: 0;">
      <el-timeline-item
        v-for="(appointment, index) in appointments"
        :key="index"
        :timestamp="appointment.time"
        placement="top"
      >
        <el-card class="schedule-card">
          <div class="details">
            <h2>{{ appointment.name }}</h2>
            <p>{{ appointment.email }}</p>
          </div>
          <div class="nav">
            <el-button
              size="mini"
              @click=";(dialogVisible = true), getData(appointment.id)"
              type="primary"
            >
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button size="mini" @click="deleteEvent(appointment.id)" type="danger">
              <i class="el-icon-delete"></i>
            </el-button>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-dialog
      id="event-dialog"
      title="Event Details"
      :visible.sync="dialogVisible"
      @close="resetDialog"
    >
      <div class="input_container">
        <el-input v-model="dialogData.name" />
        <el-input v-model="dialogData.email" />
        <datepicker class="dialogDatpicker" v-model="dialogData.time" />
      </div>
      <div class="textarea_container">
        <el-input class="textarea" v-model="dialogData.notes" placeholder="notes" type="textarea" />
      </div>
      <el-button type="primary" @click="updateData(dialogData.id)">Update</el-button>
    </el-dialog>
  </div>
</template>

<script>
import { db } from "../../main";
import Datepicker from "vuejs-datepicker";

export default {
  name: "AdminSchedule",
  data() {
    return {
      dialogVisible: false,
      appointmentDate: new Date(),
      highlighted: {
        dates: []
      },
      appointments: [],
      dialogData: {
        id: "",
        name: "",
        email: "",
        time: 0,
        notes: ""
      }
    };
  },
  components: { Datepicker },
  methods: {
    updateData(id) {
      const ref = db.collection("appointments").doc(id);
      ref.set({
        name: this.dialogData.name,
        email: this.dialogData.email,
        time: new Date(this.dialogData.time).getTime(),
        notes: this.dialogData.notes
      });
      this.dialogVisible = false;
      this.dialogData = {
        id: "",
        name: "",
        email: "",
        time: 0,
        notes: ""
      };
      //reset appointments and highlighted data
      //NEED TO REFACTOR
      this.appointments = [];
      this.highlighted.dates = [];
      const newref = db.collection("appointments").orderBy("time");
      newref.get().then(appointments => {
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
    },
    resetDialog() {
      this.dialogData = { name: "", email: "" };
    },
    getData(id) {
      this.dialogData.id = id;
      const ref = db.collection("appointments").doc(id);
      ref.get().then(appointment => {
        const data = appointment.data();
        this.dialogData.name = data.name;
        this.dialogData.email = data.email;
        this.dialogData.time = data.time;
        this.dialogData.notes = data.notes;
      });
    },
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
#event-dialog {
  height: 100vh;
  overflow-y: hidden;
}
#event-dialog .el-dialog {
  margin-top: 0 !important;
  width: 100vw;
  height: 100vh;
}
#event-dialog .el-dialog__header {
  height: 10%;
}
#event-dialog .el-dialog__body {
  padding-top: 10px;
  height: 90%;
}
#event-dialog .el-input {
  margin-bottom: 20px;
}
#event-dialog .el-textarea {
  margin-bottom: 20px;
}
#event-dialog .el-button {
  width: 100%;
}
.vdp-datepicker {
  border-radius: 4px;
  border: 1px solid #dcdfe6;

  margin-bottom: 20px;
}
.vdp-datepicker input {
  color: #606266;
  width: 100%;
  padding: 50px;
  border: none;
  font-size: 14px;
  padding: 0 15px;
  height: 40px;
  line-height: 40px;
}
.input_container {
  height: 190px;
}
.textarea_container {
  height: 50%;
}
.textarea {
  height: 100%;
}
.textarea textarea {
  height: 90%;
}
</style>
