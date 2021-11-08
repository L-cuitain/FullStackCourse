<template>
  <div>
      <pre>{{ data }}</pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
    async setup(){
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return{
            data: response.data
        }
    }
}
</script>

<style>

</style>