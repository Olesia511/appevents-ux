import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { eventsReducer } from "./events/slice";
import { registerEventReducer } from "./registerEvent/slice";
import { dateReducer } from "./dateBirth/slice";
import { participantsReducer } from "./participants/slice";

const eventsPersistConfig = {
  key: "events",
  storage,
};

const registerIdPersistConfig = {
  key: "register",
  storage,
};

export const store = configureStore({
  reducer: {
    events: persistReducer(eventsPersistConfig, eventsReducer),
    register: persistReducer(registerIdPersistConfig, registerEventReducer),
    date: dateReducer,
    participants: participantsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
