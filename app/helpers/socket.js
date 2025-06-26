import { io } from "socket.io-client";

let socket;

export const initializeSocket = () => {
  if (!socket) {
    socket = io(process.env.socket_url, {
      auth: {
        token: localStorage.getItem('token'), 
      },
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connect error:", err.message);
    });
  }
  return socket;
};

  
export const getSocket = () => {
  if (!socket) {
    throw new Error("Socket not initialized. Call initializeSocket() first.");
  }
  return socket;
};