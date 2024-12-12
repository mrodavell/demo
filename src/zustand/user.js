import { create } from 'zustand'
import { supabase } from '../lib/supabase'

export const userStore = create((set, get) => ({
  user: undefined, 
  setUser: async (user) => {
    set({ user });
    await get().updateDBuser();
  },
  updateDBuser: async () => { 
    try{
      const { error } = await supabase.auth.updateUser({
        data: {
          display_name: get().user.name
        }
      })
 
      if(error){
        throw error;
      }
    }catch(error){
      throw error;
    }
  }
}));