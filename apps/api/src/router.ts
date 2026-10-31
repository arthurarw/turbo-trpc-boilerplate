import { router } from "./infra/trpc";

export const appRouter = router({});

export type AppRouter = typeof appRouter;
