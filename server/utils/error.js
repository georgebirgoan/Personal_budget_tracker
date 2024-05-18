export const errorHandler=(statusCode,message)=>{
    const error=new Error();
    error.statusCode=statusCode;//error constructor
    error.message=message;
    
    return error;
}