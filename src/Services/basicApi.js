import axios from 'axios';

axios.defaults.withCredentials = true;

export const axiosConfigReturn = (path, method = 'get', pathType = null) => {
    return {
        method: method,
        url:  process.env.REACT_APP_BASE_API_PATH  + path,
        headers: {
            'Content-Type': 'application/json',
        },
    };
}

export const postAPI = async(path, data) =>{
    let base_path = process.env.REACT_APP_BASE_API_PATH + path;
    let headers = {
        'Accept': 'application/json', 
        'fcmToken': 'dfkldjflksdjfl',
        'platform' : 'web'
    };
    var result = await new Promise((resolve, reject) => {
        axios.post(base_path, data, {
            headers: headers}).then((response)=>{
              resolve(response);
        },(err)=>{
            resolve(err);
        });
    })
    return result;
};

export const getAPI = async(path, token) =>{
    let base_path = process.env.REACT_APP_BASE_API_PATH + path;
    let headers = {
        'Accept': 'application/json',
    };

    var result = await new Promise((resolve, reject) => {
        axios.get(base_path, {headers: headers}).then((response)=>{
            if (response.status >= 400 && response.status < 600) {
                reject(Error("get api error"));
                throw new Error("Bad response from server");
              }
              resolve(response);
        },(err)=>{
            resolve(err);
        })
    })
    return result;
};

export const putAPI = async(path, data) =>{
    let base_path = process.env.REACT_APP_BASE_API_PATH + path;
    var result = await new Promise((resolve, reject) => {
        axios.put(base_path+path, data, {
            headers: {
                'Accept': 'application/json',
            }}).then((response)=>{
            if (response.status >= 400 && response.status < 600) {
                reject(Error("put api error"));
                throw new Error("Bad response from server");
              }
              resolve(response);
        },(err)=>{
            resolve(err);
        })
    })
    return result;
};

export const deleteAPI = async(path, data) =>{
    let base_path = process.env.REACT_APP_BASE_API_PATH + path;
    var result = await new Promise((resolve, reject) => {
        var config = {
            method: 'delete',
            url: base_path+path,
            headers: {
                'Accept': 'application/json',
            },
            data : data
          };
          axios(config).then((response)=>{
            if (response.status >= 400 && response.status < 600) {
                reject(Error("delete api error"));
                throw new Error("Bad response from server");
              }
              resolve(response);
        },(err)=>{
            resolve(err);
        })
    })
    return result;
};
