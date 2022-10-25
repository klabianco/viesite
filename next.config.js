// this simply tests the redirecting of the root path (source)
module.exports = {
  async redirects() {
    return [
      {
        source: "/fern-leopard-books",
        destination: "https://ferntheleopard.com",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
