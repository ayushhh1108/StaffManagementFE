
export default {
    postLogin: ()=> `auth/login`,
    postAddBlog: ()=> `blog/createBlog`,
    getAllBlogs: ()=> `blog/getAllBlog`,
    postAddCareer: ()=> `career/createCareer`,
    // getUserToken:(id)=>`users/token/get?token=${id}`,
};