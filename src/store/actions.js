export const setSpecies = ({ commit }, species) => {
  commit('SET_SPECIES', species)
}

export const setActiveColumns = ({ commit }, columns) => {
  commit('SET_ACTIVE_COLUMNS', columns)
}

export const toggleColumn = ({ commit }, column) => {
  commit('TOGGLE_COLUMN', column)
}
