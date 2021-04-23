import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersService";

io.on("connect", (socket) => {
  const connectionService = new ConnectionsService();
  const usersService = new UsersService();

  socket.on("client_first_acess", async (params) => {
    const socket_id = socket.id;
    const { text, email } = params;

    const userExists = await usersService.findByEmail(email);

    if (!userExists) {
      const user = await usersService.create(email);

      await connectionService.create({
        socket_id,
        user_id: user.id,
      });
    } else {
      await connectionService.create({
        socket_id,
        user_id: userExists.id,
      });
    }
  });
});
