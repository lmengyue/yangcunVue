import axios from 'axios'
import qs from 'qs'
import {URL} from './common'
export function fetch (method, url, data, callback){
  	let newurl=URL + url ;
  	if(method === 'get'){
  		if(data != ''){
  			newurl= URL + url + '?'+ qs.stringify(data);
  		}
	  	axios({
	  		url:newurl,
	  		method:'get'
	  	}).then((response) => {
	  		if(response.data.code == 0){
	  			callback(response.data)
	  		}else{
	  			alert(response.data.msg)
	  		}
	  	}).catch((error)=>{
	  		alert('服务器飞走了')
	  	})
  	}
  	
  	if(method=='post'){
  		axios({
  			url:newurl,
  			method:'post',
  			data:data
  		}).then((response)=>{
  			if(response.data.code == 0){
	  			callback(response.data)
	  		}else{
	  			alert(response.data.msg)
	  		}
  		}).catch((error)=>{
	  		alert('服务器飞走了')
	  	})
  	}
}

