const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: "BKRYwkit4PdOnVOMdDUF5yrzYycpey3rsFFrVT2sErlYgZZI2DWHSbXfFYClbG8l_bcMd6hw4zpqf4mZUs7mtVs",
  privateKey: "ijWbFUbVOx7MNcoymckWEqFq1ZyCfE2ZRmgfBmG3JrQ",
};

webpush.setVapidDetails("http://mkumaran.net", vapidKeys.publicKey, vapidKeys.privateKey);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eH0VT3rmtbM:APA91bGDI_mMZci-EMaD-BQYRr88PeNGZQ4mRgGCh4u8D-4f3oBgT5Fkw6tUqxfs5wKWufJfUidaLDZ13Cz3DrGiUYFIwSZZO0pU6C-s1oHFKx5IAAubp4de0NBXzLhG6KgiRJAv-itC",
  expirationTime: null,
  keys: { p256dh: "BFvhiMA0TJ-mXTv8Bdzl4Lv8-4K1QJl4fT-BqOU-Zd2leW0PGa5WfNGvTCIi-qhgjT91tnlUmrWXFT_20E63mbU", auth: "BTdkjXq4vLVW4Nace5TKxQ" },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
