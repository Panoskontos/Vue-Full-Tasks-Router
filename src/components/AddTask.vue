<template>
    <div>
        <!-- Basic Form -->
        <form @submit="onSubmit" action="">
            <label for="">Task Form</label>
            <br>
            <br>
            <input v-model="name" type="text" placeholder="Add task">
            <br>
            <br>
            <label for="">Set Reminder</label>
            <input v-model="reminder" type="checkbox" name="reminder">
            <br>
            <br>
            <input type="submit">
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddTask',
    // return default data
    // that we bind with v-model
    data(){
        return {
            name:'',
            reminder:false,
        }
    },
    methods: {
        onSubmit(e){
            // prevent default submit
            e.preventDefault()
            // validation
            if (!this.name){
                alert("please add a task")
                return
            }

            // constructor
            const newTask = {
                id: Math.floor(Math.random()*10000),
                name: this.name,
                reminder: this.reminder,
            }

            // clear form
            this.name = ''
            this.reminder = false

            // console.log(newTask)
            // emit object
            this.$emit('add-task', newTask)
        }
    }
}
</script>

<style>
form {
    background-color: aliceblue;

}

</style>