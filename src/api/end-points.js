
export default {
    postLogin: ()=> `auth/login`,
    postAddBlog: ()=> `blog/createBlog`,
    getAllBlogs: ()=> `blog/getAllBlog`,
    postAddCareer: ()=> `career/createCareer`,
    getAllCareer: ()=> `career/getAllCareer`,
    // getUserToken:(id)=>`users/token/get?token=${id}`,
};