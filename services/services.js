import axios from 'axios';


const localaddress = 'localhost:8080'
const ec2address= '13.236.184.156'
const address = ec2address

export function GetCandidates(fname=null, lname=null, email=null) {

    let parameters = {
        ...fname ? { fname: fname } : {},
        ...lname ? { lname: lname } : {},
        ...email ? { email: email } : {},
        
    }

    let data = axios.get(`http://${address}/candidates`, {params: parameters}).then(response => response.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(data), 1000);
    })
}

export function GetCandidate(id) {

    
    let data = axios.get(`http://${address}/candidates/${id}`).then(response => response.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(data), 1000);
    })
}

export function CreateCandidate(canInfo) {
    return axios.post(`http://${address}/candidates`, canInfo).then(response => response.data)
        .catch(error => {
            console.log('There was an error!' + error.message, error);
        });
}

export function UpdateCandidate(id,canInfo) {
    return axios.put(`http://${address}/candidates/${id}`, canInfo).then(response => response.data)
        .catch(error => {
            console.log('There was an error!' + error.message, error);
        });
}

export function DeleteCandidate(id) {
    return axios.delete(`http://${address}/candidates/${id}`).then(response => console.log(response))
        .catch(error => {
            console.log('There was an error!' + error.message, error);
        });
}