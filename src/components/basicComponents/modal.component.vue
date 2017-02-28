<template>
  <div>
    <md-dialog ref="infoModal">
      <md-dialog-title>{{type}} Info</md-dialog-title>

      <md-dialog-content>
        <div>{{type}} name is: {{currentObject.name}}</div>
        <div>{{type}} id is: {{currentObject.id}}</div>
        <div>{{type}} description: {{currentObject.description}}</div>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('infoModal')">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import { eventHub } from '../../main'

export default {
  name: 'modal',
  data () {
    return {
    }
  },
  props: {
      type: String,
      currentObject: Object
  },
  components: {
    eventHub
  },
  methods: {
    openDialog(obj) {
      this.currentObject = obj;
      this.$refs['infoModal'].open();
    },
    closeDialog(ref) {
      this.$refs['infoModal'].close();
    },
    onOpen() {
      console.log('Opened');
    },
    onClose(type) {
      console.log('Closed', type);
    }
  },
  created: function() {
    // We listen for the event on the eventHub
    this.eventHub.$on('clicked', function(data){this.openDialog(obj)});
  }
};
</script>

