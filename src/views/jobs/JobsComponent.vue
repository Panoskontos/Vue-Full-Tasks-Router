<template>
<div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        {{job.id}} - {{job.title}}
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

