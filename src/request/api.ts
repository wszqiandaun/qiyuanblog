import request from "./index"

// 请求中： 请求参数和返回值的类型都需要进行约束


// 登录请求
export const LoginAPI = (params:LoginAPIReq):Promise<LoginAPIRes> =>request.post("/prod-api/login",params);
