//导入axios和配置文件
import axios from 'axios';
import config from './../../config';
//@ts-ignore
import queryString from 'query-string';


//反馈类
export default class FeedbackService {
    //反馈
    //@params:  title:string=主题
    //          content:string=内容
    //          type:string=邮件类型(只有1(不是NORMAL_ADVICE!!)),默认1
    //@return:Promise<AxiosResponse>
    feedback(title: string, content: string, type: string = "1"): Promise<any> {
        return axios.post(config.apiBase + '/user/advice', queryString.stringify({
            type,
            "mail.title": title,
            "mail.content": content
        }), {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data)
    }
}