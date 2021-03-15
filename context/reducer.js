import moment from "moment";

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
    // Trackdays
    case "SET_TRACKDAYS":
      return { ...state, trackdays: action.list };

    case "FILTER_TRACKDAYS":
      return {
        ...state,
        filteredTrackdays: state.trackdays.filter((trackday) => {
          var actionDate = new Date(action.date);
          var trackdayDate = new Date(trackday.date);

          if (action.name !== "" && action.date !== "") {
            console.log(typeof trackday.date);
            return trackday.circuit.name === action.name && trackdayDate >= actionDate;
          } else if (action.date === "" && action.name !== "") {
            return trackday.circuit.name === action.name;
          } else if (action.date !== "" && action.name === "") {
            return trackdayDate >= actionDate;
          }
        }),
      };

    // Selected Trackdays
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

    // Drivers
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

    // Personal information
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

    // Booking
    case "SET_BOOKING":
      return {
        ...state,
        booking: {
          ...state.personalInformation,
          selectedTrackdays: [...state.selectedTrackdays],
          drivers: [...state.drivers],
        },
      };

    // Circuits
    case "SET_CIRCUITS":
      return {
        ...state,
        circuits: action.circuits,
      };

    // Others
    case "SET_ACTIVE_STEP":
      return {
        ...state,
        activeStep: action.activeStep,
      };

    case "RESET_FORM":
      return {
        ...state,
        selectedTrackdays: [],
        drivers: [],
        booking: {},
      };

    default:
      return { ...state };
  }
};

export default reducer;
