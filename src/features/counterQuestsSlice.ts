import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  quests: [],
};

export const QuestSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {},
});
