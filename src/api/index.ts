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
