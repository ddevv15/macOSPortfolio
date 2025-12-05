import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useMobileStore = create(
  immer((set) => ({
    currentView: null, // 'finder' | 'safari' | 'photos' | 'contact' | 'terminal' | 'resume' | 'txtfile' | 'imgfile'
    viewData: null, // Data passed to view (e.g., file contents, folder data)
    history: [], // For back navigation

    openView: (view, data = null) =>
      set((state) => {
        // Push current view to history if it exists
        if (state.currentView) {
          state.history.push({
            view: state.currentView,
            data: state.viewData,
          });
        }
        state.currentView = view;
        state.viewData = data;
      }),

    goBack: () =>
      set((state) => {
        const previous = state.history.pop();
        if (previous) {
          state.currentView = previous.view;
          state.viewData = previous.data;
        } else {
          state.currentView = null;
          state.viewData = null;
        }
      }),

    goHome: () =>
      set((state) => {
        state.currentView = null;
        state.viewData = null;
        state.history = [];
      }),

    replaceView: (view, data = null) =>
      set((state) => {
        // Replace current view without adding to history
        state.currentView = view;
        state.viewData = data;
      }),
  }))
);

export default useMobileStore;

