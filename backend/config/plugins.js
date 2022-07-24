module.exports = ({ env }) => ({
  ezforms: {
    config: {
      captchaProvider: {
        name: "none",
      },
      notificationProviders: [
        {
          name: "email",
          enabled: true,
          config: {
            from: "xiix@naver.com",
          },
        },
      ],
    },
  },
});
