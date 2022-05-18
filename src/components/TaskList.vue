<template>
    <div>
        <div v-for="task in tasks" :key="task.id">
        
        
        <div class="box" @click="$emit('toggle',task.id)">
       
       {{task.id}} - {{task.name}} 
        <br>
        <i v-if="task.reminder" class="bi bi-bag-check"></i>
        <br>
       
       </div>

        <br>

        
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskList',
    props: {
        tasks: Array
    },
}
</script>

<style>
.bi-bag-check {
    color: rgb(0, 255, 0);
}

</style>