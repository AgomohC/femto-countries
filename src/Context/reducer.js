const reducer = (state, action) => {
   switch (action.type) {
      case "SET_DARK_MODE":
         const { isDarkMode } = state;
         return { ...action.state, isDarkMode: !isDarkMode };

      default:
         return state;
   }
};

export default reducer;
