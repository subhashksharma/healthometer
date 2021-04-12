
import * as socketio from "socket.io";

class SocketIoWrapper
{

  private _socketIo: any;

  get socket()
  {
    return this._socketIo;

  }
  
  connect(http : any)
  {

    this._socketIo = require('socket.io').(http);
   
 }

}


