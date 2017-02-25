<template>
  <div>
    <h1>{{message}}</h1>
    <form id="search" class="searchForm">
      <label>Search</label>
      <input name="query" v-model="searchQuery">
    </form>
    <div class="groupsGrid">
      <grid id="gridComponent" :data="groups" :columns="gridColumns" :filter-key="searchQuery" :show-data="showGroupData"></grid>
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
    <!--<modal :type="'Group'" :currentObject="currentGroup"></modal>-->

  </div>
</template>

<script>
// import { eventHub } from '../main'
import {mapGetters, mapMutations} from 'vuex';
import {GET_GROUPS} from '../modules/groups/groups.module';

import VueMaterial from 'vue-material'
import grid from './basicComponents/grid.component'
import modal from './basicComponents/modal.component'
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
    //groupService.getGroups().then(groups => this.gridData = groups)    
    this.$store.dispatch('getGroups')
  },
  components: {
    grid,
    modal
  },
  computed  : {
    ...mapGetters(['groups'])
  },
  methods: {
    showGroupData: function (group) { 
      this.currentGroup = group;     
      this.$refs['groupInfoModal'].open();
      // eventHub.$emit('clicked', group);
    },
    closeGroupData: function() {
      this.$refs['groupInfoModal'].close();
    },
    ...mapMutations({
      getGroups: GET_GROUPS
    })
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