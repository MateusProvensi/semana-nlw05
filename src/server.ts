import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

const port = 3333;

http.listen(port, () => {
  console.log(`Is running on port: ${port} !!!`);
});
