import { Request, Response } from "express";
import { MessageService } from "../services/MessageService";

class MessagesController {
  async create(request: Request, response: Response) {
    const { user_id, admin_id, text } = request.body;

    const messageService = new MessageService();

    const message = await messageService.create({
      admin_id,
      user_id,
      text,
    });

    return response.json(message);
  }

  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    const messageService = new MessageService();

    const allMessages = await messageService.listByUser(id);

    return response.json(allMessages);
  }
}

export { MessagesController };
