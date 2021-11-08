<template>
    <div ref="divRef">
        Hello Ref
    </div>
</template>

<script>
import { ref , onMounted } from "vue";

export default {
    setup(){
        const divRef = ref(null);
        onMounted(() => {
            console.log(divRef.value);
        })
        return{
            divRef
        }
    }
}
</script>

<style>

</style>