<template>
<div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
    <router-link :to="{name: 'JobDetail', params: {id:job.id}}">
        {{job.id}} - {{job.title}}
    </router-link>
        
        <br>
        <br>
        <br>
    </div>
</div>    
</template>


<script>
export default {
    name:'JobsComponent',
    data(){
        return {
            jobs: [{
                id:1,
                title:'Waiter',
                desc:'asdasdasdasdsdfessfasdf'
            },
            {
                id:2,
                title:'Doctor',
                desc:'asdasdasdasdsdfessfasdf'

}
            ]
        }
    }
}
</script>

