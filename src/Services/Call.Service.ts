//import dep
import axios from 'axios';
import config from './../../config';
//Call表服务类
export default class CallService {
    //主页
    //@return:Promise<AxiosResponse>
    getIndex():Promise<any>{
        return axios.get(config.apiBase+'/call/index')
            .then(res=>res.data)
    }
    //搜索call表
    //@params:  page:number=页数
    //          songName:string=搜索关键字
    //          orderDir:string=排序模式(默认ASC(正传))
    //@return:Promise<AxiosResponse>
    searchCall(page:number,songName:string,orderDir:string="ASC"):Promise<any>{
        return axios.get(config.apiBase+'/call/search',{
            params:{page, songName, orderDir}
        })
            .then(res=>res.data)
    }
    //获取call表内容
    //@params:  songId:string:call表id
    //@return:Promise<AxiosResponse>
    getCallDetail(songId:string):Promise<any>{
        return axios.get(config.apiBase+'/call/detail',{
            params:{"song.songId":songId}
        })
            .then(res=>res.data)
    }

}