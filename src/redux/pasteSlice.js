import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addTOpastes: (state, action) => {
      const paste = action.payload;
      // add a check=> paste is already exist

      state.pastes.push(paste);

      // Update to localstorage
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      // show toast
      toast.success("Paste added");
    },
    upddateTOpastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=>
        item._id===paste._id);

      if(index>=0){
         state.pastes[index] = paste;
         localStorage.setItem("pastes",JSON.stringify
          (state.pastes));
          toast.success("Paste updated");
      }

    },
    resetTOpastes: (state, action) => {
       state.pastes = [];
       localStorage.removeItem("pastes");
    },
    removeTOpastes: (state, action) => {
      const pasteId = action.payload;
       console.log("remove called");
       
      const index = state.pastes.findIndex((item)=>
      item.id===pasteId);

      if(index>=0){
        state.pastes.splice(index,1);

        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("paste deleted");
      }

    },
  },
});

// Action creators are generated for each case reducer function
export const { addTOpastes, upddateTOpastes, resetTOpastes, removeTOpastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
