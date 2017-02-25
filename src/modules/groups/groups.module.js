export const ADD_GROUP = 'cart/ADD_GROUP';
export const ADD_GROUP_SUCCESS = 'cart/ADD_GROUP_SUCCESS';
export const ADD_GROUP_ERROR = 'cart/ADD_GROUP_ERROR';

export const REMOVE_GROUP = 'cart/REMOVE_GROUP';
export const REMOVE_GROUP_SUCCESS = 'cart/REMOVE_GROUP_SUCCESS';
export const REMOVE_GROUP_ERROR = 'cart/REMOVE_GROUP_ERROR';

export const GET_GROUPS = 'store/GET_GROUPS';
export const GET_GROUPS_SUCCESS = 'store/GET_GROUPS_SUCCESS';
export const GET_GROUPS_ERROR = 'store/GET_GROUPS_ERROR';

import groupService from '../../services/group.service';

const state = {
  groups  : [],
  loading: false,
  error  : null
}

const mutations = {
  [GET_GROUPS]( state ) {
    state.loading = true;
  },
  [GET_GROUPS_SUCCESS]( state, groups ) {
    state.groups = groups;
    state.loading = false;
  },
  [GET_GROUPS_ERROR]( state, error ) {
    state.error = error;
    state.loading = false;
  },
  [ADD_GROUP]( state ) {
    state.loading = true;
  },
  [ADD_GROUP_SUCCESS]( state, group ) {
    state.groups.push(group);
    state.loading = false;
  },
  [ADD_GROUP_ERROR]( state, error ) {
    state.error = error;
    state.loading = false;
  },
  [REMOVE_GROUP]( state ) {
    state.loading = true;
  },
  [REMOVE_GROUP_SUCCESS]( state, group ) {
    state.items.splice(state.groups.indexOf(group), 1);
    state.loading = false;
  },
  [REMOVE_GROUP_ERROR]( state, error ) {
    state.error = error;
    state.loading = false;
  }
}

const actions = {
  getGroups ( { commit } ) {
    commit(GET_GROUPS);
    groupService.getGroups()
        .then(groups => { commit(GET_GROUPS_SUCCESS, groups); })
        .catch(error => { commit(GET_GROUPS_ERROR, error); });
  },
  addGroup ({ commit }) {
    commit(ADD_GROUP);
    return groupService.addGroup(group)
        .then(_ => { commit(ADD_GROUP_SUCCESS); })
        .catch(error => { commit(ADD_GROUP_ERROR, error); });  
  },
  removeGroup ({ commit }) {
    commit(REMOVE_GROUP);
    return groupService.removeGroup(group)
        .then(_ => { commit(REMOVE_GROUP_SUCCESS, group); })
        .catch(error => { commit(REMOVE_GROUP_ERROR, error); });  
  }
};

const getters = {
  groups       : state => state.groups,
  loading      : state => state.loading,
  error        : state => state.error
}

export default {
  state,
  getters,
  actions,
  mutations
}