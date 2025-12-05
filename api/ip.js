export default function handler(req, res) {
  // Vercel 获取真实 IP 的头部
  const ip =
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown";

  res.status(200).json({ ip });
}
