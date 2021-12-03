const reducer = (state, action) => {
   switch (action.type) {
      case "SET_DARK_MODE":
         const { isDarkMode } = state;
         return { ...state, isDarkMode: !isDarkMode };
      case "SEARCH":
         const newValue = action.payload;
         return { ...state, searchValue: newValue };
      case "DISPLAY_ITEMS":
         return { ...state, countries: action.payload };
      case "SET_LOADING":
         return { ...state, isLoading: true };
      case "STOP_LOADING":
         return { ...state, isLoading: false };
      case "SINGLE_COUNTRY":
         return { ...state, singleCountry: action.payload };
      default:
         return state;
   }
};

export default reducer;
