import express, { application } from "express";
import cors from "cors";
import router from "../router/users/user";

class Server {
  private PORT = process.env.PORT;
  private app = application;

  constructor() {
    this.app = express();
    this.PORT;
    this.middlewares();
    this.routers();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routers() {
    this.app.use("/api", router);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server listen  port ${this.PORT}`);
    });
  }
}

export default Server;
