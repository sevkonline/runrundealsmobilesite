// Appery.io models
export interface $aio_empty_object {};
//
export interface RESTlikeupdateResponse {
    "title": string,
    "discount": string,
    "code": string,
    "category": string,
    "description": string,
    "price": string,
    "updatedAt": string,
    "disslike": number,
    "hotcount": number,
    "like": number,
    "imgurl": string,
    "url": string,
    "_id": string,
    "old_price": string,
    "expirationDate": string,
    "createdAt": string,
    "__v": number,
    "id": string
}
//
interface __User_user_query_serviceResponse_sub_004 {
    "read": boolean,
    "write": boolean
}
interface __User_user_query_serviceResponse_sub_003 {
    "*": __User_user_query_serviceResponse_sub_004
}
interface __User_user_query_serviceResponse_sub_002 {}
interface __User_user_query_serviceResponse_sub_001 {
    "_updatedAt": string,
    "_createdAt": string,
    "uname": string,
    "auth": __User_user_query_serviceResponse_sub_002,
    "firstName": string,
    "username": string,
    "acl": __User_user_query_serviceResponse_sub_003,
    "_id": string,
    "lastName": string
}
export interface User_user_query_serviceResponse extends Array < __User_user_query_serviceResponse_sub_001 > {}
//
interface __RESTSearchResponse_sub_001 {
    "_id": string,
    "title": string,
    "id": string,
    "updatedAt": string,
    "url": string,
    "__v": number,
    "discount": string,
    "code": string,
    "expirationDate": string,
    "price": string,
    "old_price": string,
    "category": string,
    "createdAt": string,
    "imgurl": string
}
export interface RESTSearchResponse extends Array < __RESTSearchResponse_sub_001 > {}
//
interface __RESTbyCategoryResponse_sub_001 {
    "_id": string,
    "url": string,
    "createdAt": string,
    "code": string,
    "__v": number,
    "old_price": string,
    "category": string,
    "price": string,
    "expirationDate": string,
    "discount": string,
    "title": string,
    "id": string,
    "imgurl": string,
    "updatedAt": string
}
export interface RESTbyCategoryResponse extends Array < __RESTbyCategoryResponse_sub_001 > {}
//
interface __restapiResponse_sub_001 {
    "like": number,
    "reports": number,
    "createdAt": string,
    "old_price": string,
    "discount": string,
    "description": string,
    "imgurl": string,
    "rating": number,
    "featured": boolean,
    "hotcount": number,
    "star": number,
    "url": string,
    "code": string,
    "expirationDate": string,
    "price": string,
    "__v": number,
    "id": string,
    "updatedAt": string,
    "_id": string,
    "isPrime": boolean,
    "category": string,
    "disslike": number,
    "title": string
}
export interface restapiResponse extends Array < __restapiResponse_sub_001 > {}
//
export interface User_user_update_serviceResponse {
    "_updatedAt": string
}
//
export interface MailgunEmail_Mailgun_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface RESTFeaturedResponse {}
//
export interface SignupServiceResponse {
    "_createdAt": string,
    "username": string,
    "sessionToken": string,
    "_updatedAt": string,
    "_id": string
}
//
export interface todoDB_resetpassword_create_serviceResponse {
    "_id": string,
    "_createdAt": string
}
//
export interface LogoutServiceResponse {}
//
export interface primedealsResponse {}
//
export interface LoginServiceResponse {
    "sessionToken": string,
    "_id": string
}
//
interface __User_me_serviceResponse_sub_003 {
    "read": boolean,
    "write": boolean
}
interface __User_me_serviceResponse_sub_002 {
    "*": __User_me_serviceResponse_sub_003
}
interface __User_me_serviceResponse_sub_001 {}
export interface User_me_serviceResponse {
    "username": string,
    "_updatedAt": string,
    "uname": string,
    "_createdAt": string,
    "auth": __User_me_serviceResponse_sub_001,
    "firstName": string,
    "lastName": string,
    "_id": string,
    "acl": __User_me_serviceResponse_sub_002
}
//
export interface todoDB_feedbacks_create_serviceResponse {
    "_id": string,
    "_createdAt": string
}
//
export interface SocialSharingServiceResponse {
    "app": string
}