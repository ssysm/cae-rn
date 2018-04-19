import axios from 'axios';
import config from './../../config';

export default class CallService {
    
    getIndex():Promise<any>{
        return axios.get(config.apiBase+'/call/index')
            .then(res=>res.data)
    }
    searchCall(page:number,songName:string,orderDir:string="ASC"):Promise<any>{
        return axios.get(config.apiBase+'/call/search',{
            params:{page, songName, orderDir}
        })
    }
    getCallDetail(songId:string):Promise<any>{
        return axios.get(config.apiBase+'/call/detail',{
            params:{"song.songId":songId}
        })
    }

}