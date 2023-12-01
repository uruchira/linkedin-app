import { Request, Response } from "express";

import {
  getUserDetails,
  getFriendsByUserId,
  getPostsByUserId,
  getAttachmentsByPostId,
} from "../services/fb.service";

export const getMyDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const me = await getUserDetails();
    res.status(200).json({ data: me?.data, message: "success" });
  } catch (error) {
    console.error(error);
  }
};

export const getMyFriendsDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const friends = await getFriendsByUserId();
    res.status(200).json({ data: friends?.data, message: "success" });
  } catch (error) {
    console.error(error);
  }
};

export const getMyPostsDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const posts = await getPostsByUserId();
    res.status(200).json({ data: posts?.data, message: "success" });
  } catch (error) {
    console.error(error);
  }
};

export const getMyAttachmentsDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const attachments = await getAttachmentsByPostId();
    res.status(200).json({ data: attachments?.data, message: "success" });
  } catch (error) {
    console.error(error);
  }
};
