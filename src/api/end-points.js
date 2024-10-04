export default {
  postLogin: () => `auth/login`,
  getAllStaff: () => `staff`,
  postStaff: () => `staff/add`,
  postUpdateStaff: (id) => `staff/updateBlog/${id}`,
  deletestaff: (id) => `staff/delete/${id}`,
};
