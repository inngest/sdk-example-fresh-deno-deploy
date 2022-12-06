import { serve } from "npm:inngest/deno/fresh";
import fns from "../../inngest/index.ts";

export const handler = serve("My Fresh App", fns);
