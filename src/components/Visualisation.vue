<template>
    <div>
        <p v-for="(val, key) in processedData"
           :key="String(key).trim()">
            {{ key }} : {{ val }}
        </p>
    </div>
</template>

<script>
export default {

    name: "Visualisation",

    props: {
        processedData: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
