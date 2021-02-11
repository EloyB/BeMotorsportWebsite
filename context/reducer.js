export const initialState = {
  trackdays: [],
  filteredTrackdays: [],
  selectedTrackdays: [],
  circuits: [],
  booking: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TRACKDAYS":
      return { ...state, trackdays: action.list };
    case "FILTER_TRACKDAYS":
      return {
        ...state,
        filteredTrackdays: state.trackdays.filter(
          (trackday) => trackday.circuit.name === action.name
        ),
      };
    case "ADD_SELECTED_TRACKDAY":
      const selectedTrackdays = state.selectedTrackdays;
      selectedTrackdays.push(action.trackday);
      console.log(selectedTrackdays);
      return { ...state, selectedTrackdays: selectedTrackdays };
    case "UPDATE_SELECTED_TRACKDAY":
      console.log(action.trackday);
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
