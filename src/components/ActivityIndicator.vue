<template>
    <p>{{ status }}</p>
</template>

<script>
import { ActivityStatus } from '../types/enums';

export default {

    name: "ActivityIndicator",

    props: {
        status: {
            type: String,
            default: ActivityStatus.Ready
        }
    }

}
</script>
