import { REST_PORT } from "@myapp-config/environments/server.env";
import Server from "@myapp-config/server/Server";

try {
  const server = new Server(REST_PORT);
  void server.start();
} catch (error) {
  console.log("❌ System Error App (Error Server ~ Server Faild)", error);
}
