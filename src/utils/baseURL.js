const getBaseUrl = () => {
  const isDevelopment = import.meta.env.MODE === "development";
  return isDevelopment
    ? "http://localhost:5000"
    : "https://book-store-backend-mocha-one.vercel.app";
};

export default getBaseUrl;
