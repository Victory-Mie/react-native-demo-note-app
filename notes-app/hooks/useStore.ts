import { create } from "zustand";
import axios from "axios";
import { API_URL } from "../constants/constants";

interface Note {
  _id: string;
  text: string;
}

interface NoteStore {
  notes: Note[];
  fetchNotes: () => Promise<void>;
  addNote: (text: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
}

export const useStore = create<NoteStore>((set) => ({
  notes: [],
  fetchNotes: async () => {
    const res = await axios.get(`${API_URL}/notes`);
    set({ notes: res.data });
  },
  addNote: async (text) => {
    const res = await axios.post(`${API_URL}/notes`, { text });
    set((state) => ({ notes: [...state.notes, res.data] }));
  },
  deleteNote: async (id) => {
    await axios.delete(`${API_URL}/notes/${id}`);
    set((state) => ({ notes: state.notes.filter((note) => note._id !== id) }));
  },
}));
