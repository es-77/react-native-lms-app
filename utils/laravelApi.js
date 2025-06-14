function laravelApi() {
    // const baseUrl = 'http://localhost/machinan-backend/public/api';
    const baseUrl = 'http://127.0.0.1:8000/api';
    // const baseUrl = "https://machinrun.islapps.tech/backend/public/api";
  
    const home = `${baseUrl}/admin`;
  
    return {
      home,
      auth: {
        login: `${home}/auth/login`,
        forgot: `${home}/auth/forgot`,
        newPassword: `${home}/auth/newPassword`,
        logout: `${home}/auth/logout`,
        user: `${home}/auth/user`,
      },
      users: {
        admin: `${home}/users/admin`,
        adminDestory: `${home}/users/adminDestory`,
        customer: `${home}/users/customer`,
        customerDestory: `${home}/users/customerDestory`,
        operator: `${home}/users/operator`,
        operatorDestory: `${home}/users/operatorDestory`,
        supplierDestory: `${home}/users/supplierDestory`,
        supplier: `${home}/users/supplier`,
        rigger: `${home}/users/riggers-get`,
        riggerDelete: `${home}/users/riggers-delete`,
        riggerSaveOrUpdate: `${home}/users/riggers-save-update`,
      },
    };
  }
  
  export default laravelApi();