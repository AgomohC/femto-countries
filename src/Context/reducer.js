const reducer = (state, action) => {
   switch (action.type) {
      case "SET_DARK_MODE":
         const { isDarkMode } = state;
         return { ...action.state, isDarkMode: !isDarkMode };
      case "SEARCH":
         const newValue = action.payload;
         return { ...action.state, searchValue: newValue };

      default:
         return state;
   }
};

export default reducer;
