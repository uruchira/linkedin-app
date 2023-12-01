import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://graph.facebook.com/v18.0/",
});

export const getUserDetails = async () => {
  try {
    const response = await axiosInstance.get(
      "/me?fields=age_range,first_name,last_name",
      {
        headers: {
          Authorization: `Bearer ${process.env.FB_APP_ACCESS_TOKEN}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getFriendsByUserId = async () => {
  try {
    const response = await axiosInstance.get("/122096070812140769/friends", {
      headers: {
        Authorization: `Bearer ${process.env.FB_APP_ACCESS_TOKEN}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getPostsByUserId = async () => {
  try {
    const response = await axiosInstance.get("/122096070812140769/posts", {
      headers: {
        Authorization: `Bearer ${process.env.FB_APP_ACCESS_TOKEN}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAttachmentsByPostId = async () => {
  try {
    const response = await axiosInstance.get(
      "/122096070812140769_122096100698140769/attachments",
      {
        headers: {
          Authorization: `Bearer ${process.env.FB_APP_ACCESS_TOKEN}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
