import { defineStore } from "pinia"
import { v4 as uuidv4 } from 'uuid';

export const useUserStore = defineStore("users", {
	state: () => {
		return {
			users: []
		}
	},
	actions: {
		create(user) {
			this.users.push({...user, id: uuidv4()})
		},
		delete(id) {
			this.users = this.users.filter(user => user.id !== id)
		}
	},
	getters: {
		usersByName(state) {
			const sortable = [...state.users]
			return sortable.sort((a, b) => a.name.localeCompare(b.name))
		}
	}
})