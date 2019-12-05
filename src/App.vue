<template>
  <div id="app">

    <ActivityIndicator :status="currentActivityStatus" />

    <Visualisation v-if="dataForVisualisation"
                   :processed-data="dataForVisualisation"/>
  </div>
</template>

<script>

// Essentials
import {ActivityStatus} from '@/types/enums'
import API from '@/business-logic/API'
import DataProcessing from "@/business-logic/DataProcessing";

// Vue Components
import ActivityIndicator from "@/components/ActivityIndicator";
import Visualisation from "@/components/Visualisation";

export default {

  name: 'app',

  components: {
    ActivityIndicator,
    Visualisation
  },

  data () {
    return {
      currentActivityStatus: undefined,
      dataForVisualisation: undefined
    }
  },

  methods: {

    async doTheThing () {
      const me = this; // so that the meaning of 'this' is consistent.

      // Start Loading
      me.currentActivityStatus = ActivityStatus.Fetching;

      try {

        const rawData = await API.fetchData();
        me.currentActivityStatus = ActivityStatus.Processing;

        me.dataForVisualisation = await DataProcessing.processData(rawData);

        // We are ready to render the viz!
        me.currentActivityStatus = ActivityStatus.Ready

      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Something went wrong: ", error);
        me.currentActivityStatus = ActivityStatus.Failed
      }
    }

  },

  mounted () {
    this.doTheThing()
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
