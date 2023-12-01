import express from "express";

import {
  getMyDetails,
  getMyFriendsDetails,
  getMyPostsDetails,
  getMyAttachmentsDetails,
} from "../controllers/fb.controller";

const router = express.Router();
router.route("/me").get(getMyDetails);
router.route("/friends").get(getMyFriendsDetails);
router.route("/posts").get(getMyPostsDetails);
router.route("/attachments").get(getMyAttachmentsDetails);

export default router;
