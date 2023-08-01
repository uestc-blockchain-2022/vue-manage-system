import request from '../utils/request';

export const fetchData = (url : string) => {
    return request({
        url: url,
        method: 'get'
    });
};

export const fetchDataNode = () => {
    return request({
        url: './node.json',
        method: 'get'
    });
};
export const putData = (url : string,data : any) => {
    return request({
        url: url,
        method: 'put',
        data: data
    });
}
