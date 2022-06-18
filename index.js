const prev_version = 'v1';
const latest_version = 'v2';

const api = {
  user: `${latest_version}/user`,
};

class API {
  detail() {}
  list() {}
  post() {}
  put() {}
  delete() {}
}

class UserApi extends API {
  list() {
    return api.user;
  }

  detail(args) {
    return api.user + args;
  }
}

const apiTest = new UserApi();

console.log(apiTest.detail(' with args'));
console.log(apiTest.list());
