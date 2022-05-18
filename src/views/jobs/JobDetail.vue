<template>
    <h1>About this job</h1>
    <p>Job id is {{ $route.params.id }} </p>
</template>


<script>
export default {
    props: {id:String, job: Object},
    
}
</script>
