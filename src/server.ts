import { http } from "./http";
import "./websocket/client";
import "reflect-metadata";

http.listen(3333, () => {
  console.log("Is running!!!");
});
