export default {
  postLogin: () => `auth/login`,
  getAllStaff: () => `staff`,
  postStaff: () => `staff/add`,
  postUpdateStaff: (id) => `staff/update/${id}`,
  deletestaff: (id) => `staff/delete/${id}`,
};
