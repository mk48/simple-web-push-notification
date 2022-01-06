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
    "https://fcm.googleapis.com/fcm/send/eEpreGwJ8zo:APA91bGt604P9RNbTTEz8JZvbz9lLL6OkFj2L2rO6aGjyBGQAAD2aUBxTrsvVKd_oQNoUhMzQ9TjN2gjnFPFEt8w1JCL2sEx6SkDvuXEQO4hoeSOuYt10EuTe2POkLRLff1CxrB6kefJ",
  expirationTime: null,
  keys: { p256dh: "BGdXhbRKY7X1D01TPceKyavUcHTT5Y9C-MtlEqKYF2bsdCWdbX4D0dNTFSLYA237Kfja9de9mnVEqltzCtg-5_A", auth: "1Ap3fqxvtzRB8axB5E_cUg" },
};
webpush.sendNotification(pushSubscription, "Your Push Payload Text");
