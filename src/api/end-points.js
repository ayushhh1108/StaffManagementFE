export default {
  postLogin: () => `auth/login`,
  getAllStaff: () => `staff`,
  postStaff: () => `staff/add`,
  postUpdateStaff: (id) => `staff/update/${id}`,
  deletestaff: (id) => `staff/delete/${id}`,
  getAllProperty: () => `property`,
  postProperty: () => `property/add`,
  postUpdateProperty: (id) => `property/update/${id}`,
  deleteProperty: (id) => `property/delete/${id}`,
};
