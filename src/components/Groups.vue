<template>
  <div>
    <h1>{{message}}</h1>
    <form id="search" class="searchForm">
      <label>Search</label>
      <input name="query" v-model="searchQuery">
    </form>
    <div class="groupsGrid">
      <grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></grid>
    </div>
  </div>
</template>

<script>
import grid from './basicComponents/grid'
import groupService from '../services/group.service'

export default {
  name: 'Groups',
  data () {
    return {
      message: 'Groups',
      searchQuery: '',
      gridColumns: ['id', 'name', 'description'],
      gridData: []
    }
  },
  created () {
    groupService.getGroups().then(groups => this.gridData = groups)
    return
  },
  components: {
    grid
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