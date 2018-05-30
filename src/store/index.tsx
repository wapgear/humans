import dev from "./store.dev"
import prod from "./store.prod"

export default process.env.NODE_ENV === "development" ? dev : prod;
