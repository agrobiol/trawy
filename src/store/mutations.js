export const SET_SPECIES = (state, species) => {
  state.species = species
}

export const SET_ACTIVE_COLUMNS = (state, columns) => {
  state.activeColumns = columns
}

export const TOGGLE_COLUMN = (state, column) => {
  let columnActive = state.activeColumns.indexOf(column) > -1
  if (columnActive) state.activeColumns = state.activeColumns.filter(element => element !== column)
  else state.activeColumns.push(column)
}
