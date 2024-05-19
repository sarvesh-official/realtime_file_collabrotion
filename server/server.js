const io = require("socket.io")(5000, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
