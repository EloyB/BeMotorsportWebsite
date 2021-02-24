export const initialInformation = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  number: "",
  appartment: "",
  zip: "",
  country: "",
};

export const initialState = {
  trackdays: [],
  filteredTrackdays: [],
  selectedTrackdays: [],
  drivers: [],
  circuits: [],
  booking: {},
  personalInformation: { ...initialInformation },
  activeStep: 0,
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
      return { ...state, selectedTrackdays: selectedTrackdays };

    case "UPDATE_SELECTED_TRACKDAY":
      const trackdayIndex = state.selectedTrackdays.findIndex((x) => x.id === action.trackday.id);
      state.selectedTrackdays[trackdayIndex] = { ...action.trackday };
      return { ...state };

    case "DELETE_SELECTED_TRACKDAY":
      const selectedTrackdayIndex = state.selectedTrackdays.findIndex(
        (x) => x.id === action.trackday.id
      );
      const updatedSelectedTrackdays = [...state.selectedTrackdays];
      updatedSelectedTrackdays.splice(selectedTrackdayIndex, 1);
      return {
        ...state,
        selectedTrackdays: updatedSelectedTrackdays,
      };

    case "ADD_DRIVER":
      return {
        ...state,
        drivers: [...state.drivers, { ...action.driver }],
      };

    case "DELETE_DRIVER":
      const index = state.drivers.findIndex((x) => x.id === action.driver.id);
      const updatedDrivers = [...state.drivers];
      updatedDrivers.splice(index, 1);
      return { ...state, drivers: updatedDrivers };

    case "UPDATE_PERSONAL_INFORMATION":
      return {
        ...state,
        personalInformation: { ...state.personalInformation, [action.prop]: action.value },
      };

    case "RESET_PERSONAL_INFORMATION":
      return {
        ...state,
        planningInformation: { ...initialInformation },
      };

    case "SET_ACTIVE_STEP":
      return {
        ...state,
        activeStep: action.activeStep,
      };

    default:
      return { ...state };
  }
};

export default reducer;
