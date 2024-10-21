import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'8e4f8ce35bd944e9abc39f958c4163ff'
    }
})