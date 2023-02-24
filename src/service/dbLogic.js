import axios from "axios";
import React from "react";

export const jsonDeptList = (params) => {
  return new Promise((resolve,reject)=>{
    try {
    const response = axios({
        method:"get",
        url: process.env.React_APP_CHAT1128_IP+"dept/jsonDeptList.st1",
        params:params,
    });    
    resolve(response);
    } catch (error) {
        reject(error);
    }
  });
};

/*rafce 단축키 -arrow function */
/* 리액트랑 톰캣이랑 연동 하는것 */ 