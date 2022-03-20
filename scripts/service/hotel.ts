import config from 'config.json';
import { createServiceCallObject } from 'service';

const  serviceUrl  = config.environments.serviceUrl;
const sc = createServiceCallObject(serviceUrl);
export async function getShowcases(): Promise<any> {
    try {
        const response = await sc.request('/showcases', {
            method: 'GET'
        });
        return response;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getHotels():Promise<any>{
    try {
        const response = await sc.request('/hotels',{
            method: 'GET'
        });
        return response;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getHotelsForFilter(filter:string):Promise<any>{
    try {
        const response = await sc.request(`/hotels?search=${filter}`,{
            method: 'GET'
        })
        return response;
    } catch (err) {
        console.log(err)
        throw err;
    }
}

export async function getHotelById(id:number):Promise<any>{
    try {
        const response = await sc.request(`/hotels?id=${id}`,{
            method:'GET'
        })
        return response;
    } catch (err) {
        console.log(err);
        throw err;
    }
}