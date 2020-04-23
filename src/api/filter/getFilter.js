import HTTP from "../http-common";

export default () => {
  return HTTP.get("http://syapukovit.ru/vue-filter/json/filter.json", {
    headers: {
    },
    cache: false
  });
}
  
