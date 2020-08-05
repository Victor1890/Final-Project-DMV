import axios from "axios";

export function Users({ email, pass } = {email = 'test', pass='123'}) {
    GetDataUser({ email, pass });
  return axios.post("/api/ApiUsers", {
    'Email': email,
    'Password': pass,
  });
}

export function GetDataUser({ email, pass }){
    return { email, pass };
}