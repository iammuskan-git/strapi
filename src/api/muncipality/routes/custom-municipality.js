module.exports = {
  routes: [
    {
      method: "GET",
      path: "/muncipality/district/:id",
      handler: "muncipality.findByDistrict",
      config: {
        auth: false,
      },
    },
  ],
};
