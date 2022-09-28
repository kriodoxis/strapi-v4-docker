module.exports = {
    routes: [
      {
        method: "GET",
        path: "/affiliates/near",
        handler: "affiliate.findNear",
        config:{
          auth: false
        }
      }
    ]
  }