import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import { createContext } from "./infra/trpc";

import cors from "cors";
import { appRouter } from "./router";

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/trpc", createExpressMiddleware({ router: appRouter, createContext }));
app.listen(4000);
