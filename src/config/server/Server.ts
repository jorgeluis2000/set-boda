import AppRouter from "@myapp-app/routes/app.route";
import i18n from "@myapp-config/connections/translate.connection";
import { SERVER_SETTINGS } from "@myapp-utils/constants/server.constant";
import i18nextMiddleware from "i18next-http-middleware";
import cors from "cors";
import express, {
  type NextFunction,
  type Express,
  type Response,
  type Request,
} from "express";

export default class Server {
  private readonly _httpServer: Express;
  private readonly _port: number;
  private readonly _domain: string;

  constructor(portServer: number, domainServer = "localhost") {
    this._httpServer = express();
    this._port = portServer;
    this._domain = domainServer;
    this.middlewares();
    this.healthCheck();
    this.routes();
    // this.notFound();
  }

  private healthCheck(): void {
    this._httpServer.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        ok: true,
        http_code: 2000,
        message: req.t("healthCheck"),
        data: null,
      });
    });
  }

  private routes(): void {
    this._httpServer.use(AppRouter);
  }

  private notFound(): void {
    this._httpServer.use("*", (req: Request, res: Response) => {
      res.status(404).json({
        ok: false,
        http_code: 4004,
        message: req.t("notFound"),
        data: null,
      });
    });
  }

  private middlewares(): void {
    this._httpServer.use(cors());
    this._httpServer.set("trust proxy", true);
    this._httpServer.use((_, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, TOKEN-AUTH, API-KEY-PAZARDEV"
      );
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
      next();
    });
    this._httpServer.use(express.text());
    this._httpServer.use(express.urlencoded({ limit: "20mb", extended: true }));
    this._httpServer.use(express.json());
    this._httpServer.use(i18nextMiddleware.handle(i18n));
  }

  public async start(): Promise<void> {
    this._httpServer.listen(this._port, () => {
      const httpsString =
        this._domain !== SERVER_SETTINGS.domain
          ? `${this._domain}/`
          : `http://${SERVER_SETTINGS.domain}:${this._port}`;
      console.log("🚀 Start server listening on", httpsString, "🚀");
      console.log("\nClose the server using command Ctrl + C 👋");
    });
  }
}
