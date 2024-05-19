import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import {Server} from 'socket.io';

@WebSocketGateway({namespace: 'events'})
export class EventsGateway {

  @WebSocketServer()
  server: Server

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  handleTaskCreated(task: any) {
    this.server.emit('taskCreated', task)
  }

  handleTaskUpdated(task: any) {
    this.server.emit('taskUpdated', task);
  }

  handleTaskDeleted(task: any) {
    this.server.emit('taskDeleted', task);
  }

  handleTaskRetrieved(task: any){
    this.server.emit('taskRetrieved', task);
  }

}
