export default {
  api: {
    store: {
      routes: [
        {
          method: "POST",
          path: "/custom-email",
          handler: __dirname + "/api/routes/store/custom-email.ts",
        },
      ],
    },
  },
}