<template>
  <div>
    <h1>{{message}}</h1>
    <form id="search" class="searchForm">
      <label>Search</label>
      <input name="query" v-model="searchQuery">
    </form>
    <div class="groupsGrid">
      <grid id="gridComponent" :data="gridData" :columns="gridColumns" :filter-key="searchQuery" :show-data="showGroupData"></grid>
    </div>
    
    <md-dialog ref="groupInfoModal">
      <md-dialog-title>Group Info</md-dialog-title>

      <md-dialog-content>
        <div>Group Name is: {{currentGroup.name}}</div>
        <div>Group Id is: {{currentGroup.id}}</div>
        <div>Group Description: {{currentGroup.description}}</div>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeGroupData('groupInfoModal')">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
import VueMaterial from 'vue-material'
import grid from './basicComponents/grid.component'
import groupService from '../services/group.service'

export default {
  name: 'Groups',
  data () {
    return {
      message: 'Groups',
      searchQuery: '',
      gridColumns: ['id', 'name', 'description'],
      gridData: [],
      currentGroup: {}
    }
  },
  created () {
    groupService.getGroups().then(groups => this.gridData = groups)
    return
  },
  components: {
    grid
  },
  methods: {
    showGroupData: function (group) { 
      this.currentGroup = group     
      this.$refs['groupInfoModal'].open();
    },
    closeGroupData: function() {
      this.$refs['groupInfoModal'].close();
    }
  }
}
</script>

<style lang="scss" scoped>  

    .searchForm{
      margin: 50px;
    }

    .groupsGrid {
      margin-top: 50px;
      display: block;
    }

</style>