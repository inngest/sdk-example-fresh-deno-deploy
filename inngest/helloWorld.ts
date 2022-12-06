import { createFunction } from "npm:inngest";

export default createFunction("Hello World", "app/user.created", () => {
  return {
    message: "Hello Inngest!",
  };
});
