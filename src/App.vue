<template>

<div id="nav">
  <router-link :to="{name:'HomeComponent'}">Home</router-link>
  &nbsp;&nbsp;
  <router-link :to="{name:'UsersComponent'}">Users</router-link>
  &nbsp;&nbsp;
  <router-link to="/settings">Settings</router-link>


  <router-view/>


  <br>
  <br>
  <br>
  <br>

  <TaskList @toggle="toggleReminder" :tasks="tasks" />
  
  <i :class="[show_add_task?'red bi-x':'green ']" @click="toggleAddTask" class="bi bi-file-earmark-plus"></i>

<div v-if="show_add_task">
    <AddTask @add-task="AddTask" />
</div>


  <FooterVue/>
</div>
</template>

<script>
import  TaskList  from "./components/TaskList.vue";
import AddTask from "./components/AddTask.vue";
import FooterVue from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    TaskList,
    AddTask,
    FooterVue
},
  data(){
    return {
      tasks: [],

      show_add_task: false,
    }
  },
  
    async created(){
      this.tasks = await this.fetchTasks()
    }
    ,
  methods:{
    async fetchTasks(){
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      console.log(data)
      return data
    },
    async fetchTask(id){
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      console.log(data)
      return data
    },
    
    async toggleReminder(id){
      // get object from api
      const tasktotoggle = await this.fetchTask(id)
      // update it and send put request
      const updatetask = {...tasktotoggle, reminder: !tasktotoggle.reminder}
      const res =  await fetch(`http://localhost:5000/tasks/${id}`,
      { method: 'PUT',
         headers: {
           'Content-type':'application/json',
         },
         body: JSON.stringify(updatetask)}
      )

      const data = await res.json()

      // toggle function
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)
    }

    ,
    async AddTask(obj){
       const res = await fetch('http://localhost:5000/tasks',{
         method: 'POST',
         headers: {
           'Content-type':'application/json',
         },
         body: JSON.stringify(obj)
       })
        const data = await res.json()
        console.log(data)
      // console.log(obj)
      // add to array
      this.tasks = [...this.tasks, obj]
      
    },

    // toggle form
    toggleAddTask(){
      this.show_add_task = !this.show_add_task
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bi-file-earmark-plus{
  font-size: 28px;
}

.green {
  color: green;
}

.red {
  color: crimson;
}
#nav a {
  text-decoration: none;
}

#nav a.router-link-active{
  color: white;
  background: rgb(20, 83, 220);
  padding: 5px 15px;
  border-radius: 10px;
}

</style>
