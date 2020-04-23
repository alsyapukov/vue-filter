import HTTP from "../http-common";

export default () => {
  return HTTP.get("http://localhost:8080/vue-filter/json/filter.json", {
    headers: {
    },
    cache: false
  });
}
  
