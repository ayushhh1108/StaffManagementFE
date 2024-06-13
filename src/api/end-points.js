export default {
  postLogin: () => `auth/login`,
  postAddBlog: () => `blog/createBlog`,
  postUpdateBlog: () => `blog/updateBlog`,
  getAllBlogs: () => `blog/getAllBlog`,
  deleteBlog: () => `blog/deleteBlog`,
  postAddCareer: () => `career/createCareer`,
  getAllCareer: () => `career/getAllCareer`,
  postUpdateCareer: () => `career/updateCareer`,
  deleteCareer: () => `career/deleteCareer`,
  postAddAboutpage: () => `about/createAboutPage`,
  postUpdateAboutpage: () => `about/updateAboutPage`,
  getAllAboutpage: () => `about/getAboutPageList`,
  deleteAboutpage: () => `about/deleteAboutPageData`,
  postAddSlider: () => `slider/createSlider`,
  postUpdateSlider: () => `slider/updateSlider`,
  getAllSlider: () => `slider/getSliderList`,
  deleteSlider: () => `slider/deleteSlider`,
  postAddRole: () => `role/createUserRole`,
  postUpdateRole: () => `role/updateStatusUserRole`,
  deleteUserRole: () => `role/userRoleDelete`,
  getAllUserRole: () => `role/userRoleList`,
  updateUser: () => `user/updateUser`,
  postUser: () => `user/createUser`,
  getAllUsers: () => `user/getAllUser`,
  deleteUser: () => `user/deleteUser`,
  addFeedback: () => `feedback/createFeedbackRequest`,
  deleteFeedback: () => `feedback/deleteFeedbackData`,
  getFeedback: () => `feedback/getFeedbackList`,
  updateFeedback: () => `feedback/updateFeedbackRequest`,
  getNewsLater: () => `newsletter/getAllNewsLetter`,
  getJobApplications: () => `career/JobApplications`,
  postDealingInItem: () => `home/createDealingInItem`,
  getDealingInItems: () => `home/getDealingItemList`,
  updateDealingInItem: () => `home/updateDealingInItem`,
  deleteDealingInItem: () => `home/deleteDealingItem`,
  getServiceRequests: () => `service/getServicesEnquiryList`,
  deleteServiceRequest: () => `service/deleteServicesEnquiry`,
  postFinancepage: () => `finance/createFinance`,
  getFinancepage: () => `finance/getFinanceList`,
};
