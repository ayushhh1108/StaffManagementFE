
export default {
    postLogin: ()=> `auth/login`,
    postAddBlog: ()=> `blog/createBlog`,
    postUpdateBlog: ()=> `blog/updateBlog`,
    getAllBlogs: ()=> `blog/getAllBlog`,
    postAddCareer: ()=> `career/createCareer`,
    getAllCareer: ()=> `career/getAllCareer`,
    postAddAboutpage: ()=> `about/createAboutPage`,
    postUpdateAboutpage: ()=> `about/updateAboutPage`,
    getAllAboutpage: ()=> `about/getAboutPageList`,
    deleteAboutpage: ()=> `about/deleteAboutPageData`,
    // getUserToken:(id)=>`users/token/get?token=${id}`,
};