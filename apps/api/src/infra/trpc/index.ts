import { db } from "@repo/db";
import { initTRPC } from '@trpc/server';

export const createContext = () => ({ db });
type Context = Awaited<ReturnType<typeof createContext>>;
const trpc = initTRPC.context<Context>().create();

const errorMiddleware = trpc.middleware(async ({ next }) => {
  const result = await next();

  if ('error' in result && result.error) {
    console.trace(result.error);
  }

  return result;
});

export const router = trpc.router;
export const middleware = trpc.middleware;
export const procedure = trpc.procedure.use(errorMiddleware);
