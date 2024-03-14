import type IUser from "@/interfaces/IUser"
import { ref, type Ref } from "vue"

const url = import.meta.env.VITE_API_URL || 'http://172.16.107.202:3000'

export default class UserService {
    private users: Ref<IUser[]>
    private user: Ref<IUser>

    constructor(){
        this.users = ref([])
        this.user = ref({}) as Ref<IUser>
    }

    getUsers(): Ref<IUser[]>{
        return this.users
    }
    getUser(): Ref<IUser>{
        return this.user
    }
    
    async fetchAllUsers(): Promise<void>{
        try{
            const json = await fetch(url+'/users')
            const response = await json.json()
            this.users.value = await response
        }
        catch(error){
            console.error(error)
        }
    }
    
    async fetchUser(email: string): Promise<void>{
        try{
            const json = await fetch(url+'/User/?email='+email)
            const response = await json.json()
            this.user.value = await response
        }
        catch(error){
            console.error(error)
        }
    }

    // async fetchUser(id: string): Promise<void>{
    //     try{
    //         const json = await fetch(url+'/users/'+id)
    //         const response = await json.json()
    //         this.user.value = await response
    //     }
    //     catch(error){
    //         console.error(error)
    //     }
    // }

    async createUser(user: IUser): Promise<void>{
        try{
            const json = await fetch(url+'/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(user)
            })
            const response = await json.json()
            this.user.value = await response
        }
        catch(error){
            console.log('Error creating user')
        }
    }

}