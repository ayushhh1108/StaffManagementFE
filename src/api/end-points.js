
export default {
    postLogin: ()=> `auth/login`,
    postAddBlog: ()=> `blog/createBlog`,
    postUpdateBlog: ()=> `blog/updateBlog`,
    getAllBlogs: ()=> `blog/getAllBlog`,
    postAddCareer: ()=> `career/createCareer`,
    getAllCareer: ()=> `career/getAllCareer`,
    postAddAboutpage: ()=> `about/createAboutPage`,
    postUpdateAboutpage: ()=> `blog/updateBlog`,
    getAllAboutpage: ()=> `blog/getAllBlog`,
    // getUserToken:(id)=>`users/token/get?token=${id}`,
};